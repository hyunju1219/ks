import { css } from "@emotion/react";

const layout = css`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
`;

const title = css`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const menuGrid = css`
  display: flex;
  gap: 20px;
`;

const menuButton = css`
  padding: 20px 40px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const pageContainer = css`
  padding: 40px;
`;

const pageTitle = css`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const s = {
  layout,
  title,
  menuGrid,
  menuButton,
  pageContainer,
  pageTitle,
};

export default s;
