import TheFooter from '../components/TheFooter'
import TheHeader from '../components/TheHeader'
import TheAside from '../components/TheAside'
import TheWrapper from '../components/TheWrapper'
import '../styles/LayoutMain.css'
import TheBannerForceAuth from '../components/TheBannerForceAuth'

function LayoutMain () {
  return (
    <>
    <div className="layout__main">
      <div className="layout__aside">
        <TheAside />
      </div>
      <div className="layout__wrapper">
        <TheHeader />
        <TheWrapper />
        <TheFooter />
        <TheBannerForceAuth />
      </div>
    </div>
    </>
  )
}

export default LayoutMain
