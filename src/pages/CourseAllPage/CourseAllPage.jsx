/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';

const CourseAllPage = () => {
  return (
    <div css={s.pageContainer}>
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

      <div css={s.innerWrapper}>
        <h2 css={s.mainTitle}>2025년도 실기 작업형 과정 한눈에 보기</h2>

        {/* ○ 기능장 */}
        <div css={s.InfoSection}>
        <h3 css={s.categoryTitle}>기능장</h3>
          <div css={s.tableWrapper}>
        <table css={s.table}>
          <thead>
            <tr>
              <th css={s.th}>회별</th>
              <th css={s.th}>훈련직종</th>
              <th css={s.th}>모집인원</th>
              <th css={s.th}>실기시험일정</th>
              <th css={s.th}>실기훈련기간</th>
              <th css={s.th}>훈련시간</th>
              <th css={s.th}>내일배움 지원금</th>
              <th css={s.th}>자비 부담금</th>
              <th css={s.th}>훈련비(교육비)</th>
              <th css={s.th}>상담하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td css={s.td}>77회</td>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>03/15 ~ 04/02</td>
              <td css={s.td}>-</td>
              <td css={s.td}>-</td>
              <td css={s.td}>446,400</td>
              <td css={s.td}>653,600</td>
              <td css={s.td}>1,100,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>78회</td>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>08/30 ~ 09/17</td>
              <td css={s.td}>07/20 ~ 08/30</td>
              <td css={s.td}>14:00 ~ 19:00 (60시간)</td>
              <td css={s.td}>446,400</td>
              <td css={s.td}>653,600</td>
              <td css={s.td}>1,100,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

        {/* ○ 산업기사 */}
        <div css={s.InfoSection}>
        <h3 css={s.categoryTitle}>산업기사</h3>
        <div css={s.tableWrapper}>
        <table css={s.table}>
          <thead>
            <tr>
              <th css={s.th}>회별</th>
              <th css={s.th}>훈련직종</th>
              <th css={s.th}>모집인원</th>
              <th css={s.th}>실기시험일정</th>
              <th css={s.th}>실기훈련기간</th>
              <th css={s.th}>훈련시간</th>
              <th css={s.th}>내일배움 지원금</th>
              <th css={s.th}>자비 부담금</th>
              <th css={s.th}>훈련비(교육비)</th>
              <th css={s.th}>상담하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td css={s.td} rowSpan={2}>1회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>04/19 ~ 05/09</td>
              <td css={s.td} rowSpan={2}>03/28 ~ 04/17</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>552,380</td>
              <td css={s.td}>770,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>682,380</td>
              <td css={s.td}>900,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td} rowSpan={2}>2회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>07/19 ~ 08/06</td>
              <td css={s.td} rowSpan={2}>06/27 ~ 07/17</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>552,380</td>
              <td css={s.td}>770,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>682,380</td>
              <td css={s.td}>900,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td} rowSpan={2}>3회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>11/01 ~ 11/21</td>
              <td css={s.td} rowSpan={2}>10/13 ~ 10/31</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>552,380</td>
              <td css={s.td}>770,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>682,380</td>
              <td css={s.td}>900,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        {/* ○ 기능사 */}
            <div css={s.InfoSection}>
        <h3 css={s.categoryTitle}>기능사</h3>
        <div css={s.tableWrapper}>
        <table css={s.table}>
          <thead>
            <tr>
              <th css={s.th}>회별</th>
              <th css={s.th}>훈련직종</th>
              <th css={s.th}>모집인원</th>
              <th css={s.th}>실기시험일정</th>
              <th css={s.th}>실기훈련기간</th>
              <th css={s.th}>훈련시간</th>
              <th css={s.th}>내일배움 지원금</th>
              <th css={s.th}>자비 부담금</th>
              <th css={s.th}>훈련비(교육비)</th>
              <th css={s.th}>상담하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td css={s.td} rowSpan={2}>1회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>03/15 ~ 04/02</td>
              <td css={s.td} rowSpan={2}>02/20 ~ 03/13</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>502,380</td>
              <td css={s.td}>720,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>482,380</td>
              <td css={s.td}>700,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td} rowSpan={2}>2회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>05/31 ~ 06/15</td>
              <td css={s.td} rowSpan={2}>05/09 ~ 05/29</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>502,380</td>
              <td css={s.td}>720,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>482,380</td>
              <td css={s.td}>700,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td} rowSpan={2}>3회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>08/30 ~ 09/17</td>
              <td css={s.td} rowSpan={2}>08/07 ~ 08/28</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>502,380</td>
              <td css={s.td}>720,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>482,380</td>
              <td css={s.td}>700,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td} rowSpan={2}>4회</td>
              <td css={s.td}>공조냉동기계</td>
              <td css={s.td}>25</td>
              <td css={s.td} rowSpan={2}>11/22 ~ 12/10</td>
              <td css={s.td} rowSpan={2}>10/31 ~ 11/20</td>
              <td css={s.td} rowSpan={2}>19:00 ~ 22:00 (45시간)</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>502,380</td>
              <td css={s.td}>720,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
            <tr>
              <td css={s.td}>에너지관리</td>
              <td css={s.td}>20</td>
              <td css={s.td}>217,620</td>
              <td css={s.td}>482,380</td>
              <td css={s.td}>700,000</td>
              <td css={s.td}><button css={s.button}>상담하기</button></td>
            </tr>
          </tbody>
        </table>
         </div>
         </div>
      </div>

      <CTASection />
    </div>
  );
};

export default CourseAllPage;