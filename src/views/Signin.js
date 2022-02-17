import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import api from '../api'
import handler from '../api/handler'

function Signin () {
  const navigate = useNavigate('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [helper, setHelper] = useState('')
  const login = (e) => {
    e.preventDefault() 
    api.login(email, password).then((response) => {
      if(response.data.code === 200){
        localStorage.setItem('jwt', response.data.jwt)
        document.cookie = 'refresh=' + response.data.refresh
        navigate('/')
      } else {
        const message = handler.user(response.data.code)
        setHelper(message) 
      }
    })
  }
  return (
    <div className="auth__container">
      <div className="auth__brand">
        <i className="fab fa-spotify fa-3x"></i>
        <div className="auth__name">SpotyFree</div>
      </div>
      <div className="auth__title auth__title-size">
      Чтобы продолжить, войдите в SpotyFree.
      </div>
      <form className="auth-form auth__form">
        <label className="auth-form__label">
          Электронная почты
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Пароль
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="auth-form__input"></input>
        </label>
        <Link className="auth-form__link auth-form__forgot" to={'/forgot_password'}>Забыли пароль?</Link>
        <div className="auth-form__passwords">
          <label>
          Запомнить меня(не работает)
            <input type="checkbox" className=""></input>
          </label>
        <button className="auth__login" type="button" onClick={login}>Войти</button>
        </div>
        {helper !== '' ? (
          <div>{helper}</div>
        ): ''}
      </form>
    </div>
  )
}

export default Signin
