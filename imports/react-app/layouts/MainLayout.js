import React from 'react';
import TopNavWrapper from '../components/Navigation/TopNavWrapper';
import TopNav from '../components/Navigation/TopNav';
import TopNavUser from '../components/Navigation/TopNavUser';

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNavWrapper>
        <TopNav />
        <TopNavUser />
      </TopNavWrapper>
      {children}
    </div>
  );
}

export default MainLayout;
