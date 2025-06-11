/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';

// 컴포넌트 및 이미지 import
import PracticeDetailPage from './PracticeDetailPage';

import practice1 from '../../../assets/practice/실습1.png';
import practice2 from '../../../assets/practice/공조.png';


import hit1 from '../../../assets/practice/hit/실습8.jpg';
import hit2 from '../../../assets/practice/hit/실습9.jpg';
import hit3 from '../../../assets/practice/hit/실습10.jpg';

//공조장치 시스템 실습
import refrigerant1 from '../../../assets/practice/refrigerant/실습2.jpg';
import refrigerant6 from '../../../assets/practice/refrigerant/실습7.jpg';

//히트펌프
import refrigerant2 from '../../../assets/practice/refrigerant/실습3.jpg';
import refrigerant3 from '../../../assets/practice/refrigerant/실습4.jpg';
import refrigerant4 from '../../../assets/practice/refrigerant/실습5.jpg';
import refrigerant5 from '../../../assets/practice/refrigerant/실습6.jpg';


import onebanding1 from '../../../assets/practice/onebanding/박효진.jpg';
import onebanding2 from '../../../assets/practice/onebanding/설주한.jpg';
import onebanding3 from '../../../assets/practice/onebanding/유승화1.jpg';
import onebanding4 from '../../../assets/practice/onebanding/정영서.jpg';
import onebanding5 from '../../../assets/practice/onebanding/최민욱.jpg';
import onebanding6 from '../../../assets/practice/onebanding/하윤재.jpg';

import twobanding1 from '../../../assets/practice/twobanding/박효진.jpg';
import twobanding2 from '../../../assets/practice/twobanding/설주한.jpg';
import twobanding3 from '../../../assets/practice/twobanding/유승화.jpg';
import twobanding4 from '../../../assets/practice/twobanding/정영서.jpg';
import twobanding5 from '../../../assets/practice/twobanding/최민욱.jpg';
import twobanding6 from '../../../assets/practice/twobanding/하윤재.jpg';

import exam1 from '../../../assets/practice/exam1/남윤수.jpg';
import exam2 from '../../../assets/practice/exam1/박재환.jpg';
import exam3 from '../../../assets/practice/exam1/박혁.jpg';
import exam4 from '../../../assets/practice/exam1/신지훈.jpg';
import exam5 from '../../../assets/practice/exam1/안승훈.jpg';
import exam6 from '../../../assets/practice/exam1/이종기.jpg';
import exam7 from '../../../assets/practice/exam1/전준호.jpg';
import exam8 from '../../../assets/practice/exam1/정석진.jpg';

import exam2_1 from '../../../assets/practice/exam2/남윤수.jpg';
import exam2_2 from '../../../assets/practice/exam2/박재환.jpg';
import exam2_4 from '../../../assets/practice/exam2/신지훈.jpg';
import exam2_5 from '../../../assets/practice/exam2/안승훈.jpg';
import exam2_6 from '../../../assets/practice/exam2/이종기.jpg';
import exam2_7 from '../../../assets/practice/exam2/전준호.jpg';
import exam2_8 from '../../../assets/practice/exam2/정석진.jpg';

