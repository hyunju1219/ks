// Firebase 설정
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

// 환경 변수에서 Firebase 설정 가져오기
const firebaseConfig = {
  apiKey: "AIzaSyBGayG4GarQHnXacsytitWKiEp_HgMjB6I",
  authDomain: "kstech-55651.firebaseapp.com",
  projectId: "kstech-55651",
  storageBucket: "kstech-55651.firebasestorage.app",
  messagingSenderId: "21026988176",
  appId: "1:21026988176:web:f13f0484d6de2feca57815"
};

// Firebase 초기화
// 앱이 이미 초기화되었는지 확인
const app = initializeApp(firebaseConfig);

// 인증 모듈
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
