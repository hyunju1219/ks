import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as s from './style';

const CourseAllPage = () => {
  return (
    <div style={s.pageContainer}>
      <Helmet>
        <title>전체 과정 - 금성기술직업전문학교</title>
      </Helmet>

      <SubpageHeader
        title="교육 과정"
        subtitle="금성기술직업전문학교에서 제공하는 다양한 교육 과정을 확인하세요"
        breadcrumbs={[
          { name: '홈', link: '/' },
          { name: '교육 과정', link: '/course' },
          { name: '전체과정', link: null },
        ]}
      />

      <div style={s.innerWrapper}>
        <h2 style={s.mainTitle}>2025년도 실기 작업형 과정 한눈에 보기</h2>

        {/* ○ 기능장 */}
        <h3 style={s.categoryTitle}>○기능장</h3>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>회별</th>
              <th style={s.th}>훈련직종</th>
              <th style={s.th}>모집인원</th>
              <th style={s.th}>실기시험일정</th>
              <th style={s.th}>실기훈련기간</th>
              <th style={s.th}>훈련시간</th>
              <th style={s.th}>내일배움 지원금</th>
              <th style={s.th}>자비 부담금</th>
              <th style={s.th}>훈련비(교육비)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>77회</td>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>03/15 ~ 04/02</td>
              <td style={s.td}>-</td>
              <td style={s.td}>-</td>
              <td style={s.td}>446,400</td>
              <td style={s.td}>653,600</td>
              <td style={s.td}>1,100,000</td>
            </tr>
            <tr>
              <td style={s.td}>78회</td>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>08/30 ~ 09/17</td>
              <td style={s.td}>07/20 ~ 08/30</td>
              <td style={s.td}>14:00 ~ 19:00 (60시간)</td>
              <td style={s.td}>446,400</td>
              <td style={s.td}>653,600</td>
              <td style={s.td}>1,100,000</td>
            </tr>
          </tbody>
        </table>

        {/* ○ 산업기사 */}
        <h3 style={s.categoryTitle}>○산업기사</h3>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>회별</th>
              <th style={s.th}>훈련직종</th>
              <th style={s.th}>모집인원</th>
              <th style={s.th}>실기시험일정</th>
              <th style={s.th}>실기훈련기간</th>
              <th style={s.th}>훈련시간</th>
              <th style={s.th}>내일배움 지원금</th>
              <th style={s.th}>자비 부담금</th>
              <th style={s.th}>훈련비(교육비)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td} rowSpan={2}>1회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>04/19 ~ 05/09</td>
              <td style={s.td} rowSpan={2}>03/28 ~ 04/17</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>552,380</td>
              <td style={s.td}>770,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>682,380</td>
              <td style={s.td}>900,000</td>
            </tr>
            <tr>
              <td style={s.td} rowSpan={2}>2회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>07/19 ~ 08/06</td>
              <td style={s.td} rowSpan={2}>06/27 ~ 07/17</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>552,380</td>
              <td style={s.td}>770,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>682,380</td>
              <td style={s.td}>900,000</td>
            </tr>
            <tr>
              <td style={s.td} rowSpan={2}>3회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>11/01 ~ 11/21</td>
              <td style={s.td} rowSpan={2}>10/13 ~ 10/31</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>552,380</td>
              <td style={s.td}>770,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>682,380</td>
              <td style={s.td}>900,000</td>
            </tr>
          </tbody>
        </table>

        {/* ○ 기능사 */}
        <h3 style={s.categoryTitle}>○기능사</h3>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>회별</th>
              <th style={s.th}>훈련직종</th>
              <th style={s.th}>모집인원</th>
              <th style={s.th}>실기시험일정</th>
              <th style={s.th}>실기훈련기간</th>
              <th style={s.th}>훈련시간</th>
              <th style={s.th}>내일배움 지원금</th>
              <th style={s.th}>자비 부담금</th>
              <th style={s.th}>훈련비(교육비)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td} rowSpan={2}>1회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>03/15 ~ 04/02</td>
              <td style={s.td} rowSpan={2}>02/20 ~ 03/13</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>502,380</td>
              <td style={s.td}>720,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>482,380</td>
              <td style={s.td}>700,000</td>
            </tr>
            <tr>
              <td style={s.td} rowSpan={2}>2회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>05/31 ~ 06/15</td>
              <td style={s.td} rowSpan={2}>05/09 ~ 05/29</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>502,380</td>
              <td style={s.td}>720,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>482,380</td>
              <td style={s.td}>700,000</td>
            </tr>
            <tr>
              <td style={s.td} rowSpan={2}>3회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>08/30 ~ 09/17</td>
              <td style={s.td} rowSpan={2}>08/07 ~ 08/28</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>502,380</td>
              <td style={s.td}>720,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>482,380</td>
              <td style={s.td}>700,000</td>
            </tr>
            <tr>
              <td style={s.td} rowSpan={2}>4회</td>
              <td style={s.td}>공조냉동기계</td>
              <td style={s.td}>25</td>
              <td style={s.td} rowSpan={2}>11/22 ~ 12/10</td>
              <td style={s.td} rowSpan={2}>10/31 ~ 11/20</td>
              <td style={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>502,380</td>
              <td style={s.td}>720,000</td>
            </tr>
            <tr>
              <td style={s.td}>에너지관리</td>
              <td style={s.td}>20</td>
              <td style={s.td}>217,620</td>
              <td style={s.td}>482,380</td>
              <td style={s.td}>700,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CTASection />
    </div>
  );
};

export default CourseAllPage;