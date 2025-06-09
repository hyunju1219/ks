/** @jsxImportSource @emotion/react */
import * as s from './style';
import { getRecruitingCourses } from '@/firebase/courseService';
import React, { useEffect, useState } from 'react';
import { IoCall } from "react-icons/io5";
import { FiMapPin, FiBell, FiMessageSquare, FiBookOpen, FiList, FiPhone, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavSection(props) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoursesData = async () => {
      setIsLoading(true); // 로딩 시작점 명확히
      try {
        const data = await getRecruitingCourses();
        // 최대 3개의 과정만 보여주도록 슬라이스 (선택 사항)
        setCourses(data.slice(0, 3));
      } catch (error) {
        console.error('코스 데이터 로딩 실패:', error);
        setCourses([]); // 오류 시 빈 배열로
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllCoursesData();
  }, []);

  const navigationItems = [
    { to: '/about/location', icon: FiMapPin, label: '오시는길', color: '#3B82F6' },
    { to: '/notice', icon: FiBell, label: '공지사항', color: '#EF4444' },
    { to: '/contact', icon: FiMessageSquare, label: '상담하기', color: '#10B981' },
    { to: '/certificate/refrigeration', icon: FiBookOpen, label: '과정소개', color: '#8B5CF6' }, // 예시 경로, 실제 경로로 수정
    { to: '/course', icon: FiList, label: '교육과정', color: '#F59E0B' }, // '/courseJoin' 대신 '/course'가 더 일반적일 수 있음
  ];

  return (
    <section css={s.infoSection}>
      <div css={s.container}>
        {/* 네비게이션 카드들 */}
        <div css={s.navGrid}>
          {navigationItems.map((item, index) => (
            <Link key={index} to={item.to} css={s.navCard}>
              <item.icon size={28}  /> {/* 아이콘에 색상 직접 전달 가능 */}
              <span css={s.navLabel}>{item.label}</span>
            </Link>
          ))}

          {/* 연락처 카드 */}
          <div css={s.contactCard}>
            <div css={s.iconLayout}>
              <IoCall size={28} color={'#ffffff'} /> {/* 아이콘에 색상 직접 전달 */}
              <span css={s.contactLabel}>문의전화</span>
            </div>
            <div css={s.contactInfo}>
              <div css={s.phoneNumbers}>
                <a href="tel:051-806-2200" css={s.phoneLink}>051-806-2200</a>
                <a href="tel:051-864-0535" css={s.phoneLink}>051-864-0535</a>
              </div>
            </div>
          </div>
        </div>

        {/* 현재 모집중인 과정 섹션 */}
        <div css={s.courseSectionWrapper}>
          <div css={s.sectionHeader}>
            <h2 css={s.sectionTitle}>현재 모집중인 교육과정</h2>
            <p css={s.sectionSubtitle}>전문적인 기술 교육으로 여러분의 미래를 함께 만들어갑니다</p>
          </div>

          {isLoading ? (
            <div css={s.loadingContainer}>
              <div css={s.loadingSpinner}></div>
              <p css={s.loadingText}>교육과정을 불러오는 중...</p>
            </div>
          ) : courses.length === 0 ? ( // 로딩 완료 후 과정이 없을 경우
            <div css={s.emptyCourseMessageContainer}> {/* 별도의 스타일 컨테이너 */}
              <p css={s.emptyCourseMessageText}>현재 모집중인 과정이 없습니다.</p>
            </div>
          ) : (
            <>
              <div css={s.courseGrid}>
                {/* courses가 배열이고 각 course 객체에 id가 있다고 가정 */}
                {Array.isArray(courses) && courses.map((course) => (
                  // 각 courseCard를 Link로 감싸고, to prop에 동적 경로 설정
                  <Link key={course.id} to={`/course-detail/${course.id}`} css={s.courseCardLink}> {/* 링크 스타일 적용 */}
                    <div css={s.courseCard}> {/* 기존 courseCard 스타일 유지 */}
                      <div css={s.imageContainer}>
                        <img src={course.imageUrl || 'https://via.placeholder.com/300x180?text=No+Image'} alt={course.courseName} css={s.courseImage} />
                        {course.category && ( // 카테고리가 있을 때만 배지 표시
                          <div css={s.categoryBadge}>
                            <span>{course.category}</span>
                          </div>
                        )}
                      </div>
                      <div css={s.cardContent}>
                        <h3 css={s.courseTitle}>{course.courseName}</h3>
                        <div css={s.courseDetails}>
                          <div css={s.detailItem}>
                            <span css={s.detailLabel}>모집기간</span>
                            <span css={s.detailValue}>{course.registrationPeriod || '상시모집'}</span>
                          </div>
                          <div css={s.detailItem}>
                            <span css={s.detailLabel}>훈련기간</span>
                            <span css={s.detailValue}>{course.trainingPeriod || '문의'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div css={s.viewAllContainer}>
                <Link to="/courseJoin" css={s.viewAllButton}>
                  <span>전체 교육과정 보기</span>
                  <FiArrowRight size={20} />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default NavSection;