import { AnimatePresence } from 'framer-motion'

import NavBar from './NavBar/NavBar'
import NavScreen from './NavScreen/NavScreen'

import css from './nav.module.css'

const Nav = ({ isInView, navScreenVisible, toggleNavScreen, darkMode, toggleDarkMode }) => {
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
