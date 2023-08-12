import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useInView } from 'framer-motion'
// import { Adsense } from '@ctrl/react-adsense'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

type RootLayoutProps = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const RootLayout = ({ darkMode, toggleDarkMode }: RootLayoutProps) => {
  const [navScreenVisible, setNavScreenVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const isHome = window.location.pathname === '/'

  const toggleNavScreen = () => setNavScreenVisible(!navScreenVisible)

  return (
    <div className={`Layout ${navScreenVisible ? 'no-overscroll' : ''}`}>
      <span ref={ref}></span>
      <span tabIndex={-1}></span>
      <a href='#Content' className='SkipLink visually-hidden'>
        Skip to content
      </a>
      <Nav
        isInView={isInView}
        navScreenVisible={navScreenVisible}
        toggleNavScreen={toggleNavScreen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <div className={`Content ${isHome ? 'is-home' : ''}`} id='Content'>
        <Outlet />
      </div>
      {/* <Adsense
        className='ad_unit'
        client='ca-pub-7566894593607519'
        slot='1087443004'
        format='auto'
      /> */}
      <Footer />
    </div>
  )
}

export default RootLayout