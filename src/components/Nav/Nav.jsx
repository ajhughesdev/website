import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import NavBar from './NavBar/NavBar'
import NavScreen from './NavScreen/NavScreen'

import css from './nav.module.css'

const Nav = ({ isInView, navScreenVisible, toggleNavScreen }) => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const storedIsDark = localStorage.getItem('ajhughes.dev-prefers-darktheme')
  const initialIsDark =
    storedIsDark !== null ? JSON.parse(storedIsDark) : prefersDarkMode

  const [darkMode, setDarkMode] = useState(initialIsDark)
  const html = useRef(document.querySelector('html'))

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      html.current.classList.add('dark')
      localStorage.setItem('ajhughes.dev-prefers-darktheme', 'true')
    } else {
      html.current.classList.remove('dark')
      localStorage.setItem('ajhughes.dev-prefers-darktheme', 'false')
    }
  }, [darkMode, html])

  return (
    <header className={css.Nav}>
      <NavBar
        isInView={isInView}
        toggleNavScreen={toggleNavScreen}
        isVisible={navScreenVisible}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <AnimatePresence>
        {navScreenVisible && (
          <NavScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        )}
      </AnimatePresence>
    </header>
  )
}
export default Nav
