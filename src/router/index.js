import { Route, Routes } from 'react-router-dom'

// layouts
import LayoutMain from '../layouts/LayoutMain'
import LayoutAuth from '../layouts/LayoutAuth'

// views
import Main from '../views/Main'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

// views errors
import PageNotFound from '../views/PageNotFound'

function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<LayoutAuth />}>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Route>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Main />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
