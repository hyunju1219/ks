/** @jsxImportSource @emotion/react */
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getRecruitingCourses } from '@/firebase/courseService';
import { css } from '@emotion/react';
import Pagination from '@/components/Pagination/Pagination';
import { Link, Link as WouterLink } from 'wouter'; // wouter의 Link 이름을 변경하여 충돌 방지

const ITEMS_PER_PAGE = 10;

// URL이 외부 링크인지 확인하는 헬퍼 함수
const isExternalLink = (url) => {
  try {
    const parsedUrl = new URL(url);
    // 현재 window.location.origin과 다른 경우 외부 링크로 간주
    // 또는 간단하게 http:// 또는 https://로 시작하는지 확인할 수도 있음
    return parsedUrl.origin !== window.location.origin;
  } catch (e) {
    // URL 파싱 실패 시 내부 링크로 간주 (예: /contact)
    return false;
  }
};


const CoureseJoinPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbs = [
    { name: '모집 과정', link: '/course-join' },
    { name: '모집중인 교육 과정', link: null }
  ];
        console.log(allCourses);
  useEffect(() => {
    const fetchRecruitingCourses = async () => {
      setLoading(true);
      try {
        const data = await getRecruitingCourses();
        console.log(data);
        const formattedData = data.map(course => ({
          id: course.id,
          title: course.courseName,
          image: course.imageUrl || `https://via.placeholder.com/96x64?text=Img`,
          교육과정: course.category,
          개강일: course.trainingPeriod?.split(' ~ ')[0] || '미정',
          period: course.schedule,
          status: course.recruitmentStatus,
          link: (course.location && typeof course.location === 'string' && course.location.trim() !== '') ? course.location.trim() : '/contact'
        }));
        setAllCourses(formattedData);
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
    // ... 로딩 UI ...
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
      {/* ... Helmet, SubpageHeader ... */}
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
      {/* ... headerInfo, tableHeader ... */}
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
            const actualLink = isDisabled ? '#' : course.link;
            console.log(actualLink);

            return (
              <div key={course.id} css={s.courseRow(index % 2 === 0)}>
                {/* ... courseInfoCell, periodTimeCell ... */}
                <Link css={s.courseInfoCell} to={`/course-detail/${course.id}`}>
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
                      target="_blank" // 외부 링크는 새 탭에서 열리도록
                      rel="noopener noreferrer" // 보안 권장 사항
                      style={{ textDecoration: 'none' }}
                      onClick={(e) => {
                        if (isDisabled) e.preventDefault();
                      }}
                    >
                      <button
                        css={s.applyButton(!isDisabled)}
                        disabled={isDisabled}
                      >
                        {course.status === '모집중' ? '수강신청' : course.status}
                      </button>
                    </a>
                  ) : (
                    <WouterLink
                      to={actualLink}
                      style={{ textDecoration: 'none' }}
                      onClick={(e) => {
                        if (isDisabled) e.preventDefault();
                      }}
                    >
                      <button
                        css={s.applyButton(!isDisabled)}
                        disabled={isDisabled}
                      >
                        {course.status === '모집중' ? '수강신청' : course.status}
                      </button>
                    </WouterLink>
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