
/** @jsxImportSource @emotion/react */
import * as s from './style';
import PropTypes from 'prop-types'; // prop-types 임포트

// 스타일 정의 (기존 스타일 그대로 사용 또는 별도 style.js 파일로 분리 가능)


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null; // 페이지가 1개 이하면 페이지네이션을 표시하지 않음
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 간단한 페이지 번호 로직 (더 복잡한 로직으로 확장 가능: ..., <<, >> 등)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div css={s.paginationContainerStyle}>
      <div css={s.paginationInnerStyle}>
        <button
          css={s.paginationButtonStyle(false, currentPage === 1)}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          이전
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            css={s.paginationButtonStyle(currentPage === number, false)}
            onClick={() => onPageChange(number)}
            disabled={currentPage === number} // 현재 페이지는 클릭 비활성화
          >
            {number}
          </button>
        ))}
        <button
          css={s.paginationButtonStyle(false, currentPage === totalPages)}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;