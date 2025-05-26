/** @jsxImportSource @emotion/react */
import { Link } from "wouter";
import s from "./style";

const AdminPage = () => {
  return (
    <div css={s.layout}>
      <h1 css={s.title}>관리자 페이지</h1>
      <div css={s.menuGrid}>
        <Link css={s.menuButton} href="/course" >교육과정 관리</Link>
        <Link css={s.menuButton} href="/notice" >공지사항 관리</Link>
      </div>
    </div>
  );
};

export default AdminPage;
