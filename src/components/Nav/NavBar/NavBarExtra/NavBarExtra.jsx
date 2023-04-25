import { useState } from 'react'
import { SwitchAppearance } from '../NavBarAppearance/NavBarAppearance'
import { socials, Icon } from '../NavBarSocialLinks/NavBarSocialLinks'

import css from './navBarExtra.module.css'

const NavBarExtra = ({ darkMode, toggleDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMouseEnter = () => setIsExpanded(true)
  const handleMouseLeave = () => setIsExpanded(false)

  return (
    <div
      className={`${css.Flyout} ${css.NavBarExtra}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type='button'
        className={css.button}
        aria-haspopup='true'
        aria-expanded={isExpanded ? 'true' : 'false'}
        aria-label='extra navigation'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 24 24'
          className={css.icon}
          data-v-38a74afb
        >
          <circle cx='12' cy='12' r='2'></circle>
          <circle cx='19' cy='12' r='2'></circle>
          <circle cx='5' cy='12' r='2'></circle>
        </svg>
      </button>
      <div className={css.menu}>
        <div className={css.Menu}>
          <div className={css.group}>
            <div className={`${css.item} ${css.appearance}`}>
              <p className={css.label}>Appearance</p>
              <div className={css['appearance-action']}>
                <SwitchAppearance
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </div>
            </div>
          </div>
          <div className={css.group}>
            <div className={`${css.item} ${css['social-links']}`}>
              <div className={`${css.SocialLinks} ${css['social-links-list']}`}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavBarExtra
