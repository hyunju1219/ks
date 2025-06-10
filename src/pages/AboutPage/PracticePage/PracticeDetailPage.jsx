/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import * as s from './style'; // 스타일 파일 import (하나의 파일에 있다면 이렇게)
import BackButton from '@/components/Button/BackButton';
// import * as s from './detailStyle'; // 별도 파일이라면 이렇게

function PracticeDetailPage({ practice, onBack }) {
    useEffect(() => {
        // 컴포넌트가 렌더링될 때 스크롤을 맨 위로 이동시킵니다.
        window.scrollTo(0, 0);
    }, []);

    if (!practice) {
        return (
            <div css={s.detailContainer}>
                <p>잘못된 접근입니다.</p>
                <button css={s.backButton} onClick={onBack}>← 목록으로 돌아가기</button>
            </div>
        );
    }

    return (
        <div css={s.detailContainer}>

            {/* 헤더: 제목 */}
            <header css={s.detailHeader}>
                <h1 css={s.detailTitle}>{practice.title}</h1>
            </header>

            {/* 대표 이미지 */}
            {
                practice.images.map(image => (
                    <img
                        css={s.detailImage}
                        src={image}
                        alt={practice.title}
                    />
                ))
            }
            <BackButton onClick={onBack} />
        </div>
    );
}

export default PracticeDetailPage;