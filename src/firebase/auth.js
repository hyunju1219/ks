// src/firebase/authService.js
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut, // 이름 충돌 방지
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { auth } from './config'; // Firebase 설정 파일 (auth 객체 export)

// 이메일/비밀번호로 로그인
export const loginWithEmail = async (email, password) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("로그인 오류:", error.code, error.message);
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
};

// 로그아웃 (공통 사용)
export const logout = async () => {
  try {
    await firebaseSignOut(auth);
    localStorage.removeItem("loginTime"); // 자동 로그아웃 및 수동 로그아웃 시 모두 loginTime 제거
    console.log('[AuthService] 로그아웃 성공 및 loginTime 제거');
    return { success: true };
  } catch (error) {
    console.error("로그아웃 오류:", error);
    return { success: false, error: error.message, code: error.code };
  }
};

// 현재 인증 상태 관찰
export const subscribeToAuthChanges = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe; // 구독 해제 함수 반환
};

// 현재 로그인한 사용자 가져오기 (동기적)
export const getCurrentUser = () => {
  return auth.currentUser;
};

// 관리자 권한 확인
export const isAdminUser = (user) => {
  if (!user || !user.email) return false;
  const adminEmails = [
    'kstg355@kstg.com', // 실제 관리자 이메일
    // 추가 관리자 이메일
  ];
  return adminEmails.includes(user.email.toLowerCase());
};