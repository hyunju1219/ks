/** @jsxImportSource @emotion/react */
import * as s from './style';

import React from 'react';
import { Link } from 'wouter';
import { Home, ChevronRight } from 'lucide-react';

const SubpageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div css={s.HeaderContainer}>
      <div css={s.HeaderContent}>
        <h1 css={s.HeaderTitle}>{title}</h1>
        {subtitle && <p css={s.HeaderSubtitle}>{subtitle}</p>}
        
        {breadcrumbs && (
          <div css={s.Breadcrumbs}>
            <div>
              <Link href="/">
                <span css={s.BreadcrumbLink}>
                  <Home size={16} />
                  <span>홈</span>
                </span>
              </Link>
            </div>
            
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={16} css="text-gray-400" />
                {item.link ? (
                  <div>
                    <Link href={item.link}>
                      <span css={s.BreadcrumbLink}>{item.name}</span>
                    </Link>
                  </div>
                ) : (
                  <span css={s.BreadcrumbCurrent}>{item.name}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubpageHeader;
