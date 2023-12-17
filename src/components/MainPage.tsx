import React from 'react';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <div>
      <h1>Главная страница</h1>
      <h3>Для доступа к информации вторизируйтесь!</h3>
      <Link to={'/login'}>
        <button>Авторизиция</button>
      </Link>
    </div>
  );
}
