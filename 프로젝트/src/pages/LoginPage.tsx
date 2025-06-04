import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  console.log('✅ LoginPage 렌더링됨'); 

  return (
    <>
      <Navbar />
      <main className="login-area">
        <LoginForm />
      </main>
    </>
  );
};

export default LoginPage;
