import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/components/StudentSidebar.css';

interface StudentSidebarProps {
  info: {
    school: string;
    department: string;
    grade: string;
    name: string;
    semester: string;
  };
}

const StudentSidebar: React.FC<StudentSidebarProps> = ({ info }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLectureTimetableClick = () => {
    navigate('/lecture-timetable');
  };

  const handleNoticeClick = () => {
    navigate('/student-info');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="student-sidebar-only-info">
      <div className="user-info-card-only">
        <div className="user-info-title">사용자 정보</div>
        <div className="user-info-list">
          <div className="user-info-row"><span className="user-info-label">학교</span>{info.school}</div>
          <div className="user-info-row"><span className="user-info-label">계열</span>{info.department}</div>
          <div className="user-info-row"><span className="user-info-label">학년</span>{info.grade}</div>
          <div className="user-info-row"><span className="user-info-label">이름</span>{info.name}</div>
          <div className="user-info-row"><span className="user-info-label">년도/학기</span>{info.semester}</div>
        </div>
      </div>
      <div className="sidebar-menu-list">
        <button 
          className={`sidebar-btn ${isActive('/student-info') ? 'notice' : ''}`} 
          onClick={handleNoticeClick}
        >
          공지사항
        </button>
        <button 
          className={`sidebar-btn ${isActive('/lecture-timetable') ? 'notice' : ''}`} 
          onClick={handleLectureTimetableClick}
        >
          과목시간표 조회
        </button>
        <button className="sidebar-btn">수강신청</button>
        <button className="sidebar-btn">수강신청 조회</button>
      </div>
    </aside>
  );
};

export default StudentSidebar; 