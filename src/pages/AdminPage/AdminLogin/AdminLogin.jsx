/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useLocation } from 'wouter';
import { loginWithEmail, subscribeToAuthChanges, isAdminUser, logout } from '@/firebase/auth';

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // 초기 로딩 true
  const [_, navigate] = useLocation();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        if (isAdminUser(user)) {
          console.log('[AdminLogin] 이미 관리자로 로그인되어 /admin으로 이동');
          navigate("/admin", { replace: true });
        } else {
          setError("관리자 권한이 없습니다. 일반 사용자로 로그인되어 있습니다.");
          console.log('[AdminLogin] 관리자 아닌 사용자로 로그인되어 있음, 로그아웃 시도');
          logout(); // 관리자 아니면 로그아웃 시키고 loginTime 등 정리
          setIsLoading(false);
        }
      } else {
        console.log('[AdminLogin] 로그인되지 않음, 로그인 폼 표시');
        setIsLoading(false);
      }
      // navigate 실행 시 컴포넌트가 언마운트 될 수 있으므로, setIsLoading(false)는
      // navigate가 실행되지 않는 경로에서 호출되도록 함.
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await loginWithEmail(email, password);

    if (result.success && result.user) {
      if (isAdminUser(result.user)) {
        alert("관리자 로그인 성공");
        const loginTimestamp = Date.now();
        localStorage.setItem("loginTime", loginTimestamp.toString());
        console.log('[AdminLogin] loginTime 저장:', new Date(loginTimestamp).toLocaleString());
        navigate("/admin", { replace: true });
      } else {
        setError("로그인 성공했으나 관리자 권한이 없습니다.");
        console.log('[AdminLogin] 관리자 아님, 로그인 후 로그아웃 시도');
        await logout(); // 관리자가 아니면 즉시 로그아웃
        setIsLoading(false);
      }
    } else {
      let errorMessage = "로그인에 실패했습니다. ";
      switch (result.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage += "이메일 또는 비밀번호가 올바르지 않습니다.";
          break;
        case 'auth/too-many-requests':
          errorMessage += "너무 많은 로그인 시도를 하셨습니다. 잠시 후 다시 시도해주세요.";
          break;
        case 'auth/network-request-failed':
          errorMessage += "네트워크 연결을 확인해주세요.";
          break;
        default:
          errorMessage += result.error || "알 수 없는 오류가 발생했습니다.";
      }
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  if (isLoading) { // error가 있더라도 초기 로딩 중일 수 있음
    return <div css={s.layout}><p>확인 중...</p></div>;
  }

  return (
    <div css={s.layout}>
      <form onSubmit={handleLogin} css={s.form}>
        <h2 css={s.title}>관리자 로그인</h2>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          css={s.input}
          required
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          css={s.input}
          required
          disabled={isLoading}
        />
        <button type="submit" css={s.button} disabled={isLoading}>
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
        {error && <p css={s.error}>{error}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;