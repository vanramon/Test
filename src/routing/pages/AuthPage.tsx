import { useState } from 'react';

import { TOKEN_LS_KEY, useAuthStore } from '../../store/auth.store';
import { login } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'

export const AuthPage = () => {
  const { setIsAuth } = useAuthStore();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');

  const [error, setError] = useState(null);
  const [isLogging, setIsLogging] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogging(true);
    setError(null);

    login(username, password)
      .then(({ token }) => {
        setIsAuth(true);
        navigate('/', { replace: true });
        localStorage.setItem(TOKEN_LS_KEY, token);
      })
      .catch((error) => {
        console.error('Authentication failed:', error);
        setError(error.message);
        setIsLogging(false);
      });
  };

  return (
    <div className="auth-container">
      <div className="input-group">
        <label className="input-label">Username:</label>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Password:</label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button
        className="login-button"
        disabled={isLogging}
        onClick={handleLogin}
      >
        {isLogging ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};
