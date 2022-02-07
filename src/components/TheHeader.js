import { Link } from 'react-router-dom'
import '../styles/TheHeader.css'

function TheHeader () {
  const arrowPrev = () => {
    // eslint-disable-next-line
    history.back()
  }
  const arrowNext = () => {
    // eslint-disable-next-line
    history.forward()
  }
  return (
    <header className="the-header">
      <div className="the-header__container">
        <div className="the-header__history">
          <i onClick={arrowPrev} class="fas fa-arrow-circle-left fa-lg the-header__arrow"></i>
          <i onClick={arrowNext} class="fas fa-arrow-circle-right fa-lg the-header__arrow"></i>
        </div>
        <div className="the-header__action">
          <nav className="the-header__navbar">
            <Link className="the-header__link" to={'/welcome'}>premium</Link>
            <Link className="the-header__link" to={'/faq'}>справка</Link>
            <Link className="the-header__link" to={'/download'}>скачать</Link>
            <span className="the-header__link the-header__link_disabled">|</span>
            <Link className="the-header__link" to={'/auth'}>зарегестрироваться</Link>
          </nav>
          <div className="the-header__auth">
            <button className="the-header__button the-header__button_fill">войти</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TheHeader
