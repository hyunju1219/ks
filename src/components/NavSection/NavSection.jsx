/** @jsxImportSource @emotion/react */
import * as s from './style';
import { getRecruitingCourses } from '@/firebase/courseService';
import React, { useEffect, useState } from 'react';
import { IoCall } from "react-icons/io5";
import { FiMapPin, FiBell, FiMessageSquare, FiBookOpen, FiList, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavSection(props) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoursesData = async () => {
      setIsLoading(true);
      try {
        const data = await getRecruitingCourses();

        // --- ▼ 데이터 정렬 로직 추가 ▼ ---
        const sortedData = [...data].sort((a, b) => {
          // Date 객체를 생성하는 헬퍼 함수
          const getStartDate = (period) => {
            // trainingPeriod가 유효한지, '~'를 포함하는지 확인
            if (!period || !period.includes('~')) {
              return null; // 정렬할 수 없는 경우 null 반환
            }
            // "YYYY.MM.DD ~ ..." 에서 "YYYY.MM.DD" 부분만 추출
            const startDateString = period.split('~')[0].trim();
            // "YYYY.MM.DD" 형식을 "YYYY-MM-DD"로 변경하여 Date 객체 생성
            return new Date(startDateString.replace(/\./g, '-'));
          };

          const dateA = getStartDate(a.trainingPeriod);
          const dateB = getStartDate(b.trainingPeriod);

          // 1. 둘 다 날짜가 아닌 경우, 순서 유지
          if (!dateA && !dateB) return 0;
          // 2. a만 날짜가 아닌 경우, a를 뒤로 보냄
          if (!dateA) return 1;
          // 3. b만 날짜가 아닌 경우, b를 뒤로 보냄
          if (!dateB) return -1;

          // 4. 둘 다 유효한 날짜인 경우, 시간 순으로 비교 (오름차순)
          return dateA - dateB;
        });
        // --- ▲ 데이터 정렬 로직 끝 ▲ ---

        setCourses(sortedData); // 정렬된 데이터로 상태 업데이트
      } catch (error) {
        console.error('코스 데이터 로딩 실패:', error);
        setCourses([]);
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
    { to: '/certificate/refrigeration', icon: FiBookOpen, label: '과정소개', color: '#8B5CF6' },
    { to: '/course', icon: FiList, label: '교육과정', color: '#F59E0B' },
  ];

  return (
    <section css={s.infoSection}>
      <div css={s.container}>
        {/* 네비게이션 카드들 */}
        <div css={s.navGrid}>
          {navigationItems.map((item, index) => (
            <Link key={index} to={item.to} css={s.navCard}>
              <item.icon size={28} />
              <span css={s.navLabel}>{item.label}</span>
            </Link>
          ))}
          <div css={s.contactCard}>
            <div css={s.iconLayout}>
              <IoCall size={28} color={'#ffffff'} />
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
          ) : courses.length === 0 ? (
            <div css={s.emptyCourseMessageContainer}>
              <p css={s.emptyCourseMessageText}>현재 모집중인 과정이 없습니다.</p>
            </div>
          ) : (
            <>
              <div css={s.courseGrid}>
                {Array.isArray(courses) && courses.slice(0, 4).map((course) => (
                  <Link key={course.id} to={`/courses/${course.id}`} css={s.courseCardLink}>
                    <div css={s.courseCard}>
                      <div css={s.imageContainer}>
                        <img src={course.imageUrl || 'https://via.placeholder.com/300x180?text=No+Image'} alt={course.courseName} css={s.courseImage} />
                        {course.category && (
                          <div css={s.categoryBadge}>
                            <span>{course.category}</span>
                          </div>
                        )}
                      </div>
                      <div css={s.cardContent}>
                        <h3 css={s.courseTitle}>{course.courseName}</h3>
                        {/* 더 나은 가독성을 위해 한 줄로 합치거나 구조를 유지할 수 있습니다. */}
                        <p css={s.courseDescription}>
                          {`모집: ${course.registrationPeriod || '상시모집'}`}
                        </p>
                        <p css={s.courseDescription}>
                          {`훈련: ${course.trainingPeriod || '문의'}`}
                        </p>
                         {/* 이전 답변의 푸터 구조를 적용하는 것도 좋습니다.
                         <p css={s.courseDescription}>
                           {`모집: ${course.registrationPeriod || '상시모집'} | 훈련: ${course.trainingPeriod || '문의'}`}
                         </p>
                         <div css={s.courseCardFooter}>
                           ...
                         </div>
                         */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div css={s.viewAllContainer}>
                <Link to="/courses/open" css={s.viewAllButton}>
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