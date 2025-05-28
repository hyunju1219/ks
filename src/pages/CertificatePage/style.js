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

export const CertificateNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
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

export const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 1.5rem;
  
  @media (min-width: 1024px) {
    width: 30%;
    max-width: 400px;
    max-height: 300px;
    margin-bottom: 0;
    position: sticky;
    top: 1rem;
  }
`;

export const CertificateInfo = styled.div`
  flex: 1;
  max-width: 100%;
  
  @media (min-width: 1024px) {
    max-width: 65%;
    padding-left: 2rem;
  }
`;

export const SimpleSummaryList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SimpleSummaryItem = styled.div`
  background-color: #f3f8ff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const SimpleSummaryLabel = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const SimpleSummaryValue = styled.div`
  color: #4b5563;
  font-size: 0.9375rem;
`;

export const CertificateTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
  letter-spacing: -0.025em;
  line-height: 1.3;
  position: relative;
  
  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #003d81;
    margin-top: 0.75rem;
  }
`;

export const CertificateDescription = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.7;
  background-color: #f3f8ff;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #0056b3;
`;

export const InfoSection = styled.div`
  margin-bottom: 2.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
`;

export const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #1f2937;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 80px;
    height: 2px;
    background-color: #0056b3;
  }
`;

export const LevelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const LevelItem = styled.div`
  background-color: #e0f2fe;
  color: #0056b3;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
`;

export const CareerList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

export const CareerItem = styled.li`
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

export const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StepItem = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #0056b3;
  color: white;
  font-weight: 700;
  border-radius: 9999px;
  flex-shrink: 0;
`;

export const StepContent = styled.div``;

export const StepTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1f2937;
`;

export const StepText = styled.p`
  color: #6b7280;
`;

export const CourseButton = styled.a`
  display: inline-block;
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003d81;
  }
`;

export const DetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FlexColumnDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    
    > div {
      margin-bottom: 0;
    }
  }
  
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    
    > div {
      flex: 1;
    }
  }
`;

export const DetailItem = styled.div`
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border-left: 4px solid #0056b3;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

export const DetailTitle = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
`;

export const DetailContent = styled.div`
  p {
    margin-bottom: 0.5rem;
    color: #4b5563;
    line-height: 1.6;
  }
  
  strong {
    color: #111827;
  }
`;

export const JobDescription = styled.div`
  color: #4b5563;
  line-height: 1.7;
  
  p {
    margin-bottom: 0.75rem;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.75rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CourseItem = styled.div`
  padding: 1.25rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  border-left: 4px solid #0056b3;
`;

export const CourseTitle = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
`;

export const CourseDetails = styled.div`
  p {
    margin-bottom: 0.5rem;
    color: #4b5563;
    line-height: 1.6;
  }
  
  strong {
    color: #111827;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    color: #4b5563;
  }
`;

export const ExamScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  
  th, td {
    padding: 0.6rem 0.4rem;
    text-align: center;
    border: 1px solid #e5e7eb;
  }
  
  th {
    background-color: #f3f4f6;
    font-weight: 600;
    color: #1f2937;
  }
  
  tr:nth-of-type(even) {
    background-color: #f9fafb;
  }
  
  tr:hover {
    background-color: #f3f4f6;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    
    th, td {
      padding: 0.4rem 0.2rem;
    }
  }
  
  @media (min-width: 1024px) {
    font-size: 0.9375rem;
    
    th, td {
      padding: 0.7rem 0.5rem;
    }
  }
`;

export const ExamInfoNote = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  font-style: italic;
  margin-top: 0.5rem;
  
  a {
    color: #0056b3;
    text-decoration: underline;
    
    &:hover {
      color: #003d81;
    }
  }
`;
