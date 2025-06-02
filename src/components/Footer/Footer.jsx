/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'wouter';
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
              <li><Link href="/about"><span css={s.FooterLink}>학교 소개</span></Link></li>
              <li><Link href="/course"><span css={s.FooterLink}>교육 과정</span></Link></li>
              <li><Link href="/certificate"><span css={s.FooterLink}>자격증 정보</span></Link></li>
              <li><Link href="/job-center"><span css={s.FooterLink}>취업 센터</span></Link></li>
            </ul>
          </div>
          
          <div css={s.FooterColumn}>
            <h4 css={s.FooterHeading}>고객 지원</h4>
            <ul css={s.FooterLinkList}>
              <li><Link href="/notice"><span css={s.FooterLink}>공지사항</span></Link></li>
              <li><Link href="/contact"><span css={s.FooterLink}>문의하기</span></Link></li>
              <li><Link href="/location"><span css={s.FooterLink}>오시는 길</span></Link></li>
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
