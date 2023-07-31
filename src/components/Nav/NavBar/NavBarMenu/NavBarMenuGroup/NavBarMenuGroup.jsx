import { useState } from 'react'
import Menu from './Menu/Menu'

import css from './navBarMenuGroup.module.css'

const NavBarMenuGroup = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMouseEnter = () => setIsExpanded(true)
  const handleMouseLeave = () => setIsExpanded(false)

  return (
    <div
      className={css.Flyout}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type='button'
        className={css.button}
        aria-haspopup='true'
        aria-expanded={isExpanded ? 'true' : 'false'}
      >
        <span className={css.text}>
          Resources
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            focusable='false'
            viewBox='0 0 24 24'
            className={css['text-icon']}
          >
            <path d='M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z'></path>
          </svg>
        </span>
      </button>
      <div className={css.menu}>
        <Menu />
      </div>
    </div>
  )
}

export default NavBarMenuGroup
