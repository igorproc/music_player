import { Outlet } from 'react-router-dom'
import '../styles/LayoutAuth.css'

function LayoutAuth () {
  return (
    <div className="layout__auth auth">
      <Outlet />
    </div>
  )
}

export default LayoutAuth
