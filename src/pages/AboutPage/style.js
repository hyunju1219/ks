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
