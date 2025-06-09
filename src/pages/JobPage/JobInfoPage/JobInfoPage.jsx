/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet';
import { useState, useMemo } from 'react';
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import SearchBox from '@/components/SearchBox/SearchBox'; // 수정된 경로
import Pagination from '@/components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

// --- 컴포넌트 상수 정의 ---

const BREADCRUMBS = [
  { name: '취업센터', link: '/job-center' },
  { name: '구인게시판', link: null }
];

const JOB_OPPORTUNITIES = [
  { id: 1, company: '한국냉동공조', position: '냉동공조설비 관리자', location: '서울 강남구', requirements: '공조냉동기계 산업기사 이상', deadline: '2023.08.30', isNew: true },
  { id: 2, company: '대림산업', position: '설비보전 엔지니어', location: '경기 수원시', requirements: '설비보전 기사 자격증 소지자', deadline: '2023.08.25', isNew: true },
  { id: 3, company: '한화에너지', position: '에너지관리 기술자', location: '인천 송도', requirements: '에너지관리 산업기사 이상', deadline: '2023.08.20', isNew: false },
  { id: 4, company: '삼성엔지니어링', position: '공조설비 유지보수', location: '경기 화성시', requirements: '공조냉동기계 기능사 이상', deadline: '2023.08.15', isNew: false },
  { id: 5, company: 'LG전자', position: '냉동시스템 엔지니어', location: '서울 금천구', requirements: '공조냉동기계 기사 자격증 소지자', deadline: '2023.08.10', isNew: false },
  { id: 6, company: '현대건설', position: '설비보전 전문가', location: '서울 종로구', requirements: '설비보전기능사, 5년 이상 경력', deadline: '2023.09.10', isNew: true },
  { id: 7, company: '포스코에너지', position: '에너지 효율 관리자', location: '포항 남구', requirements: '에너지관리기사', deadline: '2023.09.15', isNew: true },
  { id: 8, company: 'GS칼텍스', position: '냉동 공조 엔지니어', location: '여수시', requirements: '공조냉동기계기사, 관련 경력 3년 이상', deadline: '2023.09.05', isNew: false },
  { id: 9, company: 'SK에코플랜트', position: '플랜트 설비보전', location: '울산 남구', requirements: '산업안전기사, 설비보전기사 우대', deadline: '2023.09.20', isNew: false },
  { id: 10, company: '롯데케미칼', position: '생산설비 유지보수', location: '대산', requirements: '관련 경력자 우대', deadline: '2023.09.18', isNew: false },
  { id: 11, company: '두산에너빌리티', position: '에너지 시스템 설계', location: '창원 성산구', requirements: '에너지 관련 학과 석사 이상', deadline: '2023.10.01', isNew: true },
  { id: 12, company: '세방전지', position: '공조설비 오퍼레이터', location: '창원 성산구', requirements: '신입 가능, 관련 자격증 우대', deadline: '2023.09.25', isNew: true },
];

// ▼▼▼ [수정된 부분] 한 페이지에 보여줄 항목 수를 10개로 변경합니다. ▼▼▼
const ITEMS_PER_PAGE = 10;

function JobInfoPage() {
  // --- 상태 관리 ---
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // --- 이벤트 핸들러 ---
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // 검색어 변경 시 1페이지로 리셋
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Enter키 입력 시 페이지 새로고침 방지
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --- 데이터 계산 (메모이제이션) ---
  const filteredJobs = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (!lowercasedTerm) {
      return JOB_OPPORTUNITIES;
    }
    return JOB_OPPORTUNITIES.filter(job =>
      job.company.toLowerCase().includes(lowercasedTerm) ||
      job.position.toLowerCase().includes(lowercasedTerm) ||
      job.location.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, endIndex);
  }, [filteredJobs, currentPage]);

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
                <th css={s.tableHeader}>기업명</th>
                <th css={s.tableHeader}>모집분야</th>
                <th css={s.tableHeader}>근무지</th>
                <th css={s.tableHeader}>마감일</th>
              </tr>
            </thead>
            <tbody>
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job) => (
                  <tr key={job.id} css={s.tableRow}
                    onClick={() => navigate(`/job-center/info/${job.id}`)}>
                    <td css={s.tableCell}>{job.id}</td>
                    <td css={s.tableCell}>{job.company}</td>
                    <td css={s.tableCell}>{job.position}</td>
                    <td css={s.tableCell}>{job.location}</td>
                    <td css={s.tableCell}>{job.deadline}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" css={s.emptyMessage}>
                    검색 결과가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/*
          이제 이 조건은 `filteredJobs.length`가 10개를 초과할 때만 true가 됩니다.
          (예: 10개일 경우 totalPages는 1이 되므로 `1 > 1`은 false)
        */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default JobInfoPage;