function PracticePage() {
    // <<< 변경 1: 클릭된 항목의 정보를 저장할 상태. null이면 목록, 객체이면 상세 페이지.
    const [selectedPractice, setSelectedPractice] = useState(null);

    // breadcrumbs 데이터 (예시)
    const breadcrumbs = [
        { name: '학교 소개', link: '/about' },
        { name: '실습', link: null }
    ];

    // <<< 참고: id가 중복되어 수정했습니다.
    const practicePrograms = [
        {
          id: 1,
          title: '공조기 실습 작품',
          description: '냉동기, 공조기의 설치, 운전, 정비에 관한 실무 기술을 습득합니다.',
          subjects: ['냉동기 구조 및 원리', '공조시스템 설계', '냉매 충전 및 회수', '고장진단 및 수리'],
          duration: '6개월',
          certification: '공조냉동기계기능사',
          images: [practice1]
        },
        {
          id: 2,
          title: '히트펌프 시스템 실습',
          description: '산업설비의 유지보수 및 관리에 필요한 실무 기술을 배웁니다.',
          subjects: ['설비진단 기술', '예방보전 계획', '설비개선 기법', '안전관리'],
          duration: '4개월',
          certification: '설비보전기능사',
          images: [refrigerant2, refrigerant3, refrigerant4]
        },
        {
          id: 3,
          title: '공조장치 시스템 실습',
          description: '에너지 효율 향상 및 관리에 관한 전문 기술을 습득합니다.',
          subjects: ['에너지 진단', '효율개선 방안', '신재생에너지', '에너지정책'],
          duration: '5개월',
          certification: '에너지관리기능사',
          images: [refrigerant1, refrigerant6]
        },
        {
          id: 4,
          title: '설비보전 용접 실습 작품', 
          description: '에너지 효율 향상 및 관리에 관한 전문 기술을 습득합니다.',
          subjects: ['에너지 진단', '효율개선 방안', '신재생에너지', '에너지정책'],
          duration: '5개월',
          certification: '에너지관리기능사',
          images: [practice2]
        },
        {
          id: 5, // ID 중복 수정
          title: '원밴딩 실습 작품',
          description: '다양한 용접 기법과 기술을 실습을 통해 체계적으로 학습합니다.',
          subjects: ['아크용접', '가스용접', '특수용접', '용접구조물 제작'],
          duration: '3개월',
          certification: '전기용접기능사',
          images: [onebanding1, onebanding2, onebanding3, onebanding4, onebanding5, onebanding6]
        },
        {
          id: 6, // ID 중복 수정
          title: '투밴딩(동관작업) 실습 작품',
          description: '다양한 용접 기법과 기술을 실습을 통해 체계적으로 학습합니다.',
          subjects: ['아크용접', '가스용접', '특수용접', '용접구조물 제작'],
          duration: '3개월',
          certification: '전기용접기능사',
          images: [twobanding1, twobanding2, twobanding3, twobanding4, twobanding5, twobanding6]
        },
        {
          id: 7, // ID 중복 수정
          title: '에너지 배관 실습 작품 #1',
          description: '다양한 용접 기법과 기술을 실습을 통해 체계적으로 학습합니다.',
          subjects: ['아크용접', '가스용접', '특수용접', '용접구조물 제작'],
          duration: '3개월',
          certification: '전기용접기능사',
          images: [exam1, exam2, exam3, exam4, exam5, exam6, exam7, exam8]
        },
        {
          id: 8, // ID 중복 수정
          title: '에너지 배관 실습 작품 #1',
          description: '다양한 용접 기법과 기술을 실습을 통해 체계적으로 학습합니다.',
          subjects: ['아크용접', '가스용접', '특수용접', '용접구조물 제작'],
          duration: '3개월',
          certification: '전기용접기능사',
          images: [exam2_1, exam2_2, exam2_4, exam2_5, exam2_6, exam2_7, exam2_8]
        },
    ];

    // <<< 변경 2: 클릭 시 실행될 핸들러 함수
    const handlePracticeClick = (practice) => {
        setSelectedPractice(practice);
    };

    // <<< 변경 3: 상세 페이지에서 목록으로 돌아오는 함수
    const handleBackToList = () => {
        setSelectedPractice(null);
    };

    // <<< 변경 4: selectedPractice 상태에 따라 다른 UI를 렌더링
    if (selectedPractice) {
        return (
            <PracticeDetailPage 
                practice={selectedPractice} 
                onBack={handleBackToList} 
            />
        );
    }
    
    return (
        <>
            <div css={s.facilitiesGrid}>
                {/* <<< 변경 5: 올바른 onClick 핸들러와 JSX 문법 사용 */}
                {practicePrograms.map(practice => (
                    <div css={s.facilityCard} key={practice.id}
                        onClick={() => handlePracticeClick(practice)}>
                        <div css={s.facilityImageContainer}>
                            <img css={s.facilityImage} 
                                src={practice.images[0]} 
                                alt={practice.title} // alt 속성 추가
                            />
                        </div>
                        <div css={s.facilityContent}>
                            <p css={s.facilityTitle}>{practice.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PracticePage;