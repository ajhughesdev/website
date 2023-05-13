import NavBarAppearance from './NavBarAppearance/NavBarAppearance'
import NavBarExtra from './NavBarExtra/NavBarExtra'
import NavBarMenu from './NavBarMenu/NavBarMenu'
import NavBarSocialLinks from './NavBarSocialLinks/NavBarSocialLinks'
import NavBarTitle from './NavBarTitle/NavBarTitle'

import css from './navBar.module.css'
import NavBarHamburger from './NavBarHamburger/NavBarHamburger'

const NavBar = ({
  toggleNavScreen,
  isVisible,
  darkMode,
  toggleDarkMode,
  isInView,
}) => {
  return (
    <>
      <div className={`${css.NavBar} ${!isInView ? css.fill : ''}`}>
        <div className={css.container}>
          <div className={css.title}>
            <NavBarTitle
              isVisible={isVisible}
              toggleNavScreen={toggleNavScreen}
            />
          </div>
          <div className={css.content}>
            <div className={css.curtain}></div>
            <div className={css['content-body']}>
              <NavBarMenu />
              <NavBarAppearance
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <NavBarSocialLinks />
              <NavBarExtra
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <NavBarHamburger
                isVisible={isVisible}
                toggleNavScreen={toggleNavScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
