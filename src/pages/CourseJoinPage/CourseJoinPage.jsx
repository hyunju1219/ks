/** @jsxImportSource @emotion/react */
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getRecruitingCourses } from '@/firebase/courseService';
import { css } from '@emotion/react';
import Pagination from '@/components/Pagination/Pagination';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

// URL이 외부 링크인지 확인하는 헬퍼 함수
const isExternalLink = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.origin !== window.location.origin;
  } catch (e) {
    return false;
  }
};

const CoureseJoinPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbs = [
    { name: '모집 과정', link: '/courses/open' }, // 링크를 일관성있게 수정
    { name: '모집중인 교육 과정', link: null }
  ];

  useEffect(() => {
    const fetchRecruitingCourses = async () => {
      setLoading(true);
      try {
        const data = await getRecruitingCourses();
        
        // 1. 데이터를 원하는 형식으로 가공
        const formattedData = data.map(course => ({
          id: course.id,
          title: course.courseName,
          image: course.imageUrl || `https://via.placeholder.com/96x64?text=Img`,
          교육과정: course.category,
          // '개강일' 필드에 시작 날짜 저장, 없으면 '미정'
          개강일: course.trainingPeriod?.split(' ~ ')[0].trim() || '미정', 
          period: course.schedule,
          status: course.recruitmentStatus,
          link: (course.location && typeof course.location === 'string' && course.location.trim() !== '') ? course.location.trim() : `/courses/${course.id}` // 내부 링크도 상세 페이지로
        }));
        
        // --- ▼ 데이터 정렬 로직 수정 ▼ ---
        
        // 2. 가공된 데이터를 기준으로 정렬
        const sortedData = [...formattedData].sort((a, b) => {
          // Date 객체를 생성하는 헬퍼 함수
          const getStartDate = (dateString) => {
            // '미정'이거나 유효하지 않은 값이면 null 반환
            if (!dateString || dateString === '미정') {
              return null;
            }
            // "YYYY.MM.DD" 형식을 "YYYY-MM-DD"로 변경하여 Date 객체 생성
            return new Date(dateString.replace(/\./g, '-'));
          };

          // '개강일' 필드를 기준으로 Date 객체 생성
          const dateA = getStartDate(a.개강일); 
          const dateB = getStartDate(b.개강일);

          // 1. 둘 다 날짜가 아닌 경우, 순서 유지
          if (!dateA && !dateB) return 0;
          // 2. a만 날짜가 아닌 경우, a를 뒤로 보냄 (정렬 순위가 낮아짐)
          if (!dateA) return 1;
          // 3. b만 날짜가 아닌 경우, b를 뒤로 보냄
          if (!dateB) return -1;

          // 4. 둘 다 유효한 날짜인 경우, 시간 순으로 비교 (오름차순)
          return dateA - dateB;
        });
        // --- ▲ 데이터 정렬 로직 끝 ▲ ---

        // 3. 최종적으로 정렬된 데이터를 상태에 저장
        setAllCourses(sortedData);

      } catch (error) {
        console.error('모집중인 과정 데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitingCourses();
  }, []);

  const currentCourses = allCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(allCourses.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div css={s.pageContainer}>
        <Helmet>
          <title>모집중인 교육 과정 - 금성기술직업전문학교</title>
        </Helmet>
        <SubpageHeader
          title="모집중인 교육 과정"
          subtitle="금성기술직업전문학교에서 제공하는 다양한 교육 과정을 확인하세요"
          breadcrumbs={breadcrumbs}
        />
        <div css={s.loadingContainer}>
          <p>과정 정보를 불러오는 중입니다...</p>
        </div>
      </div>
    );
  }

  return (
     <div css={s.pageContainer}>
      <Helmet>
        <title>모집중인 교육 과정 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 다양한 교육 과정을 소개합니다." />
      </Helmet>

      <SubpageHeader
        title="모집중인 교육 과정"
        subtitle="금성기술직업전문학교에서 제공하는 다양한 교육 과정을 확인하세요"
        breadcrumbs={breadcrumbs}
      />
      <div css={s.contentWrapper}>
        <div css={s.headerInfo}>
          <div css={s.totalCount}>
            <span css={s.totalCountIcon}>≡</span>
            <span>Total {allCourses.length} / {currentPage} page of {totalPages}</span>
          </div>
        </div>

        <div css={s.tableHeader}>
          <div css={s.tableGrid}>
            <div css={[s.tableHeaderText, css`grid-column: span 6 / span 6; @media (min-width: 768px) { grid-column: span 5 / span 5; } @media (min-width: 1024px) { grid-column: span 6 / span 6; }`]}>과정</div>
            <div css={[s.tableHeaderText, css`grid-column: span 3 / span 3; @media (min-width: 768px) { grid-column: span 4 / span 4; } @media (min-width: 1024px) { grid-column: span 3 / span 3; }`]}>기간/시간</div>
            <div css={[s.tableHeaderText, css`grid-column: span 3 / span 3;`]}>수강신청</div>
          </div>
        </div>

        <div css={s.courseListContainer}>
          {currentCourses.length === 0 && !loading ? (
            <div css={s.emptyStateContainer}>
              현재 모집중인 과정이 없습니다.
            </div>
          ) : (
            currentCourses.map((course, index) => {
              const isExternal = isExternalLink(course.link);
              const isDisabled = course.status !== '모집중';
              // 비활성화 시 클릭을 막고, 활성화 시에만 링크를 유효하게 만듦
              const actualLink = isDisabled ? '#' : course.link;

              const ApplyButtonComponent = (
                <button
                  css={s.applyButton(!isDisabled)}
                  disabled={isDisabled}
                >
                  {course.status === '모집중' ? '수강신청' : course.status}
                </button>
              );

              return (
                <div key={course.id} css={s.courseRow(index % 2 === 0)}>
                  <Link css={s.courseInfoCell} to={`/courses/${course.id}`}>
                      <div css={s.courseImageContainer}>
                      <img
                          src={course.image}
                          alt={course.title}
                          css={s.courseImage}
                      />
                      </div>
                      <div css={s.courseTextDetails}>
                      <h3 css={s.courseTitle}>
                          {course.title}
                      </h3>
                      <div css={s.courseMetaInfo}>
                          <div css={s.metaItem}>
                          <span css={s.metaLabel}>교육과정</span>
                          <span>{course.교육과정}</span>
                          </div>
                          <div css={s.metaItem}>
                          <span css={s.metaLabel}>개강일</span>
                          <span>{course.개강일}</span>
                          </div>
                      </div>
                      </div>
                  </Link>

                  <div css={s.periodTimeCell}>
                      <div css={s.periodText}>
                      {course.period}
                      </div>
                  </div>

                  <div css={s.applyButtonCell}>
                    {isExternal ? (
                      <a
                        href={actualLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => { if (isDisabled) e.preventDefault(); }}
                      >
                        {ApplyButtonComponent}
                      </a>
                    ) : (
                      // 내부 링크의 경우 react-router-dom의 Link를 사용하는 것이 더 좋습니다.
                      // 하지만 여기서는 외부 링크와의 통일성을 위해 a 태그로 유지하거나,
                      // 아래와 같이 Link 컴포넌트로 변경할 수 있습니다.
                      <Link
                        to={actualLink}
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => { if (isDisabled) e.preventDefault(); }}
                      >
                        {ApplyButtonComponent}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {allCourses.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default CoureseJoinPage;