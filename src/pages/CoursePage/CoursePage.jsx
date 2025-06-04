/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import Pagination from '@/components/Pagination/Pagination'; // Pagination 컴포넌트 임포트
import * as S from './style';
import useAuthstate from '@/hooks/useAuthstate';
import { getCourse } from '@/firebase/courseService';
import explanation1 from '../../assets/notice/과정평가1.png';
import explanation2 from '../../assets/notice/과정평가2.png';
import explanation3 from '../../assets/notice/과정평가3.png';

const categoryMappingsBySlug = {
  'all': { firestoreValue: 'all', displayName: '전체 과정' },
  'national-strategy': { firestoreValue: '국가기간전략훈련', displayName: '국가기간전략훈련' },
  'naeil-card': { firestoreValue: '내일배움카드', displayName: '내일배움카드' },
  'assessment-type': { firestoreValue: '과정평가형', displayName: '과정평가형' },
  'busan': { firestoreValue: '부산시과정', displayName: '부산시과정' },
};

const certificationTypeNavItems = [
  { displayName: '전체', filterValue: 'all' },
  { displayName: '공조냉동기계', filterValue: '공조냉동기계' },
  { displayName: '에너지관리', filterValue: '에너지관리' },
  { displayName: '설비보전', filterValue: '설비보전' },
  { displayName: '온수온돌', filterValue: '온수온돌' },
];

const ITEMS_PER_PAGE = 9; // 페이지 당 보여줄 카드 수 (예: 3x3 그리드)

const CoursePage = () => {
  const params = useParams();

  const getActiveCategoryFromSlug = () => {
    const slug = params.categorySlug;
    if (slug && categoryMappingsBySlug[slug]) {
      return categoryMappingsBySlug[slug].firestoreValue;
    }
    return 'all';
  };

  const [activeCategoryToFilter, setActiveCategoryToFilter] = useState(getActiveCategoryFromSlug);
  const [activeCertificationType, setActiveCertificationType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [allCourses, setAllCourses] = useState([]);
  const { isLoggedIn } = useAuthstate();
  const [currentPage, setCurrentPage] = useState(1);

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

  // URL 카테고리(slug) 변경 시:
  // 1. 현재 카테고리 필터 업데이트
  // 2. 자격증 필터를 'all'로 초기화
  // 3. 현재 페이지를 1로 초기화
  useEffect(() => {
    setActiveCategoryToFilter(getActiveCategoryFromSlug());
    setActiveCertificationType('all'); // <<< 자격증 필터 초기화 추가
    setCurrentPage(1);
  }, [params.categorySlug]); // params.categorySlug가 변경될 때마다 실행

  // 자격증 타입 필터 변경 시:
  // 1. 현재 페이지를 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCertificationType]); // activeCertificationType이 변경될 때마다 실행


  const parseRegistrationStartDate = (periodString) => {
    if (!periodString || typeof periodString !== 'string' || !periodString.includes(' ~ ')) {
      return null;
    }
    const startDateStr = periodString.split(' ~ ')[0].trim();
    const parts = startDateStr.split('.');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        return new Date(year, month, day);
      }
    }
    return null;
  };

  const sortedAndFilteredCourses = useMemo(() => {
    let filteredByCategory = activeCategoryToFilter === 'all'
      ? allCourses
      : allCourses.filter(course => course.category === activeCategoryToFilter);

    if (activeCertificationType !== 'all') {
      filteredByCategory = filteredByCategory.filter(course =>
        course.certificationType && typeof course.certificationType === 'string' &&
        course.certificationType.includes(activeCertificationType)
      );
    }

    return [...filteredByCategory].sort((a, b) => {
      const aIsRecruiting = a.recruitmentStatus === '모집중';
      const bIsRecruiting = b.recruitmentStatus === '모집중';

      if (aIsRecruiting && !bIsRecruiting) return -1;
      if (!aIsRecruiting && bIsRecruiting) return 1;

      const dateA = parseRegistrationStartDate(a.registrationPeriod);
      const dateB = parseRegistrationStartDate(b.registrationPeriod);

      if (dateA && !dateB) return -1;
      if (!dateA && dateB) return 1;
      if (!dateA && !dateB) return 0;
      if (!dateA || !dateB) return 0;

      return dateB.getTime() - dateA.getTime();
    });
  }, [allCourses, activeCategoryToFilter, activeCertificationType]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedAndFilteredCourses.slice(startIndex, endIndex);
  }, [sortedAndFilteredCourses, currentPage]);

  const totalPages = Math.ceil(sortedAndFilteredCourses.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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

{
    !activeCategoryToFilter === '과정평가형' &&
    <S.CertificationNavBar>
      {certificationTypeNavItems.map(item => (
        <S.CertNavItem
          key={item.filterValue}
          onClick={() => setActiveCertificationType(item.filterValue)}
          isActive={activeCertificationType === item.filterValue}
        >
          {item.displayName}
        </S.CertNavItem>
      ))}
    </S.CertificationNavBar>
}
          

          {loading && allCourses.length === 0 ? (
            <S.LoadingContainer>
              <S.LoadingSpinner />
              <S.LoadingText>과정을 불러오는 중...</S.LoadingText>
            </S.LoadingContainer>
          ) : (
            <>
            {
              activeCategoryToFilter === '과정평가형' ?
              <S.ImgLayout>
                <img src={explanation1} />
                <img src={explanation2} />
                <img src={explanation3} />
              </S.ImgLayout>
              :<>
              <S.CourseGrid>
                {paginatedCourses.length > 0 ? (
                  paginatedCourses.map(course => (
                    <Link href={`/course-detail/${course.id}`} key={course.id} style={{ textDecoration: 'none' }}>
                      <S.CourseCard>
                        {course.recruitmentStatus === '모집중' && (
                          <S.RecruitmentStatusBadge>모집중</S.RecruitmentStatusBadge>
                        )}
                        <S.CourseImage src={course.imageUrl || 'https://via.placeholder.com/400x200?text=No+Image'} alt={course.courseName} />
                        <S.CourseContent>
                          <S.CourseTitle>{course.courseName}</S.CourseTitle>
                          <S.CourseInfo>
                            <S.CourseDetail>
                              <S.DetailLabel>접수기간:</S.DetailLabel> {course.registrationPeriod}
                            </S.CourseDetail>
                            <S.CourseDetail>
                              <S.DetailLabel>훈련일정:</S.DetailLabel> {course.trainingPeriod}
                            </S.CourseDetail>
                          </S.CourseInfo>
                          <S.MoreButton as="span">자세히 보기</S.MoreButton>
                        </S.CourseContent>
                      </S.CourseCard>
                    </Link>
                  ))
                ) : (
                  <S.EmptyMessage>
                    {activeCategoryToFilter === 'all' && activeCertificationType === 'all' && currentPage === 1
                      ? '등록된 과정이 없습니다.'
                      : '해당 조건에 맞는 과정이 없습니다.'}
                  </S.EmptyMessage>
                )}
              </S.CourseGrid>

              {sortedAndFilteredCourses.length > 0 && totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
            }
            </>
          )}
        </S.SectionInner>
      </S.ContentSection>

      <CTASection />
    </S.PageContainer>
  );
};

export default CoursePage;