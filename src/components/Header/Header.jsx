/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [location] = useLocation();

  const auth = getAuth();
  const [user, setUser] = useState(null);

  // 로그인 상태 확인
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('loginTime'); // 세션 타이머도 제거
      alert('로그아웃 되었습니다.');
    });
  };

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 모바일 서브메뉴 토글
  const toggleMobileSubMenu = (menuName) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  // 화면 크기 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    {
      name: '학교 소개',
      path: '/about',
      submenu: [
        { name: '기관소개', path: '/about' },
        { name: '교육연혁', path: '/about/history' },
        { name: '교육시설', path: '/about/facilities' },
        { name: '오시는길', path: '/about/location' }
      ]
    },
    {
      name: '자격증 소개',
      path: '/certificate',
      submenu: [
        { name: '공조냉동기계', path: '/certificate/refrigeration' },
        { name: '에너지관리', path: '/certificate/energy' },
        { name: '설비보전', path: '/certificate/maintenance' },
        { name: '온수온돌', path: '/certificate/heating' }
      ]
    },
    {
      name: '모집교육',
      path: '/courseAll',
      submenu: [
        { name: '현재모집중인교육', path: '/courseJoin' },
        { name: '국가기간전략훈련', path: '/courseAll' },
        { name: '내일배움카드', path: '/course' },
        { name: '부산광역시 훈련', path: '/course/process' }
      ]
    },
    {
      name: '취업센터',
      path: '/job-center',
      submenu: [
        { name: '지원시스템', path: '/job-center' },
        { name: '취업정보', path: '/job-center/info' }
      ]
    },
    {
      name: '고객지원',
      path: '/notice',
      submenu: [
        { name: '공지사항', path: '/notice' },
        { name: '문의하기', path: '/contact' }
      ]
    }
  ];

  return (
    <header css={s.HeaderContainer}>
      <div css={s.HeaderInner}>
        <div css={s.LogoContainer}>
          <Link href="/">
            <span css={s.Logo}>금성기술직업전문학교</span>
          </Link>
        </div>
        
        {/* 데스크탑 네비게이션 */}
        <nav css={s.DesktopNav}>
          {navItems.map((item) => (
            <div css={s.NavItem} key={item.name}>
              <button css={s.NavButton}>
                {item.name}
                <ChevronDown size={16} />
              </button>
              <div css={s.DropdownContent}>
                {item.submenu.map((subItem) => (
                  <div key={subItem.name}>
                    <Link href={subItem.path}>
                      <span css={s.DropdownItem}>{subItem.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
        {user && (
          <div css={s.AuthSection}>
            <span css={s.UserEmail}>{user.email}</span>
            <button css={s.LogoutButton} onClick={handleLogout}>로그아웃</button>
          </div>
        )}
        {/* 모바일 메뉴 버튼 */}
        <button css={s.MobileMenuButton} onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* 모바일 네비게이션 */}
      <div css={mobileMenuOpen ? s.MobileNavOpen : s.MobileNavClosed}>
        <div css={s.MobileNavHeader}>
          <span css={s.MobileLogo}>금성기술직업전문학교</span>
          <button css={s.CloseButton} onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        
        <div css={s.MobileNavContent}>
          {navItems.map((item) => (
            <div css={s.MobileNavItem} key={item.name}>
              <button 
                css={activeSubMenu === item.name ? s.MobileNavButtonActive : s.MobileNavButtonInactive}
                onClick={() => toggleMobileSubMenu(item.name)}
              >
                <span>{item.name}</span>
                <ChevronDown size={16} />
              </button>
              
              <div css={activeSubMenu === item.name ? s.MobileSubMenuOpen : s.MobileSubMenuClosed}>
                {item.submenu.map((subItem) => (
                  <div key={subItem.name}>
                    <Link href={subItem.path}>
                      <span css={s.MobileSubMenuItem}>{subItem.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div css={s.MobileContactInfo}>
          <p>문의 전화: 02-123-4567</p>
          <p>이메일: info@kstech.co.kr</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
