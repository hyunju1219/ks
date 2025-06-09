/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';

import { Facebook, Globe, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer css={s.FooterContainer}>
      <div css={s.FooterContent}>
        <div css={s.FooterGrid}>
          <div css={s.FooterColumn}>
            <h3 css={s.FooterTitle}>금성기술직업전문학교</h3>
            <p css={s.FooterDescription}>전문적인 기술 교육으로 미래를 준비하는 교육기관</p>
          </div>
          
          <div css={s.FooterColumn}>
            <h4 css={s.FooterHeading}>바로가기</h4>
            <ul css={s.FooterLinkList}>
              <li><Link to="/about"><span css={s.FooterLink}>학교소개</span></Link></li>
              <li><Link to="/courses/open"><span css={s.FooterLink}>모집교육</span></Link></li>
              <li><Link to="/certificate/refrigeration"><span css={s.FooterLink}>과정소개</span></Link></li>
              <li><Link to="/job-center"><span css={s.FooterLink}>취업센터</span></Link></li>
            </ul>
          </div>
          
          <div css={s.FooterColumn}>
            <h4 css={s.FooterHeading}>고객 지원</h4>
            <ul css={s.FooterLinkList}>
              <li><Link to="/notice"><span css={s.FooterLink}>공지사항</span></Link></li>
              <li><Link to="/contact"><span css={s.FooterLink}>문의하기</span></Link></li>
              <li><Link to="/about/location"><span css={s.FooterLink}>오시는 길</span></Link></li>
            </ul>
          </div>
          
          <div css={s.FooterColumn}>
            <h4 css={s.FooterHeading}>연락처</h4>
            <p css={s.FooterText}>부산광역시 부산진구 연수로 15-1</p>
            <p css={s.FooterText}>전화</p>
            <p css={s.FooterText}>051-806-2200</p>
            <p css={s.FooterText}>051-864-0535</p>
            <p css={s.FooterText}>이메일: kstg35@naver.com</p>
          </div>
        </div>
        
        <div css={s.FooterCopyright}>
          <p>&copy; {new Date().getFullYear()} 금성기술직업전문학교. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
