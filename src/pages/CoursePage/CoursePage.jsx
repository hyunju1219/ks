import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import { db } from '@/firebase/config';
import useAuthstate from '@/hooks/useAuthstate';
import { collection, getDocs } from 'firebase/firestore';
import { getCourse } from '@/firebase/courseService';

const CoursePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const { isLoggedIn } = useAuthstate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourse();
        setCourses(data);
      } catch (error) {
        console.error('코스 불러오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const breadcrumbs = [
    { name: '교육 과정', link: '/course' },
    { name: '전체과정', link: null }
  ];

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'refrigeration', name: '공조냉동기계' },
    { id: 'energy', name: '에너지관리' },
    { id: 'maintenance', name: '설비보전' },
    { id: 'heating', name: '온수온돌' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
     <S.PageContainer>
      <Helmet>
        <title>교육 과정 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 다양한 교육 과정을 소개합니다." />
      </Helmet>

      <SubpageHeader
        title="교육 과정"
        subtitle="금성기술직업전문학교에서 제공하는 다양한 교육 과정을 확인하세요"
        breadcrumbs={breadcrumbs}
      />

      <S.ContentSection>
        <S.SectionInner>
          <S.CategoryFilter>
            {categories.map(category => (
              <S.CategoryButton
                key={category.id}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </S.CategoryButton>
            ))}
          </S.CategoryFilter>

          {isLoggedIn && (
            <S.CategoryFilter>
              <Link href='/admin/course'><S.ContactButton>과정추가</S.ContactButton></Link>
            </S.CategoryFilter>
          )}

          {loading ? (
            <p>불러오는 중...</p>
          ) : (
            <S.CourseGrid>
              {filteredCourses.map(course => (
                <Link href={`/course/${course.id}`} key={course.id}>
                  <S.CourseCard>
                    <S.CourseImage src={course.imageUrl} alt={course.title} />
                    <S.CourseContent>
                      <S.CourseTitle>{course.courseName}</S.CourseTitle>
                      <S.CourseInfo>
                        <S.CourseDetail>
                          <S.DetailLabel>접수기간:</S.DetailLabel> {course.schedule}
                        </S.CourseDetail>
                        <S.CourseDetail>
                          <S.DetailLabel>훈련일정:</S.DetailLabel> {course.registrationPeriod}
                        </S.CourseDetail>
                      </S.CourseInfo>
                      <S.MoreButton>자세히 보기</S.MoreButton>
                    </S.CourseContent>
                  </S.CourseCard>
                </Link>
              ))}
            </S.CourseGrid>
          )}

          {filteredCourses.length === 0 && !loading && (
            <S.EmptyMessage>해당 카테고리의 과정이 없습니다.</S.EmptyMessage>
          )}
        </S.SectionInner>
      </S.ContentSection>

      {/* 교육 프로세스 섹션, CTA 등 기존 내용 동일 */}
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
