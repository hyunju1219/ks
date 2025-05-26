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
    { year: '2025', events: [
      { date: '01월 01일', content: '상담인력(직업상담사) 입사' }
    ]},
    { year: '2024', events: [
      { date: '11월 27일', content: '제 3대 송성암 학교장 취임' },
      { date: '11월 01일', content: '훈련시설 3,4층 삭제 및 명칭 변경' },
      { date: '11월 01일', content: '실습실 501호 -> 2개의 호실(교무실·사무실, 502호 강의실) 변경' },
      { date: '03월 28일', content: '수질환경관리 직종삭제' }
    ]},
    { year: '2023', events: [
      { date: '12월 19일', content: '세분류 추가(보일러설치·정비 15-05-02-04)' },
      { date: '11월 28일', content: '훈련시설 변경(실습실3, 공구재료실2, 하늘휴게실(명칭변경), 급배수제어설비실(삭제)' }
    ]},
    { year: '2021', events: [
      { date: '12월 06일', content: '훈련직종 삭제(대기관련)' }
    ]},
    { year: '2020', events: [
      { date: '11월 23일', content: '훈련직종 삭제(산업안전관리)' },
      { date: '10월 08일', content: '훈련직종 삭제(에너지관리)' },
      { date: '04월 01일', content: '훈련시설 변경(서류보관실1,2, 삭제, 급배수제어 설비실 701호 등록)' }
    ]},
    { year: '2019', events: [
      { date: '04월 25일', content: '훈련직종 추가 및 삭제' },
      { date: '03월 18일', content: '상담인력 변경' }
    ]},
    { year: '2016', events: [
      { date: '10월 25일', content: '훈련시설 변경(강의실 -> 실습실 등 용도변경)' },
      { date: '10월 06일', content: '훈련직종 추가' },
      { date: '02월 05일', content: 'NCS코드로 훈련직종 변경' }
    ]},
    { year: '2008', events: [
      { date: '01월 16일', content: '직업능력 개발훈련시설 재지정 (부산청 제 06호 - 11호)' }
    ]},
    { year: '2006', events: [
      { date: '12월 18일', content: '학원위치변경' },
      { date: '11월 20일', content: '학원명칭변경' }
    ]},
    { year: '2005', events: [
      { date: '03월 04일', content: '직업능력개발훈련시설지정' }
    ]},
    { year: '2000', events: [
      { date: '03월 14일', content: '직업능력개발훈련과정지정' }
    ]},
    { year: '1999', events: [
      { date: '04월 09일', content: '99년 제 2차 실업자 재취직 훈련계획 승인(부산지방노동청장)' }
    ]},
    { year: '1998', events: [
      { date: '09월 01일', content: '재취업 교육기관 승인' },
      { date: '03월 24일', content: '위치변경(사체 81700-461호)' }
    ]},
    { year: '1996', events: [
      { date: '01월 01일', content: '고용촉진 훈련 실시기관 지정(96-15호)' }
    ]},
    { year: '1992', events: [
      { date: '03월 29일', content: '생활 보호대상 훈련길시기관 지정(92-7호)' }
    ]},
    { year: '1991', events: [
      { date: '04월 01일', content: '생활 보호대상 훈련실시기관 지정(24호)' }
    ]},
    { year: '1989', events: [
      { date: '05월 01일', content: '생활 보호대상 훈련실시기관 지정(89-8호)' }
    ]},
    { year: '1986', events: [
      { date: '07월 10일', content: '생활 보호대상 훈련실시기관 지정(6호)' }
    ]},
    { year: '1984', events: [
      { date: '07월 03일', content: '시설변경(학무 1071.7.3)' }
    ]},
    { year: '1983', events: [
      { date: '02월 03일', content: '지위승계(학무 1071.1 ~ 238' }
    ]},
    { year: '1982', events: [
      { date: '04월 20일', content: '소칙변경(학무 1071 ~ 1320) 명칭변경' }
    ]},
    { year: '1974', events: [
      { date: '08월 04일', content: '직위승계(학무 1071 ~ 2939)' }
    ]},
    { year: '1971', events: [
      { date: '03월 17일', content: '소칙변경(교문1071.3 ~ 1540)' }
    ]},
    { year: '1968', events: [
      { date: '03월 03일', content: '위치변경(교문 1073.3~ 746)' }
    ]},
    { year: '1967', events: [
      { date: '07월 25일', content: '금성 냉동 기술학원 설립인가' }
    ]}
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
          <S.HistoryTitle>금성기술직업전문학교 연혁</S.HistoryTitle>
          <S.HistoryDescription>
            1967년 설립 이래, 금성기술직업전문학교는 수많은 기술 인재를 양성해 왔습니다.
            시대의 변화에 맞춰 지속적으로 발전해온 금성기술직업전문학교의 역사를 소개합니다.
          </S.HistoryDescription>
          
          <S.HistoryTableContainer>
            <S.HistoryTable>
              <thead>
                <tr>
                  <S.HistoryTableHeader width="15%">연도</S.HistoryTableHeader>
                  <S.HistoryTableHeader width="20%">날짜</S.HistoryTableHeader>
                  <S.HistoryTableHeader width="65%">내용</S.HistoryTableHeader>
                </tr>
              </thead>
              <tbody>
                {historyData.map((yearData, yearIndex) => (
                  yearData.events.map((event, eventIndex) => (
                    <tr key={`${yearData.year}-${eventIndex}`}>
                      {eventIndex === 0 ? (
                        <S.HistoryTableYearCell rowSpan={yearData.events.length}>
                          {yearData.year}
                        </S.HistoryTableYearCell>
                      ) : null}
                      <S.HistoryTableCell>{event.date}</S.HistoryTableCell>
                      <S.HistoryTableCell>{event.content}</S.HistoryTableCell>
                    </tr>
                  ))
                ))}
              </tbody>
            </S.HistoryTable>
          </S.HistoryTableContainer>
          
          <S.HistoryMobileContainer>
            {historyData.map((yearData, yearIndex) => (
              <S.HistoryYearSection key={yearData.year}>
                <S.HistoryYearBadge>{yearData.year}</S.HistoryYearBadge>
                <S.HistoryEventList>
                  {yearData.events.map((event, eventIndex) => (
                    <S.HistoryEventItem key={`${yearData.year}-${eventIndex}`}>
                      <S.HistoryEventDate>{event.date}</S.HistoryEventDate>
                      <S.HistoryEventContent>{event.content}</S.HistoryEventContent>
                    </S.HistoryEventItem>
                  ))}
                </S.HistoryEventList>
              </S.HistoryYearSection>
            ))}
          </S.HistoryMobileContainer>
        </S.SectionInner>
      </S.ContentSection>
      
      <CTASection />
    </S.PageContainer>
  );
};

export default HistoryPage;