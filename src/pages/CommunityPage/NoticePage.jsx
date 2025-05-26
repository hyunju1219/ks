import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import * as S from './style';
import useAuthstate from '@/hooks/useAuthstate';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { getNotices } from '@/firebase/noticeService';

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesList, setNoticesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;
  const { isLoggedIn } = useAuthstate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getNotices();
        setNoticesList(data);
      } catch (error) {
        console.error('공지사항항 불러오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  const breadcrumbs = [
    { name: '커뮤니티', link: '/notice' },
    { name: '공지사항', link: null }
  ];

  // Firebase에서 가져온 데이터만 사용
  const dataToUse = noticesList;
  
  // 검색어에 따른 필터링 (간소화)
  const filteredNotices = dataToUse.filter(notice => 
    notice.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (notice.category && notice.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // 중요 공지를 상단에 배치하고 최신순 정렬
  const sortedNotices = [...filteredNotices].sort((a, b) => {
    if (a.isNew || a.isImportant) return -1;
    if (b.isNew || b.isImportant) return 1;
    return 0;
  });

  console.log(sortedNotices);

  // 페이지네이션
  const totalPages = Math.ceil(sortedNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedNotices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <S.PageContainer>
      <Helmet>
        <title>공지사항 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 공지사항을 확인하세요. 교육생 모집, 자격증 시험 일정, 취업 정보 등의 중요 소식을 전달합니다." />
      </Helmet>
      
      <SubpageHeader 
        title="공지사항" 
        subtitle="금성기술직업전문학교의 새로운 소식과 중요 안내사항을 확인하세요"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.SearchContainer onSubmit={handleSearch}>
            <S.SearchInput 
              type="text" 
              placeholder="검색어를 입력하세요" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <S.SearchButton type="submit">검색</S.SearchButton>
 
            {isLoggedIn ?
            <S.SearchButton><Link href="/admin/notice">등록</Link></S.SearchButton>
          : null}
          </S.SearchContainer>
          
          <S.NoticeTable>
            <thead>
              <tr>
                <S.TableHeader width="10%">번호</S.TableHeader>
                <S.TableHeader width="10%" className="hidden md:table-cell">분류</S.TableHeader>
                <S.TableHeader width="70%">제목</S.TableHeader>
                <S.TableHeader width="10%" className="hidden md:table-cell">작성일</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((notice, index) => (
                <S.TableRow key={notice.id}>
                  <S.TableCell className="text-center">
                    {notice.isImportant ? <S.ImportantBadge>공지</S.ImportantBadge> : indexOfFirstItem + index + 1}
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell text-center">
                    <S.CategoryBadge>{notice.category}</S.CategoryBadge>
                  </S.TableCell>
                  <S.TableCell>
                    <Link href={`/notice/${notice.id}`}>
                      <S.NoticeLink>
                        {notice.title}
                        {notice.isImportant && <S.NewBadge className="md:hidden">공지</S.NewBadge>}
                      </S.NoticeLink>
                    </Link>
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell text-center">{notice.date}</S.TableCell>
                  <S.TableCell className="hidden md:table-cell text-center">{notice.views}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.NoticeTable>
          
          {currentItems.length === 0 && (
            <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
          )}
          
          <S.MobileNoticeList>
            {currentItems.map(notice => (
              <S.MobileNoticeItem key={notice.id}>
                <Link href={`/notice/${notice.id}`}>
                  <S.MobileNoticeContent>
                    <S.MobileNoticeHeader>
                      <S.MobileNoticeCategory>{notice.category}</S.MobileNoticeCategory>
                      {notice.isImportant && <S.ImportantBadge>공지</S.ImportantBadge>}
                    </S.MobileNoticeHeader>
                    <S.MobileNoticeTitle>{notice.title}</S.MobileNoticeTitle>
                    <S.MobileNoticeInfo>
                      <S.MobileNoticeDate>{notice.createdAt?.toDate?.().toLocaleString?.()}</S.MobileNoticeDate>
                    </S.MobileNoticeInfo>
                  </S.MobileNoticeContent>
                </Link>
              </S.MobileNoticeItem>
            ))}
          </S.MobileNoticeList>
          
          <S.Pagination>
            <S.PaginationButton 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              이전
            </S.PaginationButton>
            
            <S.PaginationNumbers>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Calculate the page number to display
                let pageToShow;
                if (totalPages <= 5) {
                  pageToShow = i + 1;
                } else {
                  // Calculate the start page
                  const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
                  pageToShow = startPage + i;
                }
                
                return (
                  <S.PageNumber 
                    key={pageToShow}
                    isActive={currentPage === pageToShow}
                    onClick={() => paginate(pageToShow)}
                  >
                    {pageToShow}
                  </S.PageNumber>
                );
              })}
            </S.PaginationNumbers>
            
            <S.PaginationButton 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              다음
            </S.PaginationButton>
          </S.Pagination>
        </S.SectionInner>
      </S.ContentSection>
    </S.PageContainer>
  );
};

export default NoticePage;
