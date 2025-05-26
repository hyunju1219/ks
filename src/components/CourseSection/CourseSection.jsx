
/** @jsxImportSource @emotion/react */
import * as s from './style';

import { Link } from 'wouter';


const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: '공조냉동기계 과정',
      description: '냉동기, 공조기, 보일러 등의 설치 및 운용 기술을 습득하는 과정',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      link: '/certificate/refrigeration'
    },
    {
      id: 2,
      title: '에너지관리 과정',
      description: '에너지 설비의 효율적 운용 및 관리 기술을 습득하는 과정',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      link: '/certificate/energy'
    },
    {
      id: 3,
      title: '설비보전 과정',
      description: '산업 설비의 유지보수 및 관리 기술을 습득하는 과정',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      link: '/certificate/maintenance'
    },
    {
      id: 4,
      title: '온수온돌 과정',
      description: '온수온돌 설비의 설치 및 관리 기술을 습득하는 과정',
      image: 'https://images.unsplash.com/photo-1581092334247-47406fb9ec46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      link: '/certificate/heating'
    }
  ];

  return (
    <section css={s.SectionContainer}>
      <div css={s.SectionInner}>
        <h2 css={s.SectionTitle}>주요 교육 과정</h2>
        <p css={s.SectionSubtitle}>금성기술직업전문학교에서 제공하는 다양한 교육 과정을 확인하세요</p>
        
        <div css={s.CourseGrid}>
          {courses.map(course => (
            <div css={s.CourseCard} key={course.id}>
              <img css={s.CourseImage} src={course.image} alt={course.title} />
              <div css={s.CourseContent}>
                <h3 css={s.CourseTitle}>{course.title}</h3>
                <p css={s.CourseDescription}>{course.description}</p>
                <div css={s.CourseFooter}>
                  <span css={s.CourseBadge}>국가기술자격</span>
                  <Link href={course.link}>
                    <span css={s.CourseLink}>자세히 보기</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div css={s.ButtonContainer}>
          <Link href="/course">
            <span css={s.ViewAllButton}>전체 과정 보기</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
