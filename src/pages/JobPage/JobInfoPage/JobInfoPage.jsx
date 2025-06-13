/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet';
import { useState, useMemo, useEffect } from 'react';
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import useAuthstate from '@/hooks/useAuthstate';
import AdminContentAddButton from '@/components/AdminContentAddButton/AdminContentAddButton';
// [수정] Firebase 서비스 함수명 변경: getJobPosts (복수형)
import { getJobPosts } from '@/firebase/jobInfoService'; 

// --- 컴포넌트 상수 정의 ---
const BREADCRUMBS = [
  { name: '취업센터', link: '/job-center' },
  { name: '구인게시판', link: null }
];

const ITEMS_PER_PAGE = 10;

function JobInfoPage() {
  const { isLoggedIn } = useAuthstate();
  const navigate = useNavigate();
  
  // --- 상태 관리 ---
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [jobPostList, setJobPostList] = useState([]); // Firebase에서 받아온 원본 데이터

  // --- 데이터 로딩 ---
  useEffect(() => {
    const fetchJobPostsData = async () => {
      setLoading(true);
      try {
        // [수정] getJobPosts 함수 호출
        const data = await getJobPosts();
        // [수정] 받아온 데이터를 시간순으로 정렬 (최신글이 위로)
        const sortedData = data.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());
        setJobPostList(sortedData);
      } catch (error) {
        console.error('구인정보 불러오기 오류:', error);
        setJobPostList([]); // 오류 발생 시 빈 배열로 초기화
      } finally {
        setLoading(false);
      }
    };
    fetchJobPostsData();
  }, []);

  // --- 이벤트 핸들러 ---
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // 검색 시 1페이지로 리셋
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --- 데이터 계산 (메모이제이션) ---

  // [수정] 검색 기능: Firebase에서 불러온 jobPostList를 기준으로 필터링
  const filteredJobs = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (!lowercasedTerm) {
      return jobPostList; // 검색어가 없으면 원본 목록 반환
    }
    return jobPostList.filter(job =>
      // job.company, job.location 등 필드가 없으므로 'title'로 검색
      job.companyName.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, jobPostList]);

  // [수정] 페이지네이션 계산: 필터링된 목록을 기준으로 계산
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, endIndex);
  }, [filteredJobs, currentPage]);

  // --- 로딩 중 UI ---
  if (loading) {
    return (
        <div css={s.layout}>
            {/* 로딩 중에도 헤더 등은 보여줄 수 있습니다. */}
            <SubpageHeader
              title="구인게시판"
              subtitle="금성기술직업전문학교와 협약을 맺은 기업의 채용 정보를 확인하세요"
              breadcrumbs={BREADCRUMBS}
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
        <title>구인게시판 - 금성기술직업전문학교</title>
        <meta
          name="description"
          content="금성기술직업전문학교와 협약을 맺은 기업의 최신 채용 정보를 확인하고 지원하세요."
        />
      </Helmet>

      <SubpageHeader
        title="구인게시판"
        subtitle="금성기술직업전문학교와 협약을 맺은 기업의 채용 정보를 확인하세요"
        breadcrumbs={BREADCRUMBS}
      />

      <div css={s.container}>
        <div css={s.searchSection}>
          {isLoggedIn && (
            <div css={s.btnLayout}>
              <AdminContentAddButton link={"/admin/job/add"}/>
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
              {paginatedJobs.length > 0 ? (
                // [수정] paginatedJobs를 map으로 렌더링
                paginatedJobs.map((job, index) => {
                  // 페이지네이션을 고려한 전체 목록에서의 번호 계산
                  const itemNumber = filteredJobs.length - ((currentPage - 1) * ITEMS_PER_PAGE + index);
                  return (
                    <tr key={job.id} css={s.tableRow} onClick={() => navigate(`/job-center/info/${job.id}`)}>
                      <td css={s.tableCell}>{itemNumber}</td>
                      <td css={s.tableCellTitle}>{job.companyName}</td>
                      <td css={s.tableCell}>
                        {job.createdAt?.toDate().toLocaleDateString('ko-KR')}
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
        
        {/* Pagination 컴포넌트가 내부적으로 totalPages > 1 조건을 처리하므로, 외부에서 조건을 걸 필요가 없습니다. */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default JobInfoPage;