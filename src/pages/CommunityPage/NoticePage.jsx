/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import * as S from './style'; // NoticePage의 스타일
import useAuthstate from '@/hooks/useAuthstate';
import { getNotices } from '@/firebase/noticeService';
import Pagination from '@/components/Pagination/Pagination'; // Pagination 컴포넌트 임포트

// 날짜 포맷팅 헬퍼 함수
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  if (isNaN(date.getTime())) {
    return '날짜 정보 없음';
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesList, setNoticesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const { isLoggedIn } = useAuthstate();

  useEffect(() => {
    const fetchNoticesData = async () => {
      setLoading(true);
      try {
        const data = await getNotices();
        setNoticesList(data);
      } catch (error) {
        console.error('공지사항 불러오기 오류:', error);
        setNoticesList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNoticesData();
  }, []);

  const breadcrumbs = [
    { name: '커뮤니티', link: null }, // 현재 페이지 링크는 보통 null
    { name: '공지사항', link: null }
  ];

  const filteredNotices = noticesList.filter(notice =>
    notice.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (notice.category && notice.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedNotices = [...filteredNotices].sort((a, b) => {
    if (a.isImportant && !b.isImportant) return -1;
    if (!a.isImportant && b.isImportant) return 1;
    const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0);
    const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0);
    return dateB - dateA;
  });

  const totalPages = Math.ceil(sortedNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedNotices.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination 컴포넌트에 전달할 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 페이지 변경 시 맨 위로 스크롤 (선택 사항)
    // window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <S.PageContainer>
        <SubpageHeader title="공지사항" subtitle="로딩 중..." breadcrumbs={breadcrumbs} />
        <S.ContentSection>
          <S.SectionInner>
            <div style={{ textAlign: 'center', padding: '2rem' }}>공지사항을 불러오는 중입니다...</div>
          </S.SectionInner>
        </S.ContentSection>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <Helmet>
        <title>공지사항 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 공지사항을 확인하세요." />
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
            {isLoggedIn && (
              <Link href="/admin/notice">
                <S.SearchButton type="button" style={{ marginLeft: "10px", padding: "15px", borderRadius: "0.375rem" }}>
                  공지등록
                </S.SearchButton>
              </Link>
            )}
          </S.SearchContainer>

          <S.NoticeTable>
            <thead>
              <tr>
                <S.TableHeader width="10%">번호</S.TableHeader>
                <S.TableHeader width="15%" className="hidden md:table-cell">분류</S.TableHeader>
                <S.TableHeader width="auto">제목</S.TableHeader>
                <S.TableHeader width="15%" className="hidden md:table-cell">작성일</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((notice, index) => (
                <S.TableRow key={notice.id}>
                  <S.TableCell className="text-center">
                    {notice.isImportant ? <S.ImportantBadge>공지</S.ImportantBadge> : (sortedNotices.length - (indexOfFirstItem + index))}
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell text-center">
                    {notice.category && <S.CategoryBadge>{notice.category}</S.CategoryBadge>}
                  </S.TableCell>
                  <S.TableCell>
                    <Link href={`/notice/${notice.id}`} css={S.NoticeLinkWrapper}>
                      <span css={S.NoticeTitleText}>
                        {notice.title}
                      </span>
                    </Link>
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell text-center">
                    {formatDate(notice.createdAt)}
                  </S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.NoticeTable>

          <S.MobileNoticeList>
            {currentItems.map(notice => (
              <S.MobileNoticeItem key={notice.id}>
                <Link href={`/notice/${notice.id}`}>
                  <S.MobileNoticeContent>
                    <S.MobileNoticeHeader>
                      {notice.category && <S.MobileNoticeCategory>{notice.category}</S.MobileNoticeCategory>}
                      {notice.isImportant && <S.ImportantBadge>공지</S.ImportantBadge>}
                    </S.MobileNoticeHeader>
                    <S.MobileNoticeTitle>{notice.title}</S.MobileNoticeTitle>
                    <S.MobileNoticeInfo>
                      <S.MobileNoticeDate>{formatDate(notice.createdAt)}</S.MobileNoticeDate>
                    </S.MobileNoticeInfo>
                  </S.MobileNoticeContent>
                </Link>
              </S.MobileNoticeItem>
            ))}
          </S.MobileNoticeList>

          {currentItems.length === 0 && !loading && (
            <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
          )}

          {/* 기존 S.Pagination, S.PaginationButton, S.PaginationNumbers, S.PageNumber 관련 JSX 제거 */}
          {/* 여기에 Pagination 컴포넌트 사용 */}
          {totalPages > 0 && ( // totalPages가 0보다 클 때만 (즉, 아이템이 있을 때만) 페이지네이션 표시
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange} // `paginate` 대신 `handlePageChange` 전달
            />
          )}
        </S.SectionInner>
      </S.ContentSection>
    </S.PageContainer>
  );
};

export default NoticePage;