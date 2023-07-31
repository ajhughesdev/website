import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { links } from './../NavBar/NavBarMenu/NavBarMenu'
import { resourceLinks } from './../NavBar/NavBarMenu/NavBarMenuGroup/Menu/MenuGroup/MenuLink/MenuLink'
import { SwitchAppearance } from './../NavBar/NavBarAppearance/NavBarAppearance'
import { socials, Icon } from './../NavBar/NavBarSocialLinks/NavBarSocialLinks'

import css from './navScreen.module.css'

const NavScreen = ({ darkMode, toggleDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => setIsExpanded(!isExpanded)

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
          <div className={`${css.NavScreenMenuGroup} ${isExpanded ? css.open : ''}`}>
            <button className={css.button} aria-controls="NavScreenGroup-resources" aria-expanded={isExpanded ? 'true' : 'false'} onClick={handleClick}>
              <span className={css['button-text']}>Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={css['button-icon']}>
                <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
              </svg>
            </button>
            <div id="NavScreenGroup-resources" className={css.items}>
              <div className={css.item}>
                <a href='about' className={`${css.Link} ${css.link} ${css.NavScreenMenuGroupLink}`}>
                  About
                </a>
              </div>
              <div className={css.group}>
                <div className={css.NavScreenMenuGroupSection}>
                  {resourceLinks.map((link) => (
                    <a
                      key={link.id}
                      className={`${css.Link} ${css.link} ${css.NavScreenMenuGroupLink} ${css['external-link-icon']}`}
                      href={link.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {link.text}
                    </a>
                  ))}

                </div>
              </div>
            </div>
          </div>
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
