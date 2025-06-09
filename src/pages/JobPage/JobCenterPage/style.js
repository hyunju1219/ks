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
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  color: #6b7280;
  text-align: center;
  margin-bottom: 3rem;
`;

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SupportCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SupportIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SupportTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
`;

export const SupportDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

export const StatsSection = styled.section`
  padding: 4rem 0;
  background-color: #0056b3;
  color: white;
`;

export const StatsTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

export const StatsSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 3rem;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

export const JobInfoSection = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

export const JobTable = styled.table`
  min-width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: none;
  
  @media (min-width: 768px) {
    display: table;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f9fafb;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  
  &:first-of-type {
    display: flex;
    align-items: center;
  }
`;

export const JobLink = styled.a`
  color: #0056b3;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const NewBadge = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  background-color: #0056b3;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
`;

export const MobileJobCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileJobCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const MobileJobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const MobileJobCompany = styled.h3`
  font-weight: 600;
  font-size: 1rem;
`;

export const MobileJobPosition = styled.h4`
  color: #0056b3;
  font-weight: 500;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
`;

export const MobileJobDetail = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const MobileJobLabel = styled.span`
  font-weight: 600;
  color: #4b5563;
  width: 5rem;
  flex-shrink: 0;
`;

export const MobileJobValue = styled.span`
  color: #6b7280;
`;

export const MoreButtonContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const MoreButton = styled.a`
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

export const SuccessCaseSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const SuccessCaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SuccessCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const SuccessHeader = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const SuccessInfo = styled.div``;

export const SuccessName = styled.h3`
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #1f2937;
`;

export const SuccessCourse = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const SuccessCompany = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const SuccessCompanyName = styled.h4`
  font-weight: 600;
  color: #0056b3;
  margin-bottom: 0.25rem;
`;

export const SuccessPosition = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

export const SuccessComment = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.9375rem;
`;
