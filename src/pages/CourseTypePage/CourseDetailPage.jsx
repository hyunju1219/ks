import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';

import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';
import useAuthstate from '@/hooks/useAuthstate';
import { deleteCourse, getCourseById } from '@/firebase/courseService';
import BackButton from '@/components/Button/BackButton';
import EditButton from '@/components/Button/EditButton';
import DeleteButton from '@/components/Button/DeleteButton';

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuthstate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        if (!data) {
          alert('존재하지 않는 교육 과정입니다.');
          navigate('/course');
          return;
        }
        setCourse(data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
        alert('데이터를 불러오는데 실패했습니다.');
        navigate('/course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  console.log(course);
  if (loading) {
    return (
      <S.PageContainer>
        <S.LoadingContainer>
          <S.LoadingSpinner />
          <S.LoadingText>교육 과정 정보를 불러오는 중입니다...</S.LoadingText>
        </S.LoadingContainer>
      </S.PageContainer>
    );
  }

  const handleDelete = async () => {
    if (!id) return alert('id 없음');

     if (window.confirm('삭제하시겠습니까?')) {
          try {
            await deleteCourse(id);
            alert('삭제되었습니다.');
            navigate('/courses/open');
          } catch (err) {
            alert('삭제에 실패했습니다.');
            console.error(err);
          }
        }
  };

  const displaySelfCost = (cost) => {
    const numCost = Number(cost);
    if (isNaN(numCost)) { // 숫자로 변환 불가 시
      return cost || '0'; // 원래 값 또는 '0'
    }
    return numCost.toLocaleString('ko-KR');
  };

  return (
    <S.PageContainer>
      {course && (
        <>
          <Helmet>
            <title>{course.courseName} - 금성기술직업전문학교</title>
          </Helmet>

          <SubpageHeader
            title="교육 과정"
            subtitle={course.title}
            breadcrumbs={[
              { name: '교육 과정', link: '/course' },
              { name: course.category, link: null },
              { name: course.courseName, link: null }
            ]}
          />
          <S.CourseDetailSection>
            {
              isLoggedIn ?
                <S.SectionInner>
                  <EditButton onClick={() => navigate(`/admin/course/${id}`)} />
                  <DeleteButton onClick={handleDelete} />
                </S.SectionInner>
                : null
            }
            <S.SectionInner>
              <S.CourseDetailHeader>
                <S.CourseDetailImage src={course.imageUrl} alt={course.title} />
              </S.CourseDetailHeader>

              <S.CourseDetailInfo>
                <S.CourseDetailTitle>{course.title}</S.CourseDetailTitle>
                <S.CourseDetailDescription>{course.detailDescription}</S.CourseDetailDescription>

                <S.CourseInfoGrid>
                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-calendar-alt"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>교육 유형</S.CourseInfoTitle>
                    <S.CourseInfoValue>{course.category}</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-calendar-alt"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>접수 기간</S.CourseInfoTitle>
                    <S.CourseInfoValue>{course.registrationPeriod}</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-calendar-alt"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>훈련 기간</S.CourseInfoTitle>
                    <S.CourseInfoValue>{course.trainingPeriod}</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-calendar-alt"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>일정</S.CourseInfoTitle>
                    <S.CourseInfoValue>{course.schedule}</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-won-sign"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>교육비</S.CourseInfoTitle>
                    <S.CourseInfoValue>{displaySelfCost(course.price)}원</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-won-sign"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>자비 부담금</S.CourseInfoTitle>
                    <S.CourseInfoValue>{displaySelfCost(course.selfCost)}원</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-won-sign"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>내일배움카드 지원금</S.CourseInfoTitle>
                    <S.CourseInfoValue>{displaySelfCost(course.supportFund)}원</S.CourseInfoValue>
                  </S.CourseInfoCard>

                  <S.CourseInfoCard>
                    <S.CourseInfoIcon>
                      <i className="fas fa-users"></i>
                    </S.CourseInfoIcon>
                    <S.CourseInfoTitle>정원</S.CourseInfoTitle>
                    <S.CourseInfoValue>{course.capacity}</S.CourseInfoValue>
                  </S.CourseInfoCard>
                </S.CourseInfoGrid>
              </S.CourseDetailInfo>

              <S.CourseDetailContent>
                <S.CourseDetailSubSection>
                  <S.SectionTitle>교육과정 특징</S.SectionTitle>
                  <S.FeatureList dangerouslySetInnerHTML={{ __html: course.description }} />
                </S.CourseDetailSubSection>

                {/* <S.CourseDetailSubSection>
                  <S.SectionTitle>교육 내용</S.SectionTitle>
                  <S.CurriculumList>
                    {course.curriculum.map((item, index) => (
                      <S.CurriculumItem key={index}>
                        <S.CurriculumHeader>
                          <S.CurriculumWeek>{item.week}</S.CurriculumWeek>
                          <S.CurriculumTitle>{item.title}</S.CurriculumTitle>
                        </S.CurriculumHeader>
                        <S.CurriculumContent>{item.content}</S.CurriculumContent>
                      </S.CurriculumItem>
                    ))}
                  </S.CurriculumList>
                </S.CourseDetailSubSection> */}

                <S.CourseDetailSubSection>
                  <S.SectionTitle>지원 및 문의</S.SectionTitle>
                  <S.ContactInfo>
                    <S.ContactText>교육 과정에 대한 자세한 문의나 상담이 필요하시면 아래 연락처로 문의해 주세요.</S.ContactText>
                    <S.ContactMethod>
                      <S.ContactIcon>📞</S.ContactIcon>
                      <S.ContactLabel>전화:</S.ContactLabel>
                      <S.ContactValue>051-806-2200</S.ContactValue>
                    </S.ContactMethod>
                    <Link to="/contact">
                      <S.ContactButton>문의하기</S.ContactButton>
                    </Link>
                  </S.ContactInfo>
                </S.CourseDetailSubSection>
              </S.CourseDetailContent>

              <S.CourseDetailFooter>
                <BackButton onClick={() => navigate(-1)} />
              </S.CourseDetailFooter>
            </S.SectionInner>
          </S.CourseDetailSection>

          <CTASection />
        </>
      )}
    </S.PageContainer>
  );
};

export default CourseDetailPage;