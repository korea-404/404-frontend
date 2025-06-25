// src/components/LectureFilterBox.tsx
import React from 'react';
import '../styles/LectureFilterBox.css';

const LectureFilterBox: React.FC = () => {
  return (
    <div className="lecture-filter-box">
      <div className="filter-grid">
        <select><option>2025</option></select>
        <select>
          <option>1학기</option>
          <option>2학기</option>
          <option>하계 계절학기</option>
          <option>동계 계절학기</option>
        </select>

        <select><option>전체 학년</option></select>
        <select><option>전체 계열</option></select>
        <select><option>전체 과목구분</option></select>

        <input type="text" placeholder="과목명" />
        <input type="text" placeholder="교사명" />
        <input type="text" placeholder="과목코드" />
      </div>

      <div className="filter-button-container">
        <button className="search-button">조회</button>
      </div>
    </div>
  );
};

export default LectureFilterBox;
