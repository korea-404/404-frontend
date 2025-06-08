import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Layout from '../components/Layout'; // ✅ Navbar 대신 Layout 임포트

const RegisterStudentPage: React.FC = () => {
  return (
    <Layout>
      <RegisterForm role="STUDENT" />
    </Layout>
  );
};

export default RegisterStudentPage;
