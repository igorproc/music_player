import { Link } from 'react-router-dom'

function Signup () {
  return (
    <div className="auth__container">
      <div className="auth__brand">
        <i className="fab fa-spotify fa-3x"></i>
        <div className="auth__name">SpotyFree</div>
      </div>
      <div className="auth__title">
        Зарегистрируйтесь и слушайте бесплатно
      </div>
      <form className="auth-form auth__form">
        <div className="auth-form__title">
          Укажите электронную почту и пароль
        </div>
        <label className="auth-form__label">
          Ваш адрес электронной почты
          <input type="email" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Придумайте пароль
          <input type="password" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Ваше имя
          <input type="text" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Ваша дата рождения
          <div className="auth-form__data">
            <input className="auth-form__input"></input>
            <select className="auth-form__input">
              <option className="auth-form__select" value="mount01">Январь</option>
              <option className="auth-form__select" value="mount02">Февраль</option>
              <option className="auth-form__select" value="mount03">Март</option>
              <option className="auth-form__select" value="mount04">Апрель</option>
              <option className="auth-form__select" value="mount05">Май</option>
              <option className="auth-form__select" value="mount06">Июнь</option>
              <option className="auth-form__select" value="mount07">Июль</option>
              <option className="auth-form__select" value="mount08">Август</option>
              <option className="auth-form__select" value="mount09">Сентябрь</option>
              <option className="auth-form__select" value="mount10">Октябрь</option>
              <option className="auth-form__select" value="mount11">Ноябрь</option>
              <option className="auth-form__select" value="mount12">Декабрь</option>
            </select>
            <input className="auth-form__input"></input>
          </div>
        </label>
        <label className="auth-form__label">
          Укажите пол
          <div className="auth-form__radio">
            <label className="auth-form__gender">
              <input name="gender" value="female" type="radio" className="auth-form__input auth-form__input_weidth"></input>
              Мужчина
            </label>
            <label className="auth-form__gender">
              <input name="gender" value="female" type="radio" className="auth-form__input auth-form__input_weidth"></input>
              Женщина
            </label>
          </div>
        </label>
      </form>
      <Link className="auth__btn" to={'/'}>Зарегистрироваться</Link>
    </div>
  )
}

export default Signup
