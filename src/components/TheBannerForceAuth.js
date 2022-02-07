import '../styles/TheBannerForceAuth.css'

function TheBannerForceAuth () {
  return (
    <div className="banner-force-auth">
      <div className="banner-force-auth__label">
        <div className="banner-force-auth__title">
          предварительный просмотр SpotyFree
        </div>
        <div className="banner-force-auth__subtitle">
          Зарегистрируйся, чтобы слушать музыку
          и подкасты без ограничений. Иногда мы будем показывать рекламу,
          но ты сможешь пользоваться сервисом бесплатно!
        </div>
      </div>
      <button className="banner-force-auth__button">
        зарегестрироваться
      </button>
    </div>
  )
}

export default TheBannerForceAuth
