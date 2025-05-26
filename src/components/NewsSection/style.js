import { css } from '@emotion/react';

export const SectionContainer = css`
  padding: 4rem 0;
  background-color: rgba(77, 130, 197, 0.1);
`;

export const SectionInner = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionHeader = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SectionTitle = css`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ViewAllLink = css`
  display: flex;
  align-items: center;
  color: #00a0e9;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  svg {
    margin-left: 0.25rem;
  }

  &:hover {
    color: #003d81;
  }
`;

export const NewsTable = css`
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border-collapse: collapse;
`;

export const TableHeader = css`
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableHeaderDate = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  text-align: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  width: 8rem;
`;

export const TableCell = css`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableCellLast = css`
  padding: 0.75rem 1rem;
  border-bottom: none;
`;

export const TableCellDate = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
`;

export const TableCellDateLast = css`
  display: none;

  @media (min-width: 768px) {
    display: table-cell;
  }

  padding: 0.75rem 1rem;
  border-bottom: none;
  text-align: center;
  color: #6b7280;
`;

export const NewsLink = css`
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

export const NewBadge = css`
  display: inline-block;
  margin-left: 0.5rem;
  background-color: #0056b3;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
`;
