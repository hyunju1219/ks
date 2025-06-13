/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Helmet } from 'react-helmet';
import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import useAuthstate from '@/hooks/useAuthstate';
import AdminContentAddButton from '@/components/AdminContentAddButton/AdminContentAddButton';
import TableList from '@/components/TableList/TableList';
import EditButton from '@/components/Button/EditButton'; // 수정 버튼을 여기서 임포트
import { getLicensePosts } from '@/firebase/JobLicenseService';

function JobLicensePage() {
  const ITEMS_PER_PAGE = 10;

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [empPostList, setEmpPostList] = useState([]); 
  
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthstate();

  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '자격증취득현황', link: null }
  ];
  
  // TableList에 전달할 헤더 정보 (key: 데이터 필드명, label: 화면 표시명)
  const headers = [
    { key: 'index', label: '번호' },
    { key: 'name', label: '학생명' },
    { key: 'type', label: '자격증종목' },
    { key: 'company', label: '발급기관' },
    { key: 'course', label: '과정명' },
    { key: 'date', label: '취득일자' },
  ];

  useEffect(() => {
    const fetchEmpPostsData = async () => {
      setLoading(true);
      try {
        const data = await getLicensePosts();
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => e.preventDefault();
  
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const filteredPosts = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (!lowercasedTerm) return empPostList; 

    // headers의 key 값을 기반으로 검색 필드를 동적으로 생성 (index 제외)
    const searchableFields = headers.map(h => h.key).filter(key => key !== 'index');

    return empPostList.filter(post => 
      searchableFields.some(field => 
        post[field] && String(post[field]).toLowerCase().includes(lowercasedTerm)
      )
    );
  }, [searchTerm, empPostList, headers]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 각 행의 끝에 표시될 '수정' 버튼을 렌더링하는 함수
  const renderTableActions = (item) => {
    if (isLoggedIn) {
      return (
        <EditButton onClick={() => navigate(`/admin/job/license/${item.id}/edit`)} />
      );
    }
    return null;
  };

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
        <title>자격증취득현황 - 금성기술직업전문학교</title>
        <meta name="description" content="" />
      </Helmet>

      <SubpageHeader
        title="자격증취득현황"
        subtitle="금성기술직업전문학교 졸업생들의 자격증 취득 현황 소개합니다"
        breadcrumbs={breadcrumbs}
      />
      <div css={s.container}>
        <div css={s.searchSection}>
          {isLoggedIn && (
            <div css={s.btnLayout}>
              <AdminContentAddButton link={"/admin/job/license/add"} />
            </div>
          )}
          <SearchBox
            value={searchTerm}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </div>

        <TableList 
          headers={headers} 
          contents={currentPosts}
          renderActions={renderTableActions}
        />
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default JobLicensePage;