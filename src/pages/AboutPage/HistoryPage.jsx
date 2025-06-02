import React from 'react';
import { Helmet } from 'react-helmet';
import SubpageHeader from '../../components/SubpageHeader/SubpageHeader';
import CTASection from '../../components/CTASection/CTASection';
import * as S from './style';

const HistoryPage = () => {
  const breadcrumbs = [
    { name: '학교 소개', link: '/about' },
    { name: '교육 연혁', link: null }
  ];

  const historyData = [
    { 
      year: '2025', 
      events: ['상담인력(직업상담사) 입사'],
      isHighlight: true
    },
    { 
      year: '2024', 
      events: [
        '제 3대 송성암 학교장 취임',
        '훈련시설 3,4층 삭제 및 명칭 변경',
        '실습실 501호 -> 2개의 호실(교무실·사무실, 502호 강의실) 변경',
        '수질환경관리 직종삭제'
      ],
      isHighlight: true
    },
    { 
      year: '2023', 
      events: [
        '세분류 추가(보일러설치·정비 15-05-02-04)',
        '훈련시설 변경(실습실3, 공구재료실2, 하늘휴게실(명칭변경), 급배수제어설비실(삭제)'
      ]
    },
    { 
      year: '2021', 
      events: ['훈련직종 삭제(대기관련)']
    },
    { 
      year: '2020', 
      events: [
        '훈련직종 삭제(산업안전관리)',
        '훈련직종 삭제(에너지관리)',
        '훈련시설 변경(서류보관실1,2, 삭제, 급배수제어 설비실 701호 등록)'
      ]
    },
    { 
      year: '2019', 
      events: [
        '훈련직종 추가 및 삭제',
        '상담인력 변경'
      ]
    },
    { 
      year: '2016', 
      events: [
        '훈련시설 변경(강의실 -> 실습실 등 용도변경)',
        '훈련직종 추가',
        'NCS코드로 훈련직종 변경'
      ]
    },
    { 
      year: '2008', 
      events: ['직업능력 개발훈련시설 재지정 (부산청 제 06호 - 11호)']
    },
    { 
      year: '2006', 
      events: [
        '학원위치변경',
        '학원명칭변경'
      ]
    },
    { 
      year: '2005', 
      events: ['직업능력개발훈련시설지정']
    },
    { 
      year: '2000', 
      events: ['직업능력개발훈련과정지정']
    },
    { 
      year: '1999', 
      events: ['99년 제 2차 실업자 재취직 훈련계획 승인(부산지방노동청장)']
    },
    { 
      year: '1998', 
      events: [
        '재취업 교육기관 승인',
        '위치변경(사체 81700-461호)'
      ]
    },
    { 
      year: '1996', 
      events: ['고용촉진 훈련 실시기관 지정(96-15호)']
    },
    { 
      year: '1992', 
      events: ['생활 보호대상 훈련길시기관 지정(92-7호)']
    },
    { 
      year: '1991', 
      events: ['생활 보호대상 훈련실시기관 지정(24호)']
    },
    { 
      year: '1989', 
      events: ['생활 보호대상 훈련실시기관 지정(89-8호)']
    },
    { 
      year: '1986', 
      events: ['생활 보호대상 훈련실시기관 지정(6호)']
    },
    { 
      year: '1984', 
      events: ['시설변경(학무 1071.7.3)']
    },
    { 
      year: '1983', 
      events: ['지위승계(학무 1071.1 ~ 238)']
    },
    { 
      year: '1982', 
      events: ['소칙변경(학무 1071 ~ 1320) 명칭변경']
    },
    { 
      year: '1974', 
      events: ['직위승계(학무 1071 ~ 2939)']
    },
    { 
      year: '1971', 
      events: ['소칙변경(교문1071.3 ~ 1540)']
    },
    { 
      year: '1968', 
      events: ['위치변경(교문 1073.3~ 746)']
    },
    { 
      year: '1967', 
      events: ['금성 냉동 기술학원 설립인가'],
      isHighlight: true,
      isFoundation: true
    }
  ];

  return (
    <S.PageContainer>
      <Helmet>
        <title>교육 연혁 - 금성기술직업전문학교</title>
        <meta name="description" content="금성기술직업전문학교의 설립 이래 주요 연혁과 발전 과정을 소개합니다. 1967년 설립 이후 현재까지의 역사를 확인하세요." />
      </Helmet>
      
      <SubpageHeader 
        title="교육 연혁" 
        subtitle="금성기술직업전문학교의 설립부터 현재까지의 발자취"
        breadcrumbs={breadcrumbs}
      />
      
      <S.ContentSection>
        <S.SectionInner>
          <S.HistoryDescription>
            1967년 설립 이래, 금성기술직업전문학교는 수많은 기술 인재를 양성해 왔습니다.
            시대의 변화에 맞춰 지속적으로 발전해온 금성기술직업전문학교의 역사를 소개합니다.
          </S.HistoryDescription>
          
          <S.TimelineContainer>
            <S.TimelineLine />
            {historyData.map((item, index) => (
              <S.TimelineItem key={item.year} isLeft={index % 2 === 0}>
                <S.TimelineContent isLeft={index % 2 === 0}>
                  <S.TimelineYear 
                    isHighlight={item.isHighlight}
                    isFoundation={item.isFoundation}
                  >
                    {item.year}
                  </S.TimelineYear>
                  <S.TimelineEventBox>
                    {item.events.map((event, eventIndex) => (
                      <S.TimelineEvent key={eventIndex}>
                        {event}
                      </S.TimelineEvent>
                    ))}
                  </S.TimelineEventBox>
                </S.TimelineContent>
                <S.TimelineDot 
                  isHighlight={item.isHighlight}
                  isFoundation={item.isFoundation}
                />
              </S.TimelineItem>
            ))}
          </S.TimelineContainer>

          {/* 모바일용 단순 리스트 */}
          <S.MobileHistoryContainer>
            {historyData.map((item, index) => (
              <S.MobileHistoryItem key={item.year}>
                <S.MobileHistoryYear 
                  isHighlight={item.isHighlight}
                  isFoundation={item.isFoundation}
                >
                  {item.year}
                </S.MobileHistoryYear>
                <S.MobileHistoryEvents>
                  {item.events.map((event, eventIndex) => (
                    <S.MobileHistoryEvent key={eventIndex}>
                      • {event}
                    </S.MobileHistoryEvent>
                  ))}
                </S.MobileHistoryEvents>
              </S.MobileHistoryItem>
            ))}
          </S.MobileHistoryContainer>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default HistoryPage;