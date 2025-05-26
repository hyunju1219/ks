import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const MaintenanceIndustrialPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '설비보전', link: '/certificate/maintenance' },
    { name: '산업기사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>설비보전 산업기사 - 금성기술직업전문학교</title>
        <meta name="description" content="설비보전 산업기사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="설비보전 산업기사" 
        subtitle="생산 설비 및 산업 기계의 효율적인 유지보수와 관리 능력을 갖춘 중견 기술인력 양성"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link href="/certificate/maintenance">
                <S.CertificateNavItem>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/maintenance/industrial">
                <S.CertificateNavItem isActive={true}>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/maintenance/engineer">
                <S.CertificateNavItem>기사</S.CertificateNavItem>
              </Link>
            </div>
          </S.CertificateNav>
          
          {/* 상단 배너 이미지 */}
          <div style={{
            width: '100%',
            marginBottom: '2rem',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&h=350&auto=format&fit=crop" 
              alt="설비보전 산업기사"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px',
                objectFit: 'cover',
                display: 'block'
              }} 
            />
          </div>
          
          {/* 타이틀 및 설명 */}
          <div style={{ marginBottom: '2rem' }}>
            <S.CertificateTitle>설비보전 산업기사</S.CertificateTitle>
            <S.CertificateDescription>
              설비보전 산업기사는 생산현장의 기계, 전기, 계장, 배관 등의 각종 설비를 체계적으로 유지·보수·관리하는 
              중견 기술인력으로서의 역량을 검증하는 자격증입니다. 설비의 성능과 수명을 향상시키기 위한 점검, 진단, 
              보수, 개선 업무를 효율적으로 수행할 수 있는 종합적인 보전관리 능력을 갖춘 인재를 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>학력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련학과 전문대학 졸업자</p>
                  <p>- 관련학과 4년제 대학 2학년 이상 수료자</p>
                  <p>- 관련학과 기능대학 기능장과정 이수자</p>
                  <p>- 다른 법령에 의해 위와 동등 이상의 학력이 인정되는 자</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>경력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련 분야 실무 경력 2년 이상인 자</p>
                  <p>- 기능사 자격 취득 후 실무 경력 1년 이상인 자</p>
                  <p>- 학력 + 경력(실무 + 기술훈련기관 교육 훈련) 조건 만족자</p>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 시험과목 */}
          <S.InfoSection>
            <S.InfoTitle>시험과목</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>필기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>과목수</strong>: 4과목</p>
                  <p>- <strong>시험시간</strong>: 2시간 30분</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 80문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>기계설비보전</li>
                    <li>전기설비보전</li>
                    <li>설비진단</li>
                    <li>보전관리</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 3시간 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>기계 요소 및 설비 점검</li>
                    <li>전기·유압·공압 회로 분석</li>
                    <li>진동, 소음, 온도 등 상태 진단</li>
                    <li>설비 고장 분석 및 대응</li>
                    <li>예방 보전 및 보전 계획 수립</li>
                    <li>설비 이력 관리</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 시험일정 */}
          <S.InfoSection>
            <S.InfoTitle>2023년 시험일정</S.InfoTitle>
            <S.ExamScheduleTable>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>필기시험 원서접수</th>
                  <th>필기시험</th>
                  <th>필기 합격발표</th>
                  <th>실기시험 원서접수</th>
                  <th>실기시험</th>
                  <th>최종 합격발표</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1회</td>
                  <td>01.24 ~ 01.27</td>
                  <td>02.13 ~ 03.01</td>
                  <td>03.08</td>
                  <td>03.13 ~ 03.16</td>
                  <td>04.15 ~ 04.28</td>
                  <td>05.12</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>03.29 ~ 04.01</td>
                  <td>04.22 ~ 05.07</td>
                  <td>05.12</td>
                  <td>05.16 ~ 05.19</td>
                  <td>06.24 ~ 07.09</td>
                  <td>07.21</td>
                </tr>
                <tr>
                  <td>3회</td>
                  <td>08.28 ~ 08.31</td>
                  <td>09.23 ~ 10.08</td>
                  <td>10.13</td>
                  <td>10.16 ~ 10.19</td>
                  <td>11.11 ~ 11.24</td>
                  <td>12.08</td>
                </tr>
              </tbody>
            </S.ExamScheduleTable>
            <S.ExamInfoNote>
              * 상기 일정은 해당 연도의 공식 일정이며, 시행기관의 사정에 따라 변경될 수 있습니다. 정확한 일정은 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer">Q-Net</a> 홈페이지에서 확인하시기 바랍니다.
            </S.ExamInfoNote>
          </S.InfoSection>
          
          {/* 취업 분야 */}
          <S.InfoSection>
            <S.InfoTitle>취업 분야</S.InfoTitle>
            <S.CareerList>
              <S.CareerItem>제조업체 설비 유지보수 담당자</S.CareerItem>
              <S.CareerItem>생산설비 관리 및 정비</S.CareerItem>
              <S.CareerItem>플랜트 설비 점검 및 유지관리</S.CareerItem>
              <S.CareerItem>설비 진단 및 예방정비 전문가</S.CareerItem>
              <S.CareerItem>자동화 설비 유지보수</S.CareerItem>
              <S.CareerItem>공공기관 및 기업체 설비관리자</S.CareerItem>
              <S.CareerItem>설비 컨설팅 및 기술지원</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>설비보전 산업기사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 4개월</p>
                  <p>- <strong>교육인원</strong>: 15명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>기계설비보전 이론 및 실습</li>
                    <li>전기설비보전 이론 및 실습</li>
                    <li>유압·공압 시스템 분석</li>
                    <li>설비 정밀진단 기술</li>
                    <li>TPM 및 예방정비 실무</li>
                    <li>설비 이력관리 및 CMMS 활용</li>
                    <li>고장 분석 및 개선사례 연구</li>
                    <li>실전 문제풀이 및 실기 집중 훈련</li>
                  </ul>
                </S.CourseDetails>
              </S.CourseItem>
            </S.CourseInfo>
          </S.InfoSection>
          
          {/* 교육과정 링크 */}
          <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <Link href="/course">
              <S.CourseButton>관련 교육과정 보기</S.CourseButton>
            </Link>
          </div>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default MaintenanceIndustrialPage;