
/** @jsxImportSource @emotion/react */
import * as s from './style';
import maintenance from '../../assets/images/공조냉동.jpg';
import energy from '../../assets/images/에너지.jpg';
import certigicate from '../../assets/images/설비보전2.jpg';
import hotwater from '../../assets/images/온수온돌.jpg';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: '공조냉동기계 과정',
      description: '냉동기, 공조기, 보일러 등의 설치 및 운용 기술을 습득하는 과정',
      image: maintenance,
      link: '/certificate/refrigeration'
    },
    {
      id: 2,
      title: '에너지관리 과정',
      description: '에너지 설비의 효율적 운용 및 관리 기술을 습득하는 과정',
      image: energy,
      link: '/certificate/energy'
    },
    {
      id: 3,
      title: '설비보전 과정',
      description: '산업 설비의 유지보수 및 관리 기술을 습득하는 과정',
      image: certigicate,
      link: '/certificate/maintenance'
    },
    {
      id: 4,
      title: '온수온돌 과정',
      description: '온수온돌 설비의 설치 및 관리 기술을 습득하는 과정',
      image: hotwater,
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
          <Link href="/course" css={s.ViewAllButton}>
            <span>전체 과정 보기</span>
            <FiArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
