import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './pages/Home'

import css from './app.module.css'
import Footer from './components/Footer/Footer'

const App = () => {
  const [navScreenVisible, setNavScreenVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  const toggleNavScreen = () => setNavScreenVisible(!navScreenVisible)

  return (
    <div className={`${css.Layout} ${navScreenVisible ? 'no-overscroll' : ''}`}>
      <span ref={ref}></span>
      <span tabIndex='-1'></span>
      <a href='#Content' className={`${css.SkipLink} visually-hidden`}>
        Skip to content
      </a>
      <Nav
        isInView={isInView}
        navScreenVisible={navScreenVisible}
        toggleNavScreen={toggleNavScreen}
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path='portfolio' element={<h1>Portfolio</h1>} />
        <Route path='resume' element={<h1>Resume</h1>} />
        <Route path='contact' element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
