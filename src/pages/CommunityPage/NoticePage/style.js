/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const layout = css`
  padding: 32px;
  background-color: #f9f9f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const title = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
`;

export const SearchContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = css`
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #004aad;
  }
`;

export const SearchButton = css`
  background-color: #004aad;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #003a8c;
  }
`;

export const RegisterButton = css`
  background-color: #004aad;
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #003a8c;
  }
`;

export const List = css`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const ListItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #f1f5ff;
  }
`;

export const NoticeLink = css`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #004aad;
    text-decoration: underline;
  }
`;

export const DateText = css`
  font-size: 14px;
  color: #888;
  margin-left: 20px;
  min-width: 80px;
  text-align: right;
`;

export const NoResult = css`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

export const PaginationWrapper = css`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;
