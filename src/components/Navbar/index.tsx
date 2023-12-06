import { useEffect, useState } from 'react'
import { Logo } from '../UI/Logo'
import { Divide as Hamburger } from 'hamburger-react'
import { NavItem, items } from '../../contents/Navbar'
import { Link } from 'react-router-dom'
import { AuthModal } from '../Auth'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [navbarClass, setNavbarClass] = useState('')
  const [tempLocation, setTempLocation] = useState('/')
  const [authModalIsOpen, setAuthIsOpen] = useState(false);

  const showNav = () => {
    setNav((v) => !v)
  }
  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    const scrollY = window.pageYOffset
    if (scrollY > 70) {
      setNavbarClass(
        ' py-[4px] md:py-[8px] lg:py-[12px] xl:py-[15px] backdrop-blur shadow-[0_0_9px_1px_rgba(0,0,0,0.5)]',
      )
    } else {
      setNavbarClass('')
    }
  }

  function closeAuthModal() {
    setAuthIsOpen(false);
  }

  function openModal() {
    setAuthIsOpen(true);
  }

  useEffect(() => {
    setTempLocation(location.pathname)
  }, [])

  return (
    <div
      className={
        'w-full fixed z-50 top-0 flex justify-center transition-all duration-300 py-[10px] lg:py-[33px] md:py-[15px]  ' +
        navbarClass
      }
    >
      <header className={`w-full  max-w-[1920px] flex justify-between items-center px-9 xl:px-[180px] lg:px-[50px] `}>
        <Logo />
        {/* desktop nav */}
        <nav className="hidden lg:flex gap-20 ">
          {items.map((item: NavItem, index: number) => (
            <Link
              key={index}
              to={item.link}
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
              className={
                'text-cblack-500 font-medium hover:cursor-pointer active:text-[#9C11F3] active:font-bold navbar_active ' +
                (tempLocation == item.link && ' text-[#9c11f3] font-bold')
              }
            >
              {item.title}
            </Link>
          ))}
          <a className={'text-cblack-500 font-medium hover:cursor-pointer navbar_active'} onClick={()=> openModal()}><span>Login</span></a>
        </nav>

        {/* hamburger */}
        {nav ? (
          <i className="fixed right-[30px] z-50 lg:hidden">
            <Hamburger onToggle={showNav} toggled={nav} />
          </i>
        ) : (
          <i className="lg:hidden">
            <Hamburger onToggle={showNav} toggled={nav} />
          </i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[300px] right-0 fixed flex flex-col justify-around items-center w-full lg:hidden bg-white shadow-[0_0_9px_1px_rgba(0,0,0,0.5)] z-40 duration-1000 ${
            nav ? 'top-[0px]' : '-top-[300px]'
          } `}
        >
          {items.map((item: NavItem, index: number) => (
            <a
              key={index}
              href={item.link}
              className=" text-cblack-500 font-medium hover:cursor-pointer"
              onClick={() => showNav()}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </header>
      <AuthModal
        closeModal={closeAuthModal}
        authModalIsOpen={authModalIsOpen}
      />
    </div>
  )
}
