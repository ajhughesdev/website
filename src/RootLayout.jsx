import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useInView } from 'framer-motion'
import AdSense from 'react-adsense'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const RootLayout = ({ darkMode, toggleDarkMode }) => {
  const [navScreenVisible, setNavScreenVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const isHome = window.location.pathname === '/'

  const toggleNavScreen = () => setNavScreenVisible(!navScreenVisible)

  return (
    <div className={`Layout ${navScreenVisible ? 'no-overscroll' : 'overscroll'}`}>
      <span ref={ref}></span>
      <span tabIndex='-1'></span>
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
      {window.matchMedia('max-width: 767px').matches && (
        <AdSense.Google
          key={Math.random()}
          client='ca-pub-7566894593607519'
          slot='8471397015'
          style={{
            display: 'inline-block',
            width: '300px',
            height: '250px',
            margin: '1rem auto',
          }}
          format=''
        />
      )}
      {window.matchMedia('min-width: 768px').matches && (
        <AdSense.Google
          key={Math.random()}
          client='ca-pub-7566894593607519'
          slot='4080392724'
          style={{
            display: 'inline-block',
            width: '728px',
            height: '90px',
            margin: '1rem auto',
          }}
          format=''
        />
      )}
      <Footer />
    </div>
  )
}

export default RootLayout
