import { motion } from 'framer-motion'

import { links } from './../NavBar/NavBarMenu/NavBarMenu'
import { SwitchAppearance } from './../NavBar/NavBarAppearance/NavBarAppearance'
import { socials, Icon } from './../NavBar/NavBarSocialLinks/NavBarSocialLinks'

import css from './navScreen.module.css'

const NavScreen = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.div
      key='navscreen'
      className={css.NavScreen}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
    >
      <div className={css.container}>
        <nav className={`${css.NavScreenMenu} ${css.menu}`}>
          {links.map((link) => (
            <a
              key={link.id}
              className={`${css.Link} ${css.link} ${css.NavScreenMenuLink}`}
              href={`/${link.to}/`}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className={`${css.NavScreenAppearance} ${css.appearance}`}>
          <p className={css.text}>Appearance</p>
          <SwitchAppearance
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
        <div
          className={`${css.SocialLinks} ${css.NavScreenSocialLinks} ${css['social-links']}`}
        >
          {socials.map((link) => (
            <a
              href={link.to}
              key={link.id}
              className={css.SocialLink}
              aria-label={link.text}
              target='_blank'
              rel='noopener'
            >
              <Icon icon={link.icon} role='img' />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
export default NavScreen
