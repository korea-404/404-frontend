import React from 'react';
import StudentSidebar from '../components/StudentSidebar';
import StudentTopBar from '../components/StudentTopBar';
import '../styles/pages/StudentInfoPage.css';
import '../styles/pages/LectureTimetablePage.css';

const studentInfo = {
  school: '서울고등학교',
  department: '인문계열',
  grade: '2학년',
  name: '홍길동',
  semester: '2025년 1학기'
};

const LectureTimetablePage: React.FC = () => {
  return (
    <div>
      <StudentTopBar semester={studentInfo.semester} />
      <div className="student-info-layout">
        <div className="layout-row">
          <StudentSidebar info={studentInfo} />
          <div className="main-content">
            {/* 상단 개설강좌조회 버튼 */}
            <button className="lecture-open-btn">개설강좌조회</button>

            {/* 연파랑 필터 박스 */}
            <div className="lecture-filter-box">
              {/* 1행 */}
              <div className="filter-row">
                <label>학년도</label>
                <select><option>2025</option></select>

                <label>학기</label>
                <select><option>1학기</option></select>

                <label>학년</label>
                <select><option>전체</option></select>
              </div>

              {/* 2행 */}
              <div className="filter-row">
                <label>계열</label>
                <select><option>전체</option></select>

                <label>과목구분</label>
                <select><option>전체</option></select>
              </div>

              {/* 3행 */}
              <div className="filter-row">
                <label>과목명</label>
                <input type="text" placeholder="과목명" />

                <label>교사명</label>
                <input type="text" placeholder="교사명" />

                <label>과목코드</label>
                <input type="text" placeholder="과목코드" />
              </div>

              {/* 조회 버튼 */}
              <div className="button-row">
                <button className="search-button">조회</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureTimetablePage;
