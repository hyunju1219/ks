import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const CertificatePage = () => {
  const breadcrumbs = [
    { name: '자격증 소개', link: '/certificate' },
    { name: '공조냉동기계', link: null }
  ];

  const certificates = [
    {
      id: 'refrigeration',
      title: '공조냉동기계',
      description: '공기조화, 냉난방, 급배수위생설비 및 냉동설비의 설계, 제작, 시공, 운전, 보수에 관한 기술자격',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      levels: ['기능사', '산업기사', '기사', '기술사'],
      careers: ['냉동설비 설계 및 시공업체', '빌딩관리', '공조설비 유지보수', '냉동창고 관리']
    },
    {
      id: 'energy',
      title: '에너지관리',
      description: '에너지의 합리적인 이용을 위하여 연소, 열 등 에너지 관리에 필요한 전문지식을 갖춘 기술자격',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      levels: ['기능사', '산업기사', '기사'],
      careers: ['에너지관리공단', '산업체 에너지관리자', '빌딩 에너지관리', '설비 운영']
    },
    {
      id: 'maintenance',
      title: '설비보전',
      description: '기계설비의 보전계획 수립, 예방 보전, 고장 진단 및 보수에 관한 전문지식을 갖춘 기술자격',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      levels: ['산업기사', '기사'],
      careers: ['생산설비 유지보수', '프랜트 정비', '설비 안전관리', '산업설비 진단']
    },
    {
      id: 'heating',
      title: '온수온돌',
      description: '건축물 난방 및 온수공급 설비의 설계, 시공, 감리 및 유지관리에 관한 기술자격',
      image: 'https://images.unsplash.com/photo-1581092334247-47406fb9ec46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      levels: ['기능사'],
      careers: ['건축설비 시공업체', '난방설비 설계', '온수시스템 유지보수', '주거시설 난방설비']
    }
  ];

  // URL에서 자격증 ID를 추출하거나 기본값을 설정
  const certificateId = 'refrigeration'; // 실제로는 URL 파라미터를 사용
  const selectedCertificate = certificates.find(cert => cert.id === certificateId) || certificates[0];

  return (
    <S.PageContainer>
      <Helmet>
        <title>자격증 소개 - 금성기술직업전문학교</title>
        <meta name="description" content="공조냉동기계, 에너지관리, 설비보전, 온수온돌 등 다양한 국가기술자격증 취득을 위한 교육과정을 제공합니다." />
      </Helmet>

      <SubpageHeader
        title="자격증 소개"
        subtitle="금성기술직업전문학교에서 취득 가능한 국가기술자격증 정보"
        breadcrumbs={breadcrumbs}
      />

      <S.ContentSection>
        <S.SectionInner>
          <S.CertificateNav>
            {certificates.map(cert => (
              <Link key={cert.id} href={`/certificate/${cert.id}`}>
                <S.CertificateNavItem isActive={cert.id === certificateId}>
                  {cert.title}
                </S.CertificateNavItem>
              </Link>
            ))}
          </S.CertificateNav>

          <S.CertificateContent>
            <S.CertificateImage src={selectedCertificate.image} alt={selectedCertificate.title} />

            <S.CertificateInfo>
              <S.CertificateTitle>{selectedCertificate.title} 자격증</S.CertificateTitle>
              <S.CertificateDescription>{selectedCertificate.description}</S.CertificateDescription>

              <S.InfoSection>
                <S.InfoTitle>취득 가능 등급</S.InfoTitle>
                <S.LevelList>
                  {selectedCertificate.levels.map((level, index) => (
                    <S.LevelItem key={index}>{level}</S.LevelItem>
                  ))}
                </S.LevelList>
              </S.InfoSection>

              <S.InfoSection>
                <S.InfoTitle>취업 분야</S.InfoTitle>
                <S.CareerList>
                  {selectedCertificate.careers.map((career, index) => (
                    <S.CareerItem key={index}>{career}</S.CareerItem>
                  ))}
                </S.CareerList>
              </S.InfoSection>

              <S.InfoSection>
                <S.InfoTitle>자격증 취득 과정</S.InfoTitle>
                <S.StepList>
                  <S.StepItem>
                    <S.StepNumber>1</S.StepNumber>
                    <S.StepContent>
                      <S.StepTitle>기본 이론 교육</S.StepTitle>
                      <S.StepText>자격증 취득에 필요한 기초 이론 학습</S.StepText>
                    </S.StepContent>
                  </S.StepItem>

                  <S.StepItem>
                    <S.StepNumber>2</S.StepNumber>
                    <S.StepContent>
                      <S.StepTitle>실습 교육</S.StepTitle>
                      <S.StepText>최신 장비를 활용한 실무 중심 실습</S.StepText>
                    </S.StepContent>
                  </S.StepItem>

                  <S.StepItem>
                    <S.StepNumber>3</S.StepNumber>
                    <S.StepContent>
                      <S.StepTitle>모의고사 및 문제풀이</S.StepTitle>
                      <S.StepText>기출문제 분석 및 예상문제 풀이</S.StepText>
                    </S.StepContent>
                  </S.StepItem>

                  <S.StepItem>
                    <S.StepNumber>4</S.StepNumber>
                    <S.StepContent>
                      <S.StepTitle>자격증 시험 응시</S.StepTitle>
                      <S.StepText>국가기술자격 시험 일정에 맞춰 응시</S.StepText>
                    </S.StepContent>
                  </S.StepItem>
                </S.StepList>
              </S.InfoSection>

              <Link href="/course">
                <S.CourseButton>관련 교육과정 보기</S.CourseButton>
              </Link>
            </S.CertificateInfo>
          </S.CertificateContent>
        </S.SectionInner>
      </S.ContentSection>

      <CTASection />
    </S.PageContainer>
  );
};

export default CertificatePage;
