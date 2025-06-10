/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import s from "./style";

const AdminPage = () => {
  return (
    <div css={s.layout}>
      <h1 css={s.title}>관리자 페이지</h1>
      <div css={s.menuGrid}>
        <Link css={s.menuButton} to="/courses/type/naeil-card" >교육과정 관리</Link>
        <Link css={s.menuButton} to="/notice" >공지사항 관리</Link>
        <Link css={s.menuButton} to="/job-center/info" >구인게시판 관리</Link>
        <Link css={s.menuButton} to="/job-center/emp" >취업현황 관리</Link>
      </div>
    </div>
  );
};

export default AdminPage;
