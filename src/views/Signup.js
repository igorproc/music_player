import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import api from '../api'
import handler from '../api/handler'

function Signup (props) {
  const navigate = useNavigate('')
  const [day, setDay] = useState('')
  const [mounth, setMounth] = useState('')
  const [year, setYear] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [helper, setHelper] = useState('')
  const register = (e) => {
    e.preventDefault()
    const dateBirth = (day.length === 1) ? `0${day}${mounth}${year}` : (day+mounth+year)
    api.register(email, password, name, dateBirth, gender).then((response) => {
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
      <div className="auth__title">
        Зарегистрируйтесь и слушайте бесплатно
      </div>
      <form className="auth-form auth__form">
        <div className="auth-form__title">
          Укажите электронную почту и пароль
        </div>
        <label className="auth-form__label">
          Ваш адрес электронной почты
          <input value={ email } onChange={ (e) => setEmail(e.target.value) } type="email" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Придумайте пароль
          <input value={ password } onChange={ (e) => setPassword(e.target.value) } type="password" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Ваше имя
          <input value={ name } onChange={ (e) => setName(e.target.value) } type="text" className="auth-form__input"></input>
        </label>
        <label className="auth-form__label">
          Ваша дата рождения
          <div className="auth-form__data">
            <input value={ day } onChange={ (e) => setDay(e.target.value) } className="auth-form__input"></input>
            <select onChange={ (e) => setMounth(e.target.value) } className="auth-form__input">
              <option className="auth-form__select" value="01">Январь</option>
              <option className="auth-form__select" value="02">Февраль</option>
              <option className="auth-form__select" value="03">Март</option>
              <option className="auth-form__select" value="04">Апрель</option>
              <option className="auth-form__select" value="05">Май</option>
              <option className="auth-form__select" value="06">Июнь</option>
              <option className="auth-form__select" value="07">Июль</option>
              <option className="auth-form__select" value="08">Август</option>
              <option className="auth-form__select" value="09">Сентябрь</option>
              <option className="auth-form__select" value="10">Октябрь</option>
              <option className="auth-form__select" value="11">Ноябрь</option>
              <option className="auth-form__select" value="12">Декабрь</option>
            </select>
            <input value={ year } onChange={ (e) => setYear(e.target.value) } className="auth-form__input"></input>
          </div>
        </label>
        <label className="auth-form__label">
          Укажите пол
          <div value={ gender } onChange={ (e) => setGender(e.target.value) } className="auth-form__radio">
            <label className="auth-form__gender">
              <input value="male" name="gender" type="radio" className="auth-form__input auth-form__input_weidth"></input>
              Мужчина
            </label>
            <label className="auth-form__gender">
              <input value="female" name="gender" value="female" type="radio" className="auth-form__input auth-form__input_weidth"></input>
              Женщина
            </label>
          </div>
        </label>
      </form>
      <button className="auth__btn" type="button" onClick={ register }>Зарегистрироваться</button>
      {helper !== '' ? (
          <div>{helper}</div>
        ): ''}
    </div>
  )
}

export default Signup
