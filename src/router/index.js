import { Route, Routes } from 'react-router-dom'

// layouts
import LayoutMain from '../layouts/LayoutMain'

// views
import Main from '../views/Main'
import Welcome from '../views/Welcome'

// views errors
import PageNotFound from '../views/PageNotFound'

function AppRouter () {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Main />}></Route>
        <Route path="welcome" element={<Welcome />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
