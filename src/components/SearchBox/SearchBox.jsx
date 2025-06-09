/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaSearch } from "react-icons/fa";

function SearchBox({ value, onChange, onSubmit, children }) {
  return (
    <form css={s.searchSection} onSubmit={onSubmit}>
      <div css={s.searchBox}>
        <FaSearch size={20} css={s.iconStyle} />
        <input
          type="text"
          css={s.inputBox}
          placeholder="검색어를 입력하세요"
          value={value}
          onChange={onChange}
        />
      </div>
      {children}
    </form>
  );
}

export default SearchBox;
