import { css } from '@emotion/react';

export const HeaderContainer = css`
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderInner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const LogoContainer = css`
  display: flex;
  align-items: center;
`;

export const logo = css`
  width: 18rem;
`;

export const Logo = css`
  color: #0056b3;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

export const DesktopNav = css`
  display: none;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const NavItem = css`
  position: relative;
  display: inline-block;
  
  &:hover > div {
    max-height: 500px;
    opacity: 1;
  }
`;

export const NavButton = css`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 5rem;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #0056b3;
  }
  
  svg {
    margin-left: 0.25rem;
  }
`;

export const AuthSection = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserEmail = css`
  font-size: 0.9rem;
  color: #444;
`;

export const LogoutButton = css`
  background: #e63946;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  &:hover {
    background: #d62828;
  }
`;

export const DropdownContent = css`
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  z-index: 1;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

export const DropdownItem = css`
  display: block;
  padding: 0.5rem 1rem;
  color: #4b5563;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
    color: #0056b3;
  }
`;

export const MobileMenuButton = css`
  color: #374151;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

// 모바일 네비게이션을 위한 기본 스타일
export const MobileNavBase = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 50;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

// 모바일 네비게이션 열린 상태
export const MobileNavOpen = css`
  ${MobileNavBase}
  transform: translateX(0);
`;

// 모바일 네비게이션 닫힌 상태
export const MobileNavClosed = css`
  ${MobileNavBase}
  transform: translateX(-100%);
`;

export const MobileNavHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const MobileLogo = css`
  color: #0056b3;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CloseButton = css`
  color: #374151;
`;

export const MobileNavContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const MobileNavItem = css`
  margin-bottom: 0.5rem;
`;

// 모바일 네비게이션 버튼 기본 스타일
export const MobileNavButtonBase = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
`;

// 모바일 네비게이션 버튼 활성화 상태
export const MobileNavButtonActive = css`
  ${MobileNavButtonBase}
  background-color: #e5e7eb;
  
  svg {
    transform: rotate(180deg);
    transition: transform 0.3s;
  }
`;

// 모바일 네비게이션 버튼 비활성화 상태
export const MobileNavButtonInactive = css`
  ${MobileNavButtonBase}
  background-color: #f3f4f6;
  
  svg {
    transform: rotate(0);
    transition: transform 0.3s;
  }
`;

// 모바일 서브메뉴 열린 상태
export const MobileSubMenuOpen = css`
  display: block;
  padding-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

// 모바일 서브메뉴 닫힌 상태
export const MobileSubMenuClosed = css`
  display: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MobileSubMenuItem = css`
  display: block;
  padding: 0.75rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const MobileContactInfo = css`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  
  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
`;
