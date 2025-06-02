import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const JobCenterPage = () => {
  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '지원시스템', link: null }
  ];

  const supportSystems = [
    {
      id: 1,
      title: '1:1 취업 상담',
      description: '개인별 역량과 적성에 맞는 맞춤형 취업 상담을 제공합니다. 전문 취업 상담사가 지원자의 이력과 목표를 분석하여 최적의 취업 경로를 제시합니다.',
      icon: 'https://cdn-icons-png.flaticon.com/512/7319/7319863.png'
    },
    {
      id: 2,
      title: '이력서 및 자기소개서 작성 지원',
      description: '효과적인 이력서와 자기소개서 작성 방법을 지도하고, 개인별 첨삭 지도를 통해 서류 합격률을 높입니다.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135692.png'
    },
    {
      id: 3,
      title: '취업 추천 및 알선',
      description: '산학협력 기업 및 협약 기업과의 네트워크를 통해 졸업생 취업을 적극 지원합니다.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006056.png'
    },
    {
      id: 4,
      title: '졸업생 사후 관리',
      description: '취업 후에도 지속적인 관리와 지원을 통해 직장 적응과 경력 개발을 돕습니다.',
      icon: 'https://cdn-icons-png.flaticon.com/512/8696/8696302.png'
    }
  ];

  const jobOpportunities = [
    {
      id: 1,
      company: '한국냉동공조',
      position: '냉동공조설비 관리자',
      location: '서울 강남구',
      requirements: '공조냉동기계 산업기사 이상',
      deadline: '2023.07.30',
      isNew: true
    },
    {
      id: 2,
      company: '대림산업',
      position: '설비보전 엔지니어',
      location: '경기 수원시',
      requirements: '설비보전 기사 자격증 소지자',
      deadline: '2023.07.25',
      isNew: true
    },
    {
      id: 3,
      company: '한화에너지',
      position: '에너지관리 기술자',
      location: '인천 송도',
      requirements: '에너지관리 산업기사 이상',
      deadline: '2023.07.20',
      isNew: false
    },
    {
      id: 4,
      company: '삼성엔지니어링',
      position: '공조설비 유지보수',
      location: '경기 화성시',
      requirements: '공조냉동기계 기능사 이상',
      deadline: '2023.07.15',
      isNew: false
    },
    {
      id: 5,
      company: 'LG전자',
      position: '냉동시스템 엔지니어',
      location: '서울 금천구',
      requirements: '공조냉동기계 기사 자격증 소지자',
      deadline: '2023.07.10',
      isNew: false
    }
  ];

  const successCases = [
    {
      id: 1,
      name: '김OO',
      course: '공조냉동기계 과정',
      year: '2022년 졸업',
      company: '삼성물산',
      position: '냉동설비 관리자',
      comment: '금성기술직업전문학교에서 배운 실무 중심의 교육이 현장에서 큰 도움이 되었습니다. 특히 취업센터의 지원으로 원하던 기업에 성공적으로 취업할 수 있었습니다.'
    },
    {
      id: 2,
      name: '이OO',
      course: '에너지관리 과정',
      year: '2022년 졸업',
      company: '한국에너지공단',
      position: '에너지 관리자',
      comment: '전공이 달랐지만 체계적인 교육과 자격증 취득 과정을 통해 새로운 분야로 성공적으로 전환할 수 있었습니다. 취업 상담과 이력서 작성 지원이 특히 도움이 되었습니다.'
    },
    {
      id: 3,
      name: '박OO',
      course: '설비보전 과정',
      year: '2021년 졸업',
      company: '현대건설',
      position: '설비 엔지니어',
      comment: '현장에서 즉시 활용할 수 있는 실무 능력을 배웠고, 모의 면접 훈련이 실제 면접에서 자신감을 갖는 데 큰 도움이 되었습니다. 지금은 팀장으로 승진하여 근무하고 있습니다.'
    }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>취업센터 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 체계적인 취업 지원 시스템과 취업 정보를 확인하세요. 1:1 맞춤형 취업 상담부터 취업 알선까지 다양한 지원을 제공합니다." />
      </Helmet>
      
      <SubpageHeader 
        title="취업센터" 
        subtitle="체계적인 취업 지원 시스템으로 성공적인 커리어의 시작을 도와드립니다"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.SectionTitle>취업 지원 시스템</S.SectionTitle>
          <S.SectionSubtitle>자격증 취득부터 취업까지 단계별 맞춤형 취업 지원 서비스를 제공합니다</S.SectionSubtitle>
          
          <S.SupportGrid>
            {supportSystems.map(system => (
              <S.SupportCard key={system.id}>
                <S.IconContainer>
                  <S.SupportIcon src={system.icon} alt={system.title} />
                </S.IconContainer>
                <S.SupportTitle>{system.title}</S.SupportTitle>
                <S.SupportDescription>{system.description}</S.SupportDescription>
              </S.SupportCard>
            ))}
          </S.SupportGrid>
        </S.SectionInner>
      </S.ContentSection>
      
      <S.StatsSection>
        <S.SectionInner>
          <S.StatsTitle>취업 현황</S.StatsTitle>
          <S.StatsSubtitle>금성기술직업전문학교의 높은 취업률, 여러분의 성공적인 커리어를 약속합니다</S.StatsSubtitle>
          
          <S.StatsContainer>
            <S.StatItem>
              <S.StatValue>95%</S.StatValue>
              <S.StatLabel>취업률</S.StatLabel>
            </S.StatItem>
            
            <S.StatItem>
              <S.StatValue>500+</S.StatValue>
              <S.StatLabel>협약 기업</S.StatLabel>
            </S.StatItem>
            
            <S.StatItem>
              <S.StatValue>85%</S.StatValue>
              <S.StatLabel>전공 분야 취업</S.StatLabel>
            </S.StatItem>
            
            <S.StatItem>
              <S.StatValue>92%</S.StatValue>
              <S.StatLabel>취업 만족도</S.StatLabel>
            </S.StatItem>
          </S.StatsContainer>
        </S.SectionInner>
      </S.StatsSection>
      
      <S.JobInfoSection>
        <S.SectionInner>
          <S.SectionTitle>취업 정보</S.SectionTitle>
          <S.SectionSubtitle>금성기술직업전문학교와 협약을 맺은 기업의 채용 정보를 확인하세요</S.SectionSubtitle>
          
          <S.JobTable>
            <thead>
              <tr>
                <S.TableHeader>기업명</S.TableHeader>
                <S.TableHeader>모집분야</S.TableHeader>
                <S.TableHeader className="hidden md:table-cell">근무지</S.TableHeader>
                <S.TableHeader className="hidden md:table-cell">자격요건</S.TableHeader>
                <S.TableHeader className="hidden md:table-cell">마감일</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {jobOpportunities.map(job => (
                <S.TableRow key={job.id}>
                  <S.TableCell>
                    {job.company}
                    {job.isNew && <S.NewBadge>New</S.NewBadge>}
                  </S.TableCell>
                  <S.TableCell>
                    <Link href={`/job-center/detail/${job.id}`}>
                      <S.JobLink>{job.position}</S.JobLink>
                    </Link>
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell">{job.location}</S.TableCell>
                  <S.TableCell className="hidden md:table-cell">{job.requirements}</S.TableCell>
                  <S.TableCell className="hidden md:table-cell">{job.deadline}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.JobTable>
          
          <S.MobileJobCards>
            {jobOpportunities.map(job => (
              <S.MobileJobCard key={job.id}>
                <S.MobileJobHeader>
                  <S.MobileJobCompany>{job.company}</S.MobileJobCompany>
                  {job.isNew && <S.NewBadge>New</S.NewBadge>}
                </S.MobileJobHeader>
                <Link href={`/job-center/detail/${job.id}`}>
                  <S.MobileJobPosition>{job.position}</S.MobileJobPosition>
                </Link>
                <S.MobileJobDetail>
                  <S.MobileJobLabel>근무지</S.MobileJobLabel>
                  <S.MobileJobValue>{job.location}</S.MobileJobValue>
                </S.MobileJobDetail>
                <S.MobileJobDetail>
                  <S.MobileJobLabel>자격요건</S.MobileJobLabel>
                  <S.MobileJobValue>{job.requirements}</S.MobileJobValue>
                </S.MobileJobDetail>
                <S.MobileJobDetail>
                  <S.MobileJobLabel>마감일</S.MobileJobLabel>
                  <S.MobileJobValue>{job.deadline}</S.MobileJobValue>
                </S.MobileJobDetail>
              </S.MobileJobCard>
            ))}
          </S.MobileJobCards>
          
          <S.MoreButtonContainer>
            <Link href="/job-center/info">
              <S.MoreButton>채용 정보 더보기</S.MoreButton>
            </Link>
          </S.MoreButtonContainer>
        </S.SectionInner>
      </S.JobInfoSection>
      
      <S.SuccessCaseSection>
        <S.SectionInner>
          <S.SectionTitle>취업 성공 사례</S.SectionTitle>
          <S.SectionSubtitle>금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다</S.SectionSubtitle>
          
          <S.SuccessCaseGrid>
            {successCases.map(success => (
              <S.SuccessCard key={success.id}>
                <S.SuccessHeader>
                  <S.SuccessInfo>
                    <S.SuccessName>{success.name}</S.SuccessName>
                    <S.SuccessCourse>{success.course} | {success.year}</S.SuccessCourse>
                  </S.SuccessInfo>
                </S.SuccessHeader>
                <S.SuccessCompany>
                  <S.SuccessCompanyName>{success.company}</S.SuccessCompanyName>
                  <S.SuccessPosition>{success.position}</S.SuccessPosition>
                </S.SuccessCompany>
                <S.SuccessComment>{success.comment}</S.SuccessComment>
              </S.SuccessCard>
            ))}
          </S.SuccessCaseGrid>
        </S.SectionInner>
      </S.SuccessCaseSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default JobCenterPage;
