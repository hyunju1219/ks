/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Helmet } from "react-helmet";
import SubpageHeader from "@/components/SubpageHeader/SubpageHeader";

function JobEmpDetailPage({post}) {
    const breadcrumbs = [
      { name: '취업센터', link: '/job-center' },
      { name: '취업현황', link: '/job-center/emp' }
    ];
const JOB_OPPORTUNITIES = [
    { id: 1, company: '부산-김해경전철', position: '역사 기계설비 유지보수', deadline: '2023.07.30' },
    { id: 2, company: '한국공조엔지니어링', position: '거래처 냉동기기 유지관리', deadline: '2023.07.25' },
  ];
    return (
        <div css={s.layout}>
         <Helmet>
        <title>취업현황 - 금성기술직업전문학교</title>
        <meta
          name="description"
          content="금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."
        />
      </Helmet>

      <SubpageHeader
        title="취업현황"
        subtitle=" 금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다."
        breadcrumbs={breadcrumbs}
      />
      <div css={s.container}>
        <h1 css={s.title}>[취업성공]부산-김해경전철</h1>
        <div css={s.etcSection}>
            <span css={s.etcInfo}>작성일</span>
            <span css={s.etcInfo}>2025-06-11</span>
            <span css={s.etcInfo}>조회수</span>
            <span css={s.etcInfo}>11</span>
        </div>
        <h2 style={{fontSize:"20px", fontWeight:"600", marginBottom:"20px"}}>취업을 축하드립니다.</h2>
        <table>
            <thead>
                <tr>
                    <th>업체명</th>
                    <th>분야</th>
                    <th>이름</th>
                    <th>취업일</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:"15px"}}>부산-김해경전철</td>
                <td style={{padding:"15px"}}>역사 기계설비 유지보수</td>
                <td style={{padding:"15px"}}>박*훈</td>
                <td style={{padding:"15px"}}>2025-04-28</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    );
}

export default JobEmpDetailPage;