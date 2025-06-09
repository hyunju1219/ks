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

export const SearchSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
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

export const SearchContainer = styled.form`
  display: flex;
  max-width: 36rem;
  margin: 0 auto 2rem auto;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem 0 0 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 1px #0056b3;
  }
`;

export const SearchButton = styled.button`
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0 1.5rem;
  border: none;
  border-radius: 0 0.375rem 0.375rem 0;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003d81;
  }
`;

export const NoticeTable = styled.table`
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 2rem;
  display: none;
  
  @media (min-width: 768px) {
    display: table;
  }
`;

export const TableHeader = styled.th`
  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  width: ${props => props.width || 'auto'};
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
`;

export const NoticeLink = styled.a`
  color: #374151;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #0056b3;
  }
`;

export const ImportantBadge = styled.span`
  display: inline-block;
  background-color: #dc2626;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
`;

export const NewBadge = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  background-color: #dc2626;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background-color: #e5e7eb;
  color: #4b5563;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
`;

export const MobileNoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNoticeItem = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const MobileNoticeContent = styled.div`
  padding: 1rem;
`;

export const MobileNoticeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const MobileNoticeCategory = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const MobileNoticeTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
`;

export const MobileNoticeInfo = styled.div`
  display: flex;
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const MobileNoticeDate = styled.span`
  margin-right: 1rem;
`;

export const MobileNoticeViews = styled.span``;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 3rem 0;
  color: #6b7280;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  background-color: white;
  color: ${props => props.disabled ? '#9ca3af' : '#374151'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:first-of-type {
    border-radius: 0.375rem 0 0 0.375rem;
  }
  
  &:last-of-type {
    border-radius: 0 0.375rem 0.375rem 0;
  }
  
  &:hover:not(:disabled) {
    background-color: #f3f4f6;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
`;

export const PageNumber = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db;
  border-left: none;
  background-color: ${props => props.isActive ? '#0056b3' : 'white'};
  color: ${props => props.isActive ? 'white' : '#374151'};
  font-weight: ${props => props.isActive ? '600' : '400'};
  cursor: pointer;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? '#0056b3' : '#f3f4f6'};
  }
`;

// ContactPage Styles
export const ContactFormContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

export const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 86, 179, 0.1);
  color: #0056b3;
  border-radius: 9999px;
  margin-bottom: 1rem;
`;

export const ContactLabel = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

export const ContactText = styled.p`
  color: #6b7280;
`;

export const ContactLink = styled.a`
  color: #0056b3;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

// LocationPage Styles
export const MapContainer = styled.div`
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const LocationInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LocationInfoCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const LocationInfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #0056b3;
  color: #1f2937;
`;

export const LocationInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const LocationInfoItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

export const LocationInfoIcon = styled.div`
  color: #0056b3;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
`;

export const LocationInfoContent = styled.div`
  flex: 1;
`;

export const LocationInfoLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #374151;
`;

export const LocationInfoText = styled.p`
  color: #6b7280;
  line-height: 1.5;
`;

export const TransportationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TransportationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const TransportationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  height: 2.5rem;
  background-color: ${props => props.color || 'rgba(0, 86, 179, 0.1)'};
  color: white;
  border-radius: 0.5rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const TransportationText = styled.p`
  color: #4b5563;
  font-size: 0.9375rem;
  word-break: keep-all;
  line-height: 1.4;
`;

// NoticeDetailPage 스타일
export const NoticeDetailCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  max-width: 48rem;
  margin: 0 auto;
`;

export const NoticeDetailHeader = styled.div`
  padding: 1.5rem 2rem;
`;

export const CategoryBadgeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const NoticeDetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const NoticeDetailInfo = styled.div`
  display: flex;
  color: #6b7280;
  font-size: 0.875rem;
`;

export const NoticeDetailInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export const NoticeDetailInfoLabel = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
`;

export const NoticeDetailInfoValue = styled.span``;

export const NoticeDetailDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 0;
`;

export const NoticeDetailContent = styled.div`
  padding: 2rem;
  line-height: 1.75;
  color: #374151;
`;

export const NoticeDetailParagraph = styled.p`
  margin-bottom: 1rem;
  white-space: pre-wrap;
`;

export const NoticeDetailFooter = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const BackToListButton = styled.button`
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003d81;
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
