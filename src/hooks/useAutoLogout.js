// src/hooks/useAutoLogout.js
import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation } from 'wouter';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout as serviceLogout } from '@/firebase/auth';

const LOGIN_DURATION_MS = 60 * 60 * 1000;
// const LOGIN_DURATION_MS = 30 * 1000; // 테스트용으로 짧게

export function useAutoLogout() {
  const [_, navigate] = useLocation();
  const logoutTimerRef = useRef(null);
  const intervalRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(null);
  const initialCheckCompletedRef = useRef(false); // 초기 loginTime 확인 완료 플래그

  const clearAllTimers = useCallback(() => { /* ... 동일 ... */
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    logoutTimerRef.current = null;
    intervalRef.current = null;
  }, []);

  const performAutoLogout = useCallback(async () => { /* ... 동일 ... */
    clearAllTimers();
    console.log('[AutoLogout] 자동 로그아웃 실행');
    const result = await serviceLogout();
    if (result.success) {
      alert("세션이 만료되어 자동으로 로그아웃되었습니다. 다시 로그인해주세요.");
    } else {
      console.error("자동 로그아웃 실패:", result.error);
      alert("자동 로그아웃 중 오류가 발생했습니다.");
    }
    setRemainingTime(null);
    initialCheckCompletedRef.current = false; // 로그아웃 시 플래그 리셋
    navigate("/admin/login", { replace: true });
  }, [navigate, clearAllTimers]);

  const startTimers = useCallback((duration) => { /* ... 동일 ... */
    clearAllTimers();
    console.log(`[AutoLogout] 타이머 시작. Duration: ${duration / 1000}s`);
    logoutTimerRef.current = setTimeout(performAutoLogout, duration);

    let timeLeft = duration;
    setRemainingTime(timeLeft);
    intervalRef.current = setInterval(() => {
      timeLeft -= 1000;
      if (timeLeft <= 0) {
        setRemainingTime(0);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else {
        setRemainingTime(timeLeft);
      }
    }, 1000);
  }, [performAutoLogout, clearAllTimers]);

  const checkAndManageLoginSession = useCallback(() => {
    const currentUser = auth.currentUser;
    const loginTimeStr = localStorage.getItem("loginTime");

    console.log('[AutoLogout] checkAndManageLoginSession. User:', currentUser ? currentUser.email : '없음', 'loginTimeStr:', loginTimeStr, 'initialCheckCompleted:', initialCheckCompletedRef.current);

    if (!currentUser) {
      console.log('[AutoLogout] 사용자 로그아웃 상태. 타이머 정리.');
      clearAllTimers();
      setRemainingTime(null);
      initialCheckCompletedRef.current = false; // 로그아웃 시 플래그 리셋
      // loginTime은 serviceLogout에서 처리하므로 여기서 굳이 제거할 필요 없음
      return;
    }

    // currentUser는 존재함
    if (!loginTimeStr) {
      // loginTime이 아직 설정되지 않았을 수 있는 로그인 직후 상황일 수 있음.
      // initialCheckCompletedRef를 사용하여 첫 확인 시에는 바로 로그아웃하지 않도록 함.
      if (initialCheckCompletedRef.current) {
        // 이미 한 번 loginTime을 확인했었는데도 없다면 문제 상황으로 간주하고 로그아웃.
        console.warn('[AutoLogout] 사용자는 로그인했으나 loginTime 정보 여전히 없음 (초기 확인 후). 자동 로그아웃.');
        performAutoLogout();
      } else {
        // 아직 초기 확인이 완료되지 않았으므로, loginTime이 곧 설정될 것을 기다림.
        console.log('[AutoLogout] 사용자는 로그인했으나 loginTime 정보 없음 (초기). 잠시 대기.');
        // 이 경우, 다음 onAuthStateChanged 이벤트나 사용자 활동 감지 시 다시 확인됨.
        // 또는 여기서 짧은 timeout 후 재확인 로직을 넣을 수도 있음.
        // 일단은 아무것도 안하고 다음 checkAndManageLoginSession 호출을 기다림.
        // setRemainingTime(LOGIN_DURATION_MS); // 임시로 전체 시간 표시하거나
        setRemainingTime(null); // 또는 아직 시간 표시 안 함
      }
      return;
    }
    
    // loginTimeStr이 존재함
    initialCheckCompletedRef.current = true; // loginTime을 성공적으로 읽었으므로 초기 확인 완료
    const loginTime = parseInt(loginTimeStr, 10);

    if (isNaN(loginTime)) {
      console.error('[AutoLogout] loginTime이 유효한 숫자가 아님:', loginTimeStr, '. 자동 로그아웃.');
      performAutoLogout();
      return;
    }

    const currentTime = Date.now();
    const elapsedTime = currentTime - loginTime;
    console.log(`[AutoLogout] loginTime: ${new Date(loginTime).toLocaleTimeString()}, currentTime: ${new Date(currentTime).toLocaleTimeString()}, elapsedTime: ${elapsedTime}ms, LOGIN_DURATION: ${LOGIN_DURATION_MS}ms`);

    if (elapsedTime >= LOGIN_DURATION_MS) {
      console.log('[AutoLogout] 세션 만료됨. 자동 로그아웃.');
      performAutoLogout();
    } else {
      const newDuration = LOGIN_DURATION_MS - elapsedTime;
      startTimers(newDuration);
    }
  }, [performAutoLogout, startTimers, clearAllTimers]);

  useEffect(() => {
    console.log('[AutoLogout] 훅 마운트/업데이트. onAuthStateChanged 리스너 설정.');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('[AutoLogout] onAuthStateChanged 트리거됨. User:', user ? user.email : '없음');
      // onAuthStateChanged 발생 시 초기 확인 플래그를 false로 설정하여
      // loginTime이 있는지 다시 확인하도록 유도할 수 있음.
      // 하지만, 사용자가 로그인된 상태에서 loginTime이 갑자기 사라지는 경우는 드물다.
      // 로그인/로그아웃 전환 시에만 initialCheckCompletedRef를 리셋하는 것이 더 나을 수 있음.
      // 현재는 performLogout과 사용자가 로그아웃 상태일 때 리셋.
      if(!user) initialCheckCompletedRef.current = false; // 명시적으로 로그아웃 시 리셋

      checkAndManageLoginSession();
    });

    // 초기 마운트 시 한 번 실행하여 현재 상태 반영
    // checkAndManageLoginSession(); // onAuthStateChanged가 초기 상태도 알려주므로 중복일 수 있음

    return () => {
      console.log('[AutoLogout] 훅 언마운트. 리스너 해제 및 타이머 정리.');
      unsubscribe();
      clearAllTimers();
    };
  }, [checkAndManageLoginSession, clearAllTimers]); // 의존성 배열

  // 사용자 활동 감지 (선택 사항)
  useEffect(() => {
    const resetTimerOnActivity = () => {
      if (auth.currentUser && localStorage.getItem("loginTime")) {
        console.log('[AutoLogout] 사용자 활동 감지. 타이머 리셋.');
        localStorage.setItem("loginTime", Date.now().toString());
        initialCheckCompletedRef.current = false; // 활동 시 loginTime이 갱신되므로, 다시 초기 확인처럼 동작
        checkAndManageLoginSession();
      }
    };
    window.addEventListener('click', resetTimerOnActivity);
    return () => window.removeEventListener('click', resetTimerOnActivity);
  }, [checkAndManageLoginSession]);

  return { remainingTime };
}