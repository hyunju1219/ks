/** @jsxImportSource @emotion/react */
import SearchBox from '@/components/SearchBox/SearchBox'; // 수정된 경로
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import { Helmet } from 'react-helmet';
import { useMemo, useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';
import { Link, useNavigate } from 'react-router-dom';
import useAuthstate from '@/hooks/useAuthstate';
import AdminContentAddButton from '@/components/AdminContentAddButton/AdminContentAddButton';


function JobEmpPage() {
    const ITEMS_PER_PAGE = 10;

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const { isLoggedIn } = useAuthstate();

    const breadcrumbs = [
      { name: '취업센터', link: '/job-center' },
      { name: '취업현황', link: null }
    ];

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

  // 예시 데이터를 좀 더 현실적으로 변경
  const JOB_OPPORTUNITIES = [
    { id: 1, company: '부산-김해경전철', position: '역사 기계설비 유지보수', deadline: '2023.07.30' },
    { id: 2, company: '한국공조엔지니어링', position: '거래처 냉동기기 유지관리', deadline: '2023.07.25' },
  ];

   const filteredJobs = useMemo(() => {
      const lowercasedTerm = searchTerm.toLowerCase();
      if (!lowercasedTerm) {
        return JOB_OPPORTUNITIES;
      }
      return JOB_OPPORTUNITIES.filter(job =>
        job.company.toLowerCase().includes(lowercasedTerm) ||
        job.position.toLowerCase().includes(lowercasedTerm)
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
                {
                  isLoggedIn &&
                  <div>
                    <AdminContentAddButton />
                  </div>
                }
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
                      <th css={s.tableHeader}>날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedJobs.length > 0 ? (
                      paginatedJobs.map((job) => (
                        <tr key={job.id} css={s.tableRow} 
                           onClick={() => navigate(`/job-center/emp/${job.id}`)}>
                          <td css={s.tableCell}>{job.id}</td>
                          <td css={s.tableCell}>
                            [취업 성공] {job.company} - {job.position}
                          </td>
                          <td css={s.tableCell}>{job.deadline}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" css={s.emptyMessage}>
                          검색 결과가 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
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

export default JobEmpPage;