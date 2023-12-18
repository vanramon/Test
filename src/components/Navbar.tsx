import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { TOKEN_LS_KEY, useAuthStore } from '../store/auth.store';

import '../styles/navbar.css';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuthStore();
  console.log('isAuth', isAuth);

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem(TOKEN_LS_KEY);
  };

  return (
    <div className="navContainer">
      <nav className="nav">
        {isAuth ? (
          <Fragment>
            <div className="navBtn">
              <Link to="/">
                <button>Главная страница</button>
              </Link>
              <Link to="/browse">
                <button>Информация</button>
              </Link>
            </div>
            <div className="authBtn">
            <Link to="/">
            <button onClick={handleLogout}>Выйти</button>
              </Link>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="navBtn">
              <Link to="/">
                <button>Главная страница</button>
              </Link>
            </div>
            <div className="authBtn">
              <Link to="/login">
                <button>Авторизация</button>
              </Link>
            </div>
          </Fragment>
        )}
      </nav>
    </div>
  );
};
