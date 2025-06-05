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

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.isActive ? '#0056b3' : '#f3f4f6'};
  color: ${props => props.isActive ? 'white' : '#4b5563'};
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${props => props.isActive ? '#003d81' : '#e5e7eb'};
  }
`;

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CourseCard = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const CourseContent = styled.div`
  padding: 1.5rem;
`;

export const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const CourseDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: #4b5563;
`;

export const DetailLabel = styled.span`
  font-weight: 600;
  color: #374151;
`;

export const CourseDescription = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const MoreButton = styled.a`
  display: inline-block;
  background-color: #f3f4f6;
  color: #0056b3;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e5e7eb;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 3rem 0;
  color: #6b7280;
`;

// CourseDetailPage 스타일
export const CourseDetailSection = styled.section`
  padding: 3rem 0;
  background-color: white;
`;

export const CourseDetailHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CourseDetailImage = styled.img`
  width: 70%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const CourseDetailInfo = styled.div`
  margin-bottom: 3rem;
`;

export const CourseDetailTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const CourseDetailDescription = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const CourseInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CourseInfoCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CourseInfoIcon = styled.div`
  font-size: 1.5rem;
  color: #0056b3;
  margin-bottom: 0.5rem;
`;

export const CourseInfoTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const CourseInfoValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
`;

export const CourseDetailContent = styled.div`
  margin-bottom: 2rem;
`;

export const CourseDetailSubSection = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #0056b3;
  margin-bottom: 1.5rem;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  color: #4b5563;
`;

export const FeatureIcon = styled.div`
  color: #0056b3;
  margin-right: 0.75rem;
  flex-shrink: 0;
  font-size: 1.25rem;
`;

export const FeatureText = styled.p`
  line-height: 1.5;
`;

export const CurriculumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CurriculumItem = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CurriculumHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CurriculumWeek = styled.div`
  background-color: #0056b3;
  color: white;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
  
  @media (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const CurriculumTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
`;

export const CurriculumContent = styled.p`
  color: #4b5563;
  line-height: 1.5;
`;

export const InstructorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InstructorCard = styled.div`
  display: flex;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const InstructorImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  object-fit: cover;
  margin-right: 1.5rem;
`;

export const InstructorInfo = styled.div`
  flex: 1;
`;

export const InstructorName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const InstructorPosition = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #0056b3;
  margin-bottom: 0.5rem;
`;

export const InstructorQualification = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const TestimonialQuote = styled.div`
  font-size: 3rem;
  color: rgba(0, 86, 179, 0.2);
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  line-height: 1;
`;

export const TestimonialContent = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

export const TestimonialAuthor = styled.div`
  margin-top: 1rem;
`;

export const TestimonialName = styled.p`
  font-weight: 600;
  color: #1f2937;
`;

export const TestimonialCourse = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const TestimonialCompany = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #0056b3;
  margin-top: 0.25rem;
`;

export const ContactInfo = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ContactText = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const ContactIcon = styled.div`
  margin-right: 0.5rem;
`;

export const ContactLabel = styled.p`
  font-weight: 600;
  margin-right: 0.5rem;
  color: #1f2937;
`;

export const ContactValue = styled.p`
  color: #4b5563;
`;

export const ContactButton = styled.button`
  margin-top: 1.5rem;
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  
  &:hover {
    background-color: #003d81;
  }
`;

export const CourseDetailFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const BackToListButton = styled.button`
  background-color: #e5e7eb;
  color: #374151;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d1d5db;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

export const LoadingSpinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid rgba(0, 86, 179, 0.1);
  border-left-color: #0056b3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  color: #6b7280;
  font-size: 1rem;
`;

export const ProcessSection = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

export const ProcessTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ProcessSubtitle = styled.p`
  color: #6b7280;
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 48rem;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
  }
`;

export const StepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #0056b3;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

export const StepInfo = styled.div``;

export const StepTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

export const StepDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const StepConnector = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d1d5db;
  margin: 1.5rem 0;
  
  @media (min-width: 768px) {
    width: 2px;
    height: 1.5rem;
    margin: 0 0.5rem;
    flex-grow: 1;
  }
`;
export const RecruitmentStatusBadge = styled.div`
  position: absolute;
  width: 4rem;
  margin: 0.8rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 6px 12px;
  border-radius: 0.25rem;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
`;

export const CertificationNavBar = styled.div`
   display: flex;
  flex-wrap: wrap;
  height: auto;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const CertNavItem = styled.button` // 버튼 또는 div로 스타일링 가능
    display: inline-block; /* 또는 flex */
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.isActive ? '#0056b3' : '#f3f4f6'};
  color: ${props => props.isActive ? 'white' : '#4b5563'};
  font-weight: 500;
  border-radius: 0.25rem;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${props => props.isActive ? '#003d81' : '#e5e7eb'};
  }
`;

// 과정 카드에 자격증 종류 표시 (선택 사항)
// export const CourseCertificationType = styled.p`
//   font-size: 0.9rem;
//   color: #555;
//   margin-bottom: 8px;
// `;


export const ImgLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;