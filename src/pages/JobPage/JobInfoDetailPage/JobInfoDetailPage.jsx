/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Helmet } from "react-helmet";
import SubpageHeader from "@/components/SubpageHeader/SubpageHeader";

function JobInfoDetailPage({ post }) {
    const breadcrumbs = [
      { name: '취업센터', link: '/job-center' },
      { name: '구인게시판', link: '/job-center/info' }
    ];


  return (
    <div css={s.layout}>
         <Helmet>
        <title>구인게시판 - 금성기술직업전문학교</title>
        <meta
          name="description"
          content="금성기술직업전문학교와 협약을 맺은 기업의 최신 채용 정보를 확인하고 지원하세요."
        />
      </Helmet>

      <SubpageHeader
        title="구인게시판"
        subtitle="금성기술직업전문학교와 협약을 맺은 기업의 채용 정보를 확인하세요"
        breadcrumbs={breadcrumbs}
      />
      <div css={s.container}>
        <h1 css={s.title}>{post?.title || "제목 없음"}</h1>
        <h2>취업을 축하드립니다.</h2>
        <table>
            <thead>
                <tr>
                    <th>교육과정</th>
                    <th>업체명</th>
                    <th>분야</th>
                    <th>이름</th>
                    <th>취업일</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  );
}

export default JobInfoDetailPage;
