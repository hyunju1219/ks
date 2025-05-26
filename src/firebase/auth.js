// Firebase 인증 관련 함수
import { 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from './config';

// 이메일/비밀번호로 로그인
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("로그인 오류:", error);
    return { 
      success: false, 
      error: error.message,
      code: error.code
    };
  }
};

// 로그아웃
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("로그아웃 오류:", error);
    return { success: false, error: error.message };
  }
};

// 현재 인증 상태 관찰
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// 현재 로그인한 사용자 가져오기
export const getCurrentUser = () => {
  return auth.currentUser;
};

// 관리자 권한 확인 (간단한 이메일 체크)
export const isAdmin = (user) => {
  // 여기서는 간단히 특정 이메일 주소를 관리자로 취급
  // 실제 구현에서는 Firestore에 관리자 목록을 저장하거나 Firebase의 Custom Claims 기능을 사용하는 것이 좋습니다
  if (!user) return false;
  
  // 관리자 이메일 목록 (실제 운영 시 수정 필요)
  const adminEmails = [
    'admin@goldstar.edu',
    'admin@example.com',
    user.email // 현재 로그인한 모든 사용자를 임시로 관리자로 취급 (테스트용)
  ];
  
  return adminEmails.includes(user.email);
};