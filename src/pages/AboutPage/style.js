import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageContainer = styled.div`
  flex: 1;
`;

export const ContentSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const SectionInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 0.25rem;
    background-color: #0056b3;
    margin: 1rem auto 0;
  }
`;

export const sectionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0056b3;
`;

export const CertificateNavItem = styled.a`
  display: inline-block; /* 또는 flex */
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.isActive ? '#0056b3' : '#f3f4f6'};
  color: ${props => props.isActive ? 'white' : '#4b5563'};
  font-weight: 500;
  border-radius: 0.375rem;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${props => props.isActive ? '#003d81' : '#e5e7eb'};
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
`;

export const AboutContent = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const ContentParagraph = styled.p`
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto 4rem auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureItem = styled.div`
  text-align: center;
`;

export const FeatureNumber = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: #0056b3;
  margin-bottom: 0.5rem;
`;

export const FeatureText = styled.div`
  color: #6b7280;
`;

export const GreetingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

export const GreetingTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    flex-grow: 1;
  }
`;

export const DirectorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const DirectorSignature = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  text-align: right;
  margin-top: 1.5rem;
  font-style: italic;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

export const FeatureListItem = styled.li`
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
  line-height: 1.5;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: #0056b3;
    font-weight: bold;
  }
`;

/* 연혁 페이지 스타일 */
export const HistoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

export const HistoryDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const HistoryTableContainer = styled.div`
  margin-bottom: 3rem;
  overflow-x: auto;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const HistoryTableHeader = styled.th`
  background-color: #0056b3;
  color: white;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
  width: ${props => props.width || 'auto'};
`;

export const HistoryTableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
`;

export const HistoryTableYearCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  vertical-align: middle;
`;

export const HistoryMobileContainer = styled.div`
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HistoryYearSection = styled.div`
  margin-bottom: 2rem;
  border-left: 3px solid #0056b3;
  padding-left: 1.5rem;
  position: relative;
`;

export const HistoryYearBadge = styled.div`
  background-color: #0056b3;
  color: white;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: inline-block;
  margin-bottom: 1rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -1.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background-color: #0056b3;
    border-radius: 50%;
  }
`;

export const HistoryEventList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const HistoryEventItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #e5e7eb;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const HistoryEventDate = styled.div`
  font-weight: 600;
  color: #0056b3;
  margin-bottom: 0.5rem;
`;

export const HistoryEventContent = styled.div`
  color: #4b5563;
  line-height: 1.5;
`;

/* Facilities Page Styles */
export const FacilitiesIntro = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FacilityCard = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const FacilityImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
`;

export const FacilityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const FacilityContent = styled.div`
  padding: 1.5rem;
`;

export const FacilityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

export const FacilityDescription = styled.p`
  color: #4b5563;
  line-height: 1.5;
`;

export const FacilityFeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const FacilityFeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const FacilityFeatureIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #0056b3;
  color: white;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FacilityFeatureContent = styled.div`
  flex: 1;
`;

export const FacilityFeatureTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const FacilityFeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.5;
`;

// 탭 네비게이션
export const TabNavigation = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
`;

// 실습 프로그램 그리드
export const PracticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

// 실습 프로그램 카드
export const PracticeCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

// 실습 카드 헤더
export const PracticeHeader = styled.div`
  margin-bottom: 20px;
`;

// 실습 제목
export const PracticeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
  line-height: 1.4;
`;

// 실습 메타 정보
export const PracticeMeta = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

// 실습 기간
export const PracticeDuration = styled.span`
  background: #f0f9ff;
  color: #0369a1;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;

// 자격증 정보
export const PracticeCertification = styled.span`
  background: #f0fdf4;
  color: #15803d;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;

// 실습 설명
export const PracticeDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 25px;
`;

// 실습 과목 섹션
export const PracticeSubjects = styled.div`
  margin-top: 25px;
`;

// 과목 제목
export const SubjectsTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 15px;
`;

// 과목 리스트
export const SubjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// 개별 과목 아이템
export const SubjectItem = styled.li`
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 8px;
  padding-left: 10px;
  
  &:before {
    content: '•';
    color: #3b82f6;
    font-weight: bold;
    position: absolute;
    margin-left: -15px;
  }
`;

// 타임라인 컨테이너
export const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 60px auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 중앙 수직선
export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
  transform: translateX(-50%);
  border-radius: 2px;
`;

// 타임라인 아이템
export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: ${props => props.isLeft ? 'flex-start' : 'flex-end'};
  align-items: center;
`;

// 타임라인 콘텐츠
export const TimelineContent = styled.div`
  width: 45%;
  padding: ${props => props.isLeft ? '0 60px 0 0' : '0 0 0 60px'};
  text-align: ${props => props.isLeft ? 'right' : 'left'};
`;

// 연도 표시
export const TimelineYear = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: ${props => {
    if (props.isFoundation) return '#dc2626';
    if (props.isHighlight) return '#3b82f6';
    return '#6b7280';
  }};
  text-shadow: ${props => props.isHighlight ? '0 2px 4px rgba(59, 130, 246, 0.2)' : 'none'};
`;

// 이벤트 박스
export const TimelineEventBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid #e5e7eb;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.isLeft ? 'right: -15px' : 'left: -15px'};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 15px solid transparent;
    ${props => props.isLeft 
      ? 'border-left-color: white;' 
      : 'border-right-color: white;'
    }
    filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.1));
  }
`;

// 개별 이벤트
export const TimelineEvent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:before {
    content: '▶';
    color: #3b82f6;
    margin-right: 8px;
    font-size: 0.8rem;
  }
`;

// 타임라인 점
export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.isHighlight ? '24px' : '16px'};
  height: ${props => props.isHighlight ? '24px' : '16px'};
  border-radius: 50%;
  background: ${props => {
    if (props.isFoundation) return '#dc2626';
    if (props.isHighlight) return '#3b82f6';
    return '#9ca3af';
  }};
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  
  ${props => props.isHighlight && `
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(59, 130, 246, 0.4);
      }
      70% {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 10px rgba(59, 130, 246, 0);
      }
      100% {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(59, 130, 246, 0);
      }
    }
  `}
`;

// 모바일용 히스토리 컨테이너
export const MobileHistoryContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin-top: 40px;
  }
`;

// 모바일용 히스토리 아이템
export const MobileHistoryItem = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-left: 4px solid ${props => {
    if (props.isFoundation) return '#dc2626';
    if (props.isHighlight) return '#3b82f6';
    return '#9ca3af';
  }};
`;

// 모바일용 연도
export const MobileHistoryYear = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${props => {
    if (props.isFoundation) return '#dc2626';
    if (props.isHighlight) return '#3b82f6';
    return '#374151';
  }};
`;

// 모바일용 이벤트 리스트
export const MobileHistoryEvents = styled.div`
  /* 이벤트 컨테이너 */
`;

// 모바일용 개별 이벤트
export const MobileHistoryEvent = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;