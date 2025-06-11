/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section css={s.SectionContainer}>
      <div css={s.SectionInner}>
        <h2 css={s.SectionTitle}>금성기술직업전문학교와 함께<br />전문가로 성장하세요</h2>
        <p css={s.SectionSubtitle}>자격증 취득부터 취업까지, 당신의 성공적인 커리어를 지원합니다</p>
        
        <div css={s.ButtonContainer}>
          <Link to="/courses/all">
            <span css={s.PrimaryButton}>교육과정 안내 받기</span>
          </Link>
          <Link to="/contact">
            <span css={s.SecondaryButton}>상담 신청하기</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
