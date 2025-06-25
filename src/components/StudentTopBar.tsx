import React from 'react';
import { LogOut } from 'lucide-react';
import '../styles/components/StudentTopBar.css';

interface StudentTopBarProps {
  semester: string;
}

const StudentTopBar: React.FC<StudentTopBarProps> = ({ semester }) => {
  return (
    <header className="student-topbar">
      <div className="topbar-left">
        <img src="/로고.png" alt="고교학점제 로고" className="school-logo" />
        <span className="school-name">고교학점제 수강신청</span>
      </div>
      <div className="topbar-center">
        <span className="semester-title">{semester} 수강신청</span>
      </div>
      <div className="topbar-right">
        <button className="logout-icon-btn" title="로그아웃">
          <LogOut size={20} />
          <span className="logout-text" style={{ fontSize: '0.95rem' }}>로그아웃</span>
        </button>
      </div>
    </header>
  );
};

export default StudentTopBar; 