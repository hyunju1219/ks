// style.js
import { css } from '@emotion/react';

export const tableLayout = css`
    width: 100%;
    border-collapse: collapse; /* 셀 사이의 간격을 없애고 단일선으로 만듭니다. */
    text-align: center;
    font-size: 16px;
    border-radius: 8px; /* 테이블 모서리를 둥글게 */
    overflow: hidden; /* radius를 적용하기 위해 필수 */
`;

export const tableHeader = css`
    background-color: #f8f9fa; /* 헤더 배경색 */
    color: #343a40;
    font-weight: 600;
    
    th {
        padding: 12px 15px;
    }
`;

export const tableBody = css`
    tr {
        border-bottom: 1px solid #dee2e6; /* 행 사이의 구분선 */
        transition: background-color 0.2s ease-in-out; /* 부드러운 호버 효과 */
    }

    td {
        padding: 12px 15px;
        color: #495057;
    }
    
    /* 첫 번째 셀(번호)은 조금 더 좁게 */
    td:first-of-type {
        width: 8%;
        color: #868e96;
    }
`;

export const clickableRow = css`
    cursor: pointer;
`;