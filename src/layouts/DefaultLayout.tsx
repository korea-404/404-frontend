// src/layouts/DefaultLayout.tsx
import React from 'react';
import '../styles/layouts/DefaultLayout.css';
import { UserProvider } from '../context/UserContext';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <div className="default-layout">
        <aside className="sidebar">
          <h2 className="sidebar-title">고교학점제</h2>
          <nav className="sidebar-menu">
            <a href="/">메인</a>
            <a href="/notices">공지사항</a>
          </nav>
        </aside>

        <div className="main-area">
          {/* <Header /> 삭제 */}
          <main className="main-wrapper">{children}</main>
        </div>
      </div>
    </UserProvider>
  );
};

export default DefaultLayout;
