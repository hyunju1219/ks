/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'wouter'; // useLocation은 현재 직접 사용하지 않으므로 제거 가능
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import useAuthstate from '@/hooks/useAuthstate';
import { getCourse } from '@/firebase/courseService';

// URL 슬러그를 Firestore category 값(화면 표시 이름과 동일하다고 가정) 및 breadcrumb 이름과 매핑
const categoryMappingsBySlug = {
  'all': { firestoreValue: 'all', displayName: '전체 과정' }, // 'all'은 특수 케이스
  'national-strategy': { firestoreValue: '국가기간전략훈련', displayName: '국가기간전략훈련' },
  'naeil-card': { firestoreValue: '내일배움카드', displayName: '내일배움카드' },
  'assessment-type': { firestoreValue: '과정평가형', displayName: '과정평가형' },
  'busan': { firestoreValue: '부산시과정', displayName: '부산시과정' }, // Firestore에는 '부산시과정'이 아닌 '부산시 과정'으로 저장되었다고 가정
};

const CoursePage = () => {
  const params = useParams();

  // URL 파라미터(slug)를 기반으로 현재 필터링할 Firestore category 값을 결정
  const getActiveCategoryFromSlug = () => {
    const slug = params.categorySlug;
    if (slug && categoryMappingsBySlug[slug]) {
      return categoryMappingsBySlug[slug].firestoreValue; // 예: 'national-strategy' -> '국가기간전략훈련'
    }
    return 'all'; // 기본값 또는 /course 경로일 때
  };

  const [activeCategoryToFilter, setActiveCategoryToFilter] = useState(getActiveCategoryFromSlug);
  const [loading, setLoading] = useState(true);
  const [allCourses, setAllCourses] = useState([]);
  const { isLoggedIn } = useAuthstate();

  // 1. 모든 과정 데이터를 한 번만 불러옴
  useEffect(() => {
    const fetchAllCoursesData = async () => {
      setLoading(true);
      try {
        const data = await getCourse();
        setAllCourses(data);
      } catch (error) {
        console.error('코스 전체 불러오기 오류:', error);
        setAllCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCoursesData();
  }, []);

  // 2. URL 파라미터 (categorySlug)가 변경되면 activeCategoryToFilter 업데이트
  useEffect(() => {
    setActiveCategoryToFilter(getActiveCategoryFromSlug());
  }, [params.categorySlug]);


  // 현재 activeCategoryToFilter에 따라 과정 필터링
  const filteredCourses = activeCategoryToFilter === 'all'
    ? allCourses
    : allCourses.filter(course => course.category === activeCategoryToFilter); // Firestore의 category 필드와 직접 비교

  // Breadcrumbs 및 페이지 타이틀, 서브타이틀에 사용될 현재 카테고리 정보
  const currentDisplayDetails = params.categorySlug && categoryMappingsBySlug[params.categorySlug]
    ? categoryMappingsBySlug[params.categorySlug]
    : categoryMappingsBySlug['all'];

  const dynamicBreadcrumbs = [
    { name: '교육 과정', link: '/course' },
    { name: currentDisplayDetails.displayName, link: null }
  ];

  return (
     <S.PageContainer>
      <Helmet>
        <title>{currentDisplayDetails.displayName} - 금성기술직업전문학교</title>
        <meta name="description" content={`금성기술직업전문학교의 ${currentDisplayDetails.displayName} 교육 과정을 소개합니다.`} />
      </Helmet>

      <SubpageHeader
        title={currentDisplayDetails.displayName}
        subtitle={`금성기술직업전문학교에서 제공하는 ${currentDisplayDetails.displayName}을 확인하세요`}
        breadcrumbs={dynamicBreadcrumbs}
      />

      <S.ContentSection>
        <S.SectionInner>
          {isLoggedIn && (
            <div style={{ marginBottom: '2rem', textAlign: 'right' }}>
              <Link href='/admin/course'>
                <S.ContactButton>과정추가</S.ContactButton>
              </Link>
            </div>
          )}

          {loading && allCourses.length === 0 ? (
            <S.LoadingContainer>
              <S.LoadingSpinner />
              <S.LoadingText>과정을 불러오는 중...</S.LoadingText>
            </S.LoadingContainer>
          ) : (
            <S.CourseGrid>
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <Link href={`/course-detail/${course.id}`} key={course.id} style={{ textDecoration: 'none' }}>
                    <S.CourseCard>
                      <S.CourseImage src={course.imageUrl || 'https://via.placeholder.com/400x200?text=No+Image'} alt={course.courseName} />
                      <S.CourseContent>
                        <S.CourseTitle>{course.courseName}</S.CourseTitle>
                        <S.CourseInfo>
                          <S.CourseDetail>
                            <S.DetailLabel>접수기간:</S.DetailLabel> {course.registrationPeriod}
                          </S.CourseDetail>
                          <S.CourseDetail>
                            <S.DetailLabel>훈련일정:</S.DetailLabel> {course.schedule}
                          </S.CourseDetail>
                        </S.CourseInfo>
                        <S.MoreButton as="span">자세히 보기</S.MoreButton>
                      </S.CourseContent>
                    </S.CourseCard>
                  </Link>
                ))
              ) : (
                <S.EmptyMessage>해당 카테고리의 과정이 없습니다.</S.EmptyMessage>
              )}
            </S.CourseGrid>
          )}
        </S.SectionInner>
      </S.ContentSection>

      <S.ProcessSection>
        <S.SectionInner>
          <S.ProcessTitle>교육 프로세스</S.ProcessTitle>
          <S.ProcessSubtitle>체계적인 교육 과정을 통해 취업까지 지원합니다</S.ProcessSubtitle>
           <S.ProcessSteps>
            <S.ProcessStep>
              <S.StepIcon>1</S.StepIcon>
              <S.StepInfo>
                <S.StepTitle>상담 및 지원</S.StepTitle>
                <S.StepDescription>교육과정 상담 및 지원서 제출</S.StepDescription>
              </S.StepInfo>
            </S.ProcessStep>
            <S.StepConnector />
            <S.ProcessStep>
              <S.StepIcon>2</S.StepIcon>
              <S.StepInfo>
                <S.StepTitle>수강 신청</S.StepTitle>
                <S.StepDescription>교육과정 등록 및 수강료 납부</S.StepDescription>
              </S.StepInfo>
            </S.ProcessStep>
            <S.StepConnector />
            <S.ProcessStep>
              <S.StepIcon>3</S.StepIcon>
              <S.StepInfo>
                <S.StepTitle>교육 수강</S.StepTitle>
                <S.StepDescription>이론 및 실습 교육 진행</S.StepDescription>
              </S.StepInfo>
            </S.ProcessStep>
            <S.StepConnector />
            <S.ProcessStep>
              <S.StepIcon>4</S.StepIcon>
              <S.StepInfo>
                <S.StepTitle>자격증 취득</S.StepTitle>
                <S.StepDescription>국가기술자격증 시험 응시</S.StepDescription>
              </S.StepInfo>
            </S.ProcessStep>
            <S.StepConnector />
            <S.ProcessStep>
              <S.StepIcon>5</S.StepIcon>
              <S.StepInfo>
                <S.StepTitle>취업 지원</S.StepTitle>
                <S.StepDescription>이력서 작성 및 취업 연계</S.StepDescription>
              </S.StepInfo>
            </S.ProcessStep>
          </S.ProcessSteps>
        </S.SectionInner>
      </S.ProcessSection>

      <CTASection />
    </S.PageContainer>
  );
};

export default CoursePage;