import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const MaintenanceEngineerPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '설비보전', link: '/certificate/maintenance' },
    { name: '기사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>설비보전 기사 - 금성기술직업전문학교</title>
        <meta name="description" content="설비보전 기사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="설비보전 기사" 
        subtitle="생산 설비 및 산업 기계의 종합적인 진단, 관리, 개선 분야의 전문 기술인력 양성"
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
                <S.CertificateNavItem>산업기사</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/maintenance/engineer">
                <S.CertificateNavItem isActive={true}>기사</S.CertificateNavItem>
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
           
          </div>
          
          {/* 타이틀 및 설명 */}
          <div style={{ marginBottom: '2rem' }}>
            <S.CertificateTitle>설비보전 기사</S.CertificateTitle>
            <S.CertificateDescription>
              설비보전 기사는 생산설비의 효율성과 신뢰성을 극대화하기 위한 종합적인 진단, 관리, 개선 업무를 수행할 
              수 있는 고급 기술인력을 검증하는 자격증입니다. 기계, 전기, 전자, 유공압 등 다양한 설비 시스템에 대한 
              전문지식과 최적의 설비보전 계획 수립 및 실행 능력을 갖춘 전문 인력을 양성합니다.
            </S.CertificateDescription>
          </div>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>학력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련학과 4년제 대학 졸업자</p>
                  <p>- 관련학과 전문대학 졸업 후 실무경력 1년 이상인 자</p>
                  <p>- 관련학과 기능대학 전문학사 이상의 학위 취득자</p>
                  <p>- 다른 법령에 의해 위와 동등 이상의 학력이 인정되는 자</p>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>경력</S.DetailTitle>
                <S.DetailContent>
                  <p>- 관련 분야 실무 경력 4년 이상인 자</p>
                  <p>- 산업기사 자격 취득 후 실무 경력 1년 이상인 자</p>
                  <p>- 기능사 자격 취득 후 실무 경력 3년 이상인 자</p>
                  <p>- 학력 + 경력(실무 + 교육훈련) 조건 만족자</p>
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
                  <p>- <strong>과목수</strong>: 5과목</p>
                  <p>- <strong>시험시간</strong>: 2시간 30분</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 100문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>기계설비보전</li>
                    <li>전기설비보전</li>
                    <li>설비진단</li>
                    <li>설비관리</li>
                    <li>신뢰성공학</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
              
              <S.DetailItem>
                <S.DetailTitle>실기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>검정방법</strong>: 작업형</p>
                  <p>- <strong>시험시간</strong>: 4시간 내외</p>
                  <p>- <strong>합격기준</strong>: 60점 이상(100점 만점)</p>
                  <p>- <strong>주요 평가내용</strong>:</p>
                  <ul>
                    <li>종합적인 설비진단 및 분석</li>
                    <li>설비 신뢰성 평가 및 개선</li>
                    <li>TPM 및 예방 보전 프로그램 구축</li>
                    <li>설비보전 계획 수립 및 평가</li>
                    <li>설비 성능 최적화 및 분석</li>
                    <li>고장 분석 및 고장예지 기법</li>
                  </ul>
                </S.DetailContent>
              </S.DetailItem>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 시험일정 */}
          <S.InfoSection>
            <S.InfoTitle>2025년 시험일정</S.InfoTitle>
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
                  <td>01.13 ~ 01.16</td>
                  <td>02.07 ~ 03.04</td>
                  <td>03.12</td>
                  <td>03.24 ~ 03.27</td>
                  <td>04.19 ~ 05.09</td>
                  <td>06.13</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>04.14 ~ 04.17</td>
                  <td>05.10 ~ 05.30</td>
                  <td>06.11</td>
                  <td>06.23 ~ 06.26</td>
                  <td>07.19 ~ 08.06</td>
                  <td>09.12</td>
                </tr>
                <tr>
                  <td>3회</td>
                  <td>07.21 ~ 07.24</td>
                  <td>08.09 ~ 09.01</td>
                  <td>09.10</td>
                  <td>09.22 ~ 09.25</td>
                  <td>11.01 ~ 11.21</td>
                  <td>12.24</td>
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
              <S.CareerItem>설비보전 관리자 및 책임자</S.CareerItem>
              <S.CareerItem>설비 성능 및 신뢰성 엔지니어</S.CareerItem>
              <S.CareerItem>설비진단 및 예지보전 전문가</S.CareerItem>
              <S.CareerItem>설비 컨설팅 및 기술 지원</S.CareerItem>
              <S.CareerItem>TPM 및 설비개선 프로젝트 리더</S.CareerItem>
              <S.CareerItem>설비 관련 연구개발</S.CareerItem>
              <S.CareerItem>설비 자산 관리 전문가</S.CareerItem>
              <S.CareerItem>설비 정비 및 유지보수 부서 관리자</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>설비보전 기사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 6개월</p>
                  <p>- <strong>교육인원</strong>: 12명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>고급 설비진단 기법</li>
                    <li>신뢰성 공학 및 RCM</li>
                    <li>TPM 및 자주보전 추진 방법</li>
                    <li>설비 수명주기 관리(LCM)</li>
                    <li>설비보전 전략 수립 및 실행</li>
                    <li>예지보전 및 고장 분석</li>
                    <li>설비 데이터 분석 및 활용</li>
                    <li>설비 개선 프로젝트 관리</li>
                    <li>실전 문제풀이 및 실기 심화 훈련</li>
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

export default MaintenanceEngineerPage;