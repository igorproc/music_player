import { Outlet } from 'react-router-dom'

function TheWrapper () {
  return (
    <div className="the-wrapper">
      <Outlet />
    </div>
  )
}

export default TheWrapper
