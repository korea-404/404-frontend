// src/context/UserContext.tsx
import React, { createContext, useContext } from 'react';

export interface User {
  name: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // 🧪 임시 사용자 정보 (나중에 로그인 정보로 교체)
  const mockUser: User = {
    name: '홍길동',
    role: 'STUDENT',
  };

  return (
    <UserContext.Provider value={mockUser}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
