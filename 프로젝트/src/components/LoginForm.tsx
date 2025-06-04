import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [role, setRole] = useState<'학생' | '교사' | '관리자'>('학생');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleClear = (field: 'id' | 'pw') => {
    field === 'id' ? setId('') : setPw('');
  };

  return (
    <div className="login-box">
      <h1>고교학점제 수강신청</h1>

      <div className="tabs">
        {['학생', '교사', '관리자'].map((r) => (
          <button
            key={r}
            className={`tab ${role === r ? 'active' : ''}`}
            onClick={() => setRole(r as typeof role)}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="form">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {id && (
            <button className="clear-btn" onClick={() => handleClear('id')}>
              ×
            </button>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type={showPw ? 'text' : 'password'}
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          {pw && (
            <>
              <button
                className="toggle-pw-btn"
                onClick={() => setShowPw(!showPw)}
                aria-label="비밀번호 보기"
              >
                {showPw ? (
                  <span className="eye-icon eye-open">
                    {/* 눈 뜬 아이콘 */}
                    <svg width="16" height="16" fill="none" stroke="#858484" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                ) : (
                  <span className="eye-icon eye-closed">
                    {/* 눈 감은 아이콘 */}
                    <svg width="16" height="16" fill="none" stroke="#858484" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <line x1="1" y1="1" x2="23" y2="23" stroke="#858484" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                )}
              </button>

              <button className="clear-btn" onClick={() => handleClear('pw')}>
                ×
              </button>
            </>
          )}
        </div>

        <button className="login-btn">로그인</button>

        <div className="links">
          <a href="#">아이디 찾기 / 비밀번호 찾기</a>
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
