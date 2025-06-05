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

// 과정평가형 이미지
import explanation1 from '../../assets/notice/과정평가1.png';
import explanation2 from '../../assets/notice/과정평가2.png';
import explanation3 from '../../assets/notice/과정평가3.png';
import explanation4 from '../../assets/notice/국가기간.png';

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

const ITEMS_PER_PAGE = 9;

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

  useEffect(() => {
    setActiveCategoryToFilter(getActiveCategoryFromSlug());
    setActiveCertificationType('all');
    setCurrentPage(1);
  }, [params.categorySlug]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCertificationType]);


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

  // 어떤 내용을 보여줄지 결정하는 로직
  const renderContent = () => {
    if (loading && allCourses.length === 0) {
      return (
        <S.LoadingContainer>
          <S.LoadingSpinner />
          <S.LoadingText>과정을 불러오는 중...</S.LoadingText>
        </S.LoadingContainer>
      );
    }

    if (activeCategoryToFilter === '과정평가형') {
      return (
        <S.ImgLayout>
          <img src={explanation1} alt="과정평가형 설명 1" />
          <img src={explanation3} alt="과정평가형 설명 3" />
        </S.ImgLayout>
      );
    } else if (activeCategoryToFilter === '국가기간전략훈련') {
      return (
        <S.ImgLayout>
          {/* 국가기간전략훈련 관련 이미지들 */}
          <img src={explanation4} alt="국가기간전략훈련 설명 1" />
        </S.ImgLayout>
      );
    } else {
      // 그 외 카테고리 (전체, 내일배움카드, 부산시과정 등)는 기존 과정 목록 표시
      return (
        <>
          {/* 자격증 타입 필터 (과정평가형, 국가기간전략훈련이 아닐 때만 표시) */}
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
      );
    }
  };

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

          {/* 콘텐츠 렌더링 함수 호출 */}
          {renderContent()}

        </S.SectionInner>
      </S.ContentSection>

      <CTASection />
    </S.PageContainer>
  );
};

export default CoursePage;