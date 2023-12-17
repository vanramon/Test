import { Link } from 'react-router-dom';
import { useStore } from '../store/Store';

import '../styles/navbar.css';

export function Navbar() {
  const { isLoggedIn, setUsername, setPassword, setIsLoggedIn } = useStore();
  console.log(isLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="navContainer">
      {isLoggedIn ? (
        <nav className="nav">
          <div className="navBtn">
            <Link to={'/'}>
              <button>Главная страница</button>
            </Link>
            <Link to={'/browse'}>
              <button>Информация</button>
            </Link>
          </div>
          <div className="authBtn">
            <Link to={'/'}>
              <button onClick={handleLogout}>Выйти</button>
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div className="navBtn">
            <Link to={'/'}>
              <button>Главная страница</button>
            </Link>
          </div>
          <div className="authBtn">
            <Link to={'/login'}>
              <button>Авторизиция</button>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
