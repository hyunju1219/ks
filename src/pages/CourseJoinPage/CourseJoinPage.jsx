/** @jsxImportSource @emotion/react */
import * as s from './style';
import SubpageHeader from '@/components/SubpageHeader/SubpageHeader';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getRecruitingCourses } from '@/firebase/courseService';
import { css } from '@emotion/react';

const CoureseJoinPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const breadcrumbs = [
    { name: '모집 과정', link: '/course-join' },
    { name: '모집중인 교육 과정', link: null }
  ];

  useEffect(() => {
    const fetchRecruitingCourses = async () => {
      setLoading(true);
      try {
        const data = await getRecruitingCourses();
        const formattedData = data.map(course => ({
          id: course.id,
          title: course.courseName,
          image: course.imageUrl || `https://via.placeholder.com/96x64?text=Img`, // 기본 이미지 크기 조정
          교육과정: course.category,
          개강일: course.trainingPeriod || '미정', // Firestore에 이 필드가 있는지 확인
          period: course.schedule,
          status: course.recruitmentStatus,
        }));
        setCourses(formattedData);
      } catch (error) {
        console.error('모집중인 과정 데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitingCourses();
  }, []);

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
          <span>Total {courses.length} / 1 page</span>
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
        {courses.length === 0 && !loading ? (
          <div css={s.emptyStateContainer}>
            현재 모집중인 과정이 없습니다.
          </div>
        ) : (
          courses.map((course, index) => (
            <div key={course.id} css={s.courseRow(index % 2 === 0)}>
              <div css={s.courseInfoCell}>
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
              </div>

              <div css={s.periodTimeCell}>
                <div css={s.periodText}>
                  {course.period}
                </div>
              </div>

              <div css={s.applyButtonCell}>
                <button
                  css={s.applyButton(course.status === '모집중')}
                  disabled={course.status !== '모집중'}
                >
                  {course.status === '모집중' ? '> 수강신청' : course.status}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {courses.length > 0 && (
        <div css={s.paginationContainer}>
          <div css={s.paginationInner}>
            <button css={s.paginationButton(false)}>
              이전
            </button>
            <button css={s.paginationButton(true)}>
              1
            </button>
            <button css={s.paginationButton(false)}>
              다음
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CoureseJoinPage;