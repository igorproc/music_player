import { Link } from 'react-router-dom'

function Signin () {
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
          <input type="email" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Пароль
          <input type="password" className="auth-form__input"></input>
        </label>
        <div className="auth-form__passwords">
          <Link className="auth-form__link" to={'/forgot_password'}>Забыли пароль?</Link>
          <label>
          Запомнить меня
            <input type="checkbox" className=""></input>
          </label>
        </div>
      </form>
      <Link className="auth__login" to={'/'}>Войти</Link>
    </div>
  )
}

export default Signin
