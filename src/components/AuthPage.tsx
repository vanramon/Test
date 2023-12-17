import { useState } from 'react';
import { useStore } from '../store/Store';
import { FakeLogin } from '../api/FakeServer';

export const AuthPage = () => {
  const { username, password, isLoggedIn, setUsername, setPassword, setIsLoggedIn } = useStore();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setError(null);

    FakeLogin(username, password)
      .then(() => {
        console.log('Authentication successful');
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      })
      .catch((error) => {
        console.error('Authentication failed:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div>{error}</div>}
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      )}
    </div>
  );
};
