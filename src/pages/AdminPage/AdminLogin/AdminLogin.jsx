/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useLocation } from 'wouter';
import { auth } from '@/firebase/config';
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [_, navigate] = useLocation();

  // 이미 로그인된 상태이면 /admin으로 리디렉션
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/admin");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        alert("관리자 로그인 성공");
        localStorage.setItem("loginTime", Date.now().toString());
        navigate("/admin");
      } else {
        setError("관리자 권한이 없습니다.");
        await auth.signOut();
      }
    } catch (err) {
      setError("로그인 실패: " + err.message);
    }
  };

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
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          css={s.input}
        />
        <button type="submit" css={s.button}>로그인</button>
        {error && <p css={s.error}>{error}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;
