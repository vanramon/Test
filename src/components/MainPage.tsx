import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        <h1>Главная страница</h1>
        <h3>Для доступа к информации вторизируйтесь!</h3>
        <button type='button'>Авторизаци</button>
    </div>

  )
}
