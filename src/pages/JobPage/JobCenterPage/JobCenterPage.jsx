import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SubpageHeader from '../../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../../components/CTASection/CTASection';
import * as S from './style';
import { getJobPosts } from '@/firebase/jobInfoService';
import { getEmpPosts } from '@/firebase/jobEmpService';

const JobCenterPage = () => {
  const breadcrumbs = [
    { name: '취업센터', link: '/job-center' },
    { name: '지원시스템', link: null }
  ];

  const [jobOpportunities, setJobOpportunities] = useState([]);
  const [successCases, setSuccessCases] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      setJobOpportunities(await getJobPosts());
      setSuccessCases(await getEmpPosts());
    }
    fetchPostData();
  }, [])

  console.log(successCases);

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
                <S.TableHeader>번호</S.TableHeader>
                <S.TableHeader>기업명</S.TableHeader>
                <S.TableHeader>마감일</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {jobOpportunities.map((job,idx) => (
                <S.TableRow key={job.id}>
                  <S.TableCell>
                    {idx + 1}
                    {job.isNew && <S.NewBadge>New</S.NewBadge>}
                  </S.TableCell>
                  <S.TableCell>
                    <Link to={`/job-center/detail/${job.id}`}>
                      <S.JobLink>{job.companyName}</S.JobLink>
                    </Link>
                  </S.TableCell>
                  <S.TableCell className="hidden md:table-cell">{job.createdAt?.toDate().toLocaleDateString('ko-KR')}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.JobTable>

          <S.MobileJobCards>
            {jobOpportunities?.map(job => (
              <S.MobileJobCard key={job.id}>
                <S.MobileJobHeader>
                  <S.MobileJobCompany>{job?.companyName}</S.MobileJobCompany>
                  {job.isNew && <S.NewBadge>New</S.NewBadge>}
                </S.MobileJobHeader>
                <Link to={`/job-center/detail/${job.id}`}>
                  <S.MobileJobPosition>{job.position}</S.MobileJobPosition>
                </Link>
                <S.MobileJobDetail>
                  <S.MobileJobLabel>마감일</S.MobileJobLabel>
                  <S.MobileJobValue>{job?.createdAt?.toDate().toLocaleDateString('ko-KR')}</S.MobileJobValue>
                </S.MobileJobDetail>
              </S.MobileJobCard>
            ))}
          </S.MobileJobCards>

          <S.MoreButtonContainer>
            <Link to="/job-center/info">
              <S.MoreButton>채용 정보 더보기</S.MoreButton>
            </Link>
          </S.MoreButtonContainer>
        </S.SectionInner>
      </S.JobInfoSection>

      {/* <S.SuccessCaseSection>
        <S.SectionInner>
          <S.SectionTitle>취업 성공 사례</S.SectionTitle>
          <S.SectionSubtitle>금성기술직업전문학교 졸업생들의 성공적인 취업 사례를 소개합니다</S.SectionSubtitle>

          <S.SuccessCaseGrid>
            {successCases.map(success => (
              <S.SuccessCard key={success.id}>
                <S.SuccessHeader>
                  <S.SuccessInfo>
                    <S.SuccessName>{success.title}</S.SuccessName>
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
      </S.SuccessCaseSection> */}

      <CTASection />
    </S.PageContainer>
  );
};

export default JobCenterPage;
