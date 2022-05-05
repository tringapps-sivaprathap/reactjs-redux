import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <>
    <Header />
    <div className='middle-container'>
      <SideMenu />
      <MainContent />
    </div>
    <Footer />
    </>
  )
}

export default Layout