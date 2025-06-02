import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const HotWaterMasterPage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '온수온돌', link: '/certificate/hotwater' },
    { name: '기능사', link: null }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>온수온돌 기능사 - 금성기술직업전문학교</title>
        <meta name="description" content="온수온돌 기능사 자격증 취득 안내. 시험일정, 응시자격, 시험과목 등 상세 정보 제공" />
      </Helmet>
      
      <SubpageHeader 
        title="온수온돌 기능사" 
        subtitle="난방 설비의 효율적인 시공 및 유지관리 능력을 갖춘 실무 인력 양성"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          {/* 상단 네비게이션 */}
          <S.CertificateNav>
            <div>
              <Link href="/certificate/heating">
                <S.CertificateNavItem>개요</S.CertificateNavItem>
              </Link>
            </div>
            <div>
              <Link href="/certificate/heating/master">
                <S.CertificateNavItem isActive={true}>기능사</S.CertificateNavItem>
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
            <S.CertificateTitle>온수온돌 기능사 (준비중)</S.CertificateTitle>
            <S.CertificateDescription>
              금성기술직업전문학교에서는 온수온돌 기능사 과정을 현재 개설 준비 중입니다. 난방 설비의 배관, 보일러 설치, 
              온수 분배기 설치 등 온수온돌 시스템의 시공 및 유지보수에 필요한 전문 기술을 교육하여 우리나라 전통 난방방식인 
              온돌과 현대적인 온수배관 기술을 결합한 난방시스템을 효율적으로 시공하고 관리할 수 있는 실무형 인재를 양성할 예정입니다.
            </S.CertificateDescription>
          </div>
          
          {/* 자격 개요 */}
          <S.InfoSection>
            <S.InfoTitle>자격 개요</S.InfoTitle>
            <S.FlexColumnDesktop>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3'
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>관련부처</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>국토교통부</div>
              </div>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3'
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>시행기관</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>한국산업인력공단</div>
              </div>
              <div style={{ 
                backgroundColor: '#f3f8ff', 
                borderRadius: '0.5rem', 
                padding: '1.25rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                marginBottom: '0.75rem',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #0056b3' 
              }}>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#1f2937', marginBottom: '0.75rem' }}>자격등급</div>
                <div style={{ color: '#4b5563', fontSize: '1rem' }}>기능사 (국가기술자격)</div>
              </div>
            </S.FlexColumnDesktop>
          </S.InfoSection>
          
          {/* 응시자격 */}
          <S.InfoSection>
            <S.InfoTitle>응시자격</S.InfoTitle>
            <S.JobDescription>
              <p>온수온돌 기능사는 응시자격에 제한이 없습니다. 누구나 시험에 응시할 수 있습니다.</p>
            </S.JobDescription>
          </S.InfoSection>
          
          {/* 시험과목 */}
          <S.InfoSection>
            <S.InfoTitle>시험과목</S.InfoTitle>
            <S.FlexColumnDesktop>
              <S.DetailItem>
                <S.DetailTitle>필기시험</S.DetailTitle>
                <S.DetailContent>
                  <p>- <strong>과목수</strong>: 4과목</p>
                  <p>- <strong>시험시간</strong>: 2시간</p>
                  <p>- <strong>문제수</strong>: 과목당 20문제(총 80문항, 객관식 4지선다)</p>
                  <p>- <strong>합격기준</strong>: 과목당 40점 이상, 전 과목 평균 60점 이상</p>
                  <p>- <strong>과목명</strong>:</p>
                  <ul>
                    <li>온수온돌일반</li>
                    <li>배관시공</li>
                    <li>보일러설비</li>
                    <li>관련 법규</li>
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
                    <li>온수온돌 배관 시공</li>
                    <li>보일러 설치 및 연결</li>
                    <li>온수분배기 설치</li>
                    <li>난방 회로 구성</li>
                    <li>시공 상태 점검 및 문제 해결</li>
                    <li>배관 보온 및 마감 작업</li>
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
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>02.10 ~ 02.13</td>
                  <td>03.15 ~ 04.02</td>
                  <td>04.11</td>
                </tr>
                <tr>
                  <td>2회</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>04.21 ~ 04.24</td>
                  <td>05.31 ~ 06.15</td>
                  <td>06.27</td>
                </tr>
                <tr>
                  <td>3회</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>07.28 ~ 07.31</td>
                  <td>08.30 ~ 09.17</td>
                  <td>09.26</td>
                </tr>
                <tr>
                  <td>4회</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>10.20 ~ 10.23</td>
                  <td>11.22 ~ 12.10</td>
                  <td>12.19</td>
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
              <S.CareerItem>온수온돌 시공 업체</S.CareerItem>
              <S.CareerItem>보일러 설치 및 서비스 업체</S.CareerItem>
              <S.CareerItem>배관공사 전문 업체</S.CareerItem>
              <S.CareerItem>건설회사 설비 부문</S.CareerItem>
              <S.CareerItem>난방 설비 유지보수 업체</S.CareerItem>
              <S.CareerItem>아파트 및 건물 관리소</S.CareerItem>
              <S.CareerItem>난방 자재 유통 및 판매업</S.CareerItem>
            </S.CareerList>
          </S.InfoSection>
          
          {/* 교육 과정 */}
          <S.InfoSection>
            <S.InfoTitle>금성기술직업전문학교 교육 과정</S.InfoTitle>
            <S.CourseInfo>
              <S.CourseItem>
                <S.CourseTitle>온수온돌 기능사 취득 과정</S.CourseTitle>
                <S.CourseDetails>
                  <p>- <strong>교육기간</strong>: 3개월</p>
                  <p>- <strong>교육인원</strong>: 15명</p>
                  <p>- <strong>교육내용</strong>:</p>
                  <ul>
                    <li>온수온돌의 원리 및 구조</li>
                    <li>배관 설계 및 시공 실습</li>
                    <li>보일러 설치 및 연결</li>
                    <li>온수분배기 설치 및 제어</li>
                    <li>배관 접합 및 보온 방법</li>
                    <li>난방 시스템 점검 및 유지보수</li>
                    <li>온돌 시공 관련 법규 및 안전관리</li>
                    <li>기출문제 분석 및 실전 모의고사</li>
                  </ul>
                </S.CourseDetails>
              </S.CourseItem>
            </S.CourseInfo>
          </S.InfoSection>
          
          {/* 추가 안내사항 */}
          <S.InfoSection>
            <S.InfoTitle>추가 안내사항</S.InfoTitle>
            <div style={{ 
              padding: '1.25rem', 
              backgroundColor: '#fff8e6', 
              borderRadius: '0.5rem', 
              border: '1px solid #ffeeba' 
            }}>
              <p style={{ marginBottom: '0.75rem', color: '#856404', fontWeight: '500' }}>
                <strong>산업기사 과정 개설 예정 안내</strong>
              </p>
              <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
                금성기술직업전문학교에서는 현재 온수온돌 기능사 과정만 운영 중이며, 향후 산업기사 과정 개설을 준비 중입니다. 
                향후 일정 및 세부 내용은 학교 공지사항을 통해 안내될 예정이니 관심 있는 분들은 주기적으로 확인바랍니다.
              </p>
            </div>
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

export default HotWaterMasterPage;