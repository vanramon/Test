import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navContainer'>
        <nav className='nav'>
          <div className='navBtn'>
          <Link to={'/'}><button>Главная страница</button></Link>
          <Link to={'/browse'}><button>Информация</button></Link>
          </div>
          <div className='authBtn'>
          <Link to={'/login'}><button>Авторизиция</button></Link>
          </div>
        </nav>
    </div>
  )
}
