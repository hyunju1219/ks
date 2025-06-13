/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { subscribeToAuthChanges, logout as serviceLogout } from '@/firebase/auth'; // 공통 logout 사용
import logo from '../../assets/images/kstg_logo.png';
import { useAutoLogout } from '@/hooks/useAutoLogout';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const { remainingTime } = useAutoLogout(); // 자동 로그아웃 훅

  useEffect(() => {
    // authService를 통해 인증 상태 구독
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      console.log('[Header] onAuthStateChanged 수신:', currentUser ? currentUser.email : '없음');
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []); // firebaseAuth 의존성 제거 (authService 내부에서 처리)

  const handleManualLogout = async () => {
    console.log('[Header] 수동 로그아웃 시도');
    const result = await serviceLogout(); // 공통 logout 함수 사용
    if (result.success) {
      alert('로그아웃 되었습니다.');
      // Header는 모든 페이지에 표시될 수 있으므로, /admin/login으로 강제 이동보다는
      // 상태 변경에 따라 UI가 업데이트되도록 하는 것이 일반적.
      // 필요하다면 navigate('/admin/login'); 또는 홈으로 이동 navigate('/');
    } else {
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  const formatTime = (ms) => {
    if (ms === null || ms < 0) return null;
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const formattedRemainingTime = formatTime(remainingTime);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileSubMenu = (menuName) => setActiveSubMenu(activeSubMenu === menuName ? null : menuName);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [navigate]); // location 대신 currentLocation 사용

  const navItems = [ /* ... 네비게이션 아이템 배열 ... */
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
      name: '과정소개',
      path: '/certificate',
      submenu: [
        { name: '공조냉동기계', path: '/certificate/refrigeration' },
        { name: '에너지관리', path: '/certificate/energy' },
        { name: '설비보전', path: '/certificate/maintenance' },
        { name: '온수온돌', path: '/certificate/heating' }
      ]
    },
   {
      name: '교육과정',
      path: '/courses',
      submenu: [
        { name: '현재모집교육', path: '/courses/open' },              
        { name: '전체교육보기', path: '/courses/all' },               
        { name: '국가기간전략훈련', path: '/courses/type/national' }, 
        { name: '내일배움카드', path: '/courses/type/naeil-card' },  
        { name: '과정평가형', path: '/courses/type/assessment' },    
        { name: '부산시과정', path: '/courses/type/busan' },
      ]
    }
    ,
    {
      name: '취업센터',
      path: '/job-center',
      submenu: [
        { name: '지원시스템', path: '/job-center' },
        { name: '자격증취득현황', path: '/job-center/license' },
        { name: '구인게시판', path: '/job-center/info' },
        { name: '취업현황', path: '/job-center/emp' },
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
          <Link to="/">
            <img css={s.logo} src={logo} alt="금성기술직업전문학교 로고" />
          </Link>
        </div>
        
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
                    <Link to={subItem.path}>
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
            {formattedRemainingTime && (
              <span css={s.RemainingTime}>
                자동 로그아웃: {formattedRemainingTime}
              </span>
            )}
            <span css={s.UserEmail}>{user.email}</span>
            <button css={s.LogoutButton} onClick={handleManualLogout}>로그아웃</button> {/* 수동 로그아웃 핸들러 연결 */}
          </div>
        )}
        
        <button css={s.MobileMenuButton} onClick={toggleMobileMenu}>
          <Menu size={24} />
        </button>
      </div>
      
      <div css={mobileMenuOpen ? s.MobileNavOpen : s.MobileNavClosed}>
        {/* ... 모바일 네비게이션 ... */}
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
                    <Link to={subItem.path}>
                      <span css={s.MobileSubMenuItem}>{subItem.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
           {user && (
            <div css={s.MobileAuthSection}>
              <div css={s.UserEmailMobile}>{user.email}</div>
              {formattedRemainingTime && (
                <div css={s.RemainingTimeMobile}>
                  자동 로그아웃까지: {formattedRemainingTime}
                </div>
              )}
              <button css={s.LogoutButtonMobile} onClick={handleManualLogout}>로그아웃</button>
            </div>
          )}
        </div>
        
        <div css={s.MobileContactInfo}>
          <p>문의 전화: 051-806-2200 / 051-864-0535</p>
          <p>이메일: kstg35@naver.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;