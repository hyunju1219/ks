// src/pages/JobEmpPage/JobEmpPage.jsx

/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Helmet } from 'react-helmet';
import { useMemo, useState, useEffect } from 'react'; // useEffect 추가
import { useNavigate } from 'react-router-dom';

import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import useAuthstate from '@/hooks/useAuthstate';
import AdminContentAddButton from '@/components/AdminContentAddButton/AdminContentAddButton';
import { getEmpPosts } from '@/firebase/jobEmpService'; // Firebase 서비스 함수 import

function JobEmpPage() {
  const ITEMS_PER_PAGE = 10;

  // --- 상태 관리 ---
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [empPostList, setEmpPostList] = useState([]); // Firestore에서 받아온 원본 데이터
  
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthstate();

  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '취업현황', link: null }
  ];

  // --- 데이터 로딩 ---
  useEffect(() => {
    const fetchEmpPostsData = async () => {
      setLoading(true);
      try {
        const data = await getEmpPosts();
        // 최신순으로 정렬
        const sortedData = data.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
        setEmpPostList(sortedData);
      } catch (error) {
        console.error('취업 현황 불러오기 오류:', error);
        setEmpPostList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEmpPostsData();
  }, []);

  // --- 이벤트 핸들러 ---
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --- 데이터 계산 (메모이제이션) ---
  const filteredPosts = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (!lowercasedTerm) {
      return empPostList; // 검색어가 없으면 원본 목록 반환
    }
    // 'title' 필드를 기준으로 검색
    return empPostList.filter(post =>
      post.title.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, empPostList]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // --- 로딩 중 UI ---
  if (loading) {
    return (
        <div css={s.layout}>
            <SubpageHeader
              title="취업현황"
              subtitle="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다"
              breadcrumbs={breadcrumbs}
            />
            <div css={s.container}>
                <div css={s.loadingContainer}>로딩 중...</div>
            </div>
        </div>
    );
  }

  return (
    <div css={s.layout}>
      <Helmet>
        <title>취업현황 - 금성기술직업전문학교</title>
        <meta
          name="description"
          content="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."
        />
      </Helmet>

      <SubpageHeader
        title="취업현황"
        subtitle="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다"
        breadcrumbs={breadcrumbs}
      />
      <div css={s.container}>
        <div css={s.searchSection}>
          {isLoggedIn && (
            <div css={s.btnLayout}>
              <AdminContentAddButton link={"/admin/job/emp/add"} />
            </div>
          )}
          <SearchBox
            value={searchTerm}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </div>
        <div css={s.jobInfoSection}>
          <table css={s.jobTable}>
            <thead>
              <tr>
                <th css={s.tableHeader}>번호</th>
                <th css={s.tableHeader}>제목</th>
                <th css={s.tableHeader}>작성일</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPosts.length > 0 ? (
                // [수정] paginatedPosts를 map으로 렌더링
                paginatedPosts.map((post, index) => {
                  const itemNumber = filteredPosts.length - ((currentPage - 1) * ITEMS_PER_PAGE + index);
                  return (
                    <tr key={post.id} css={s.tableRow} onClick={() => navigate(`/job-center/emp/${post.id}`)}>
                      <td css={s.tableCell}>{itemNumber}</td>
                      <td css={s.tableCellTitle}>{post.title}</td>
                      <td css={s.tableCell}>
                        {post.createdAt?.toDate().toLocaleDateString('ko-KR')}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" css={s.emptyMessage}>
                    게시글이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default JobEmpPage;