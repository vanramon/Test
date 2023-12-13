import React from 'react'

export default function AuthPage() {
  return (
    <div>
        <h1>Авторизация</h1>
        <form>
            <label>
                login
                <input type="text" />
            </label>
            <label>
                Password
                <input type="password" />
            </label>
            <button type='submit'>Авторизироватся</button>
        </form>
    </div>
  )
}
