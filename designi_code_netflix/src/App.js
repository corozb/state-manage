import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/layout/Header/header.layout'
import SideBar from './components/layout/SideBar/left-nav.layout'
import MainContainer from './components/layout/main-container.layout'
import MainContent from './components/layout/main-content'
import PrivateRoutes from './routes/private.routes'
import PublicRoutes from './routes/public.routes'
import Footer from './components/layout/Footer/footer.layout'
import './assets/scss/layout.scss'
import LayoutProvider from './hooks/layout/layout.provider'
import UserProvider from './hooks/user/user.provider'
import { isAuthenticated } from './data/service/auth/authetication'
import Routes from './routes/routes'

function App() {
  const isAuth = isAuthenticated()

  return (
    <>
      <LayoutProvider>
        <MainContainer>
          <UserProvider>
            <Header />
            <SideBar />
            <MainContent>
              {/* {isAuth ? <PrivateRoutes /> : <PublicRoutes />} */}
              <Routes />
            </MainContent>
          </UserProvider>
          <Footer />
        </MainContainer>
      </LayoutProvider>
    </>
  )
}

export default App
