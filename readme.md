# 금성직업기술학교 웹사이트

## 프로젝트 실행 방법

### 윈도우 환경에서 실행하기
1. 프로젝트 폴더에서 아래 명령어를 실행합니다:
   ```
   cd client
   npm install
   npm run dev
   ```

또는 간단히 `client/scripts/start.bat` 파일을 실행합니다.

### 리액트 앱 개발 정보
- 이 프로젝트는 React와 Vite를 사용하여 구축된 SPA(Single Page Application)입니다.
- client 폴더 내에서 모든 개발이 이루어집니다.
- Firebase를 사용하여 인증 및 데이터 관리를 처리합니다.

## 프로젝트 구조
- `/client/src/pages`: 페이지 컴포넌트
- `/client/src/components`: 재사용 가능한 UI 컴포넌트
- `/client/src/firebase`: Firebase 인증 및 데이터베이스 관련 설정
- `/client/src/services`: 외부 서비스 통합 (예: EmailJS)

## 개발 환경
- Node.js
- React
- Vite
- Firebase
- Emotion CSS
- Tailwind CSS