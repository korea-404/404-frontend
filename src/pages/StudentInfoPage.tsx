import React from 'react';
import StudentSidebar from '../components/StudentSidebar';
import StudentTopBar from '../components/StudentTopBar';
import '../styles/pages/StudentInfoPage.css';

const studentInfo = {
  school: '서울고등학교',
  department: '인문계열',
  grade: '2학년',
  name: '홍길동',
  semester: '2025년 1학기'
};

const basicInfo = [
  { label: '학교', value: studentInfo.school },
  { label: '계열', value: studentInfo.department },
  { label: '학년', value: studentInfo.grade },
  { label: '이름', value: studentInfo.name },
  { label: '년도/학기', value: studentInfo.semester }
];

const StudentInfoPage: React.FC = () => {
  return (
    <div>
      <StudentTopBar semester={studentInfo.semester} />
      <div className="student-info-layout">
        <StudentSidebar info={studentInfo} />
        <div className="student-main-area">
          <h1 className="student-title">학생 기본정보</h1>
          <table className="student-info-table">
            <tbody>
              {basicInfo.map((item) => (
                <tr key={item.label}>
                  <th>{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoPage; 