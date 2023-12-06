import { Navbar, Footer, Container } from '@/components'
import './index.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const Layout = () => {
  return (
    <div className="w-full">
      <ToastContainer theme="colored" />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
export default Layout
