import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Layout from '../components/Layout'; // ✅ 공통 레이아웃

const RegisterTeacherPage: React.FC = () => {
  return (
    <Layout>
      <RegisterForm role="TEACHER" />
    </Layout>
  );
};

export default RegisterTeacherPage;
