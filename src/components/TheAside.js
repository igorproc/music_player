import { Link } from 'react-router-dom'
import '../styles/TheAside.css'

function TheAside () {
  return (
    <aside className="the-aside">
      <div className="the-aside__container">
        <div className="the-aside__brand">
          <i className="fab fa-spotify fa-2x the-aside__logo"></i>
          <div className="the-aside__name">SpotyFree</div>
        </div>
        <nav className="the-aside__menu">
          <Link className="the-aside__item" to={'/'}>
            <i className="fas fa-home fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Главная</span>
          </Link>
          <Link className="the-aside__item" to={'/search'}>
            <i className="fas fa-search fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Поиск</span>
          </Link>
          <Link className="the-aside__item" to={'/library'}>
            <i className="fas fa-bars fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Библиотека</span>
          </Link>
          <Link className="the-aside__item the-aside__item_spacer" to={'/playlist/create'}>
            <i className="fas fa-plus fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Создать Плейлист</span>
          </Link>
          <Link className="the-aside__item" to={'/collection/playlist'}>
            <i className="fas fa-heart fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Любимые треки</span>
          </Link>
        </nav>
        <footer className="the-aside__contact">
          <a href="https://t.me/pr0s1k" target="_blank" className="the-aside__link">Мой Телеграм</a>
          <a href="https://github.com/igorproc/music_player" target="_blank" className="the-aside__link">Проект на ГитХабе</a>
        </footer>
      </div>
    </aside>
  )
}

export default TheAside
