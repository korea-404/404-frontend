// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterSelectPage from '../pages/RegisterSelectPage'; // ✅ 추가
import RegisterStudentPage from '../pages/RegisterStudentPage';
import RegisterTeacherPage from '../pages/RegisterTeacherPage';
import FindIdPage from '../pages/FindIdPage';
import FindPasswordPage from '../pages/FindPasswordPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register/select" element={<RegisterSelectPage />} /> {}
        <Route path="/register/student" element={<RegisterStudentPage />} />
        <Route path="/register/teacher" element={<RegisterTeacherPage />} />
        <Route path="/find-id" element={<FindIdPage />} />
        <Route path="/find-password" element={<FindPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
