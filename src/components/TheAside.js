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
          <div className="the-aside__item">
            <i className="fas fa-home fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Главная</span>
          </div>
          <div className="the-aside__item">
            <i className="fas fa-search fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Поиск</span>
          </div>
          <div className="the-aside__item">
            <i className="fas fa-bars fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Библиотека</span>
          </div>
          <div className="the-aside__item the-aside__item_spacer">
            <i className="fas fa-plus fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Создать Плейлист</span>
          </div>
          <div className="the-aside__item">
            <i className="fas fa-heart fa-lg the-aside__icon"></i>
            <span className="the-aside__label">Любимые треки</span>
          </div>
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
