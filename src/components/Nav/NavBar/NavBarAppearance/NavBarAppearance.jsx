import { ReactComponent as SunIcon } from './../../../../assets/imgs/sun.svg'
import { ReactComponent as MoonIcon } from './../../../../assets/imgs/moon.svg'

import css from './navBarAppearance.module.css'

export const SwitchAppearance = ({ darkMode, toggleDarkMode }) => {
  return (
    <label title='toggle dark mode'>
      <button
        className={`${css.Switch} ${css.SwitchAppearance} ${
          darkMode ? css.dark : ''
        }`}
        type='button'
        role='switch'
        aria-label='toggle dark mode'
        aria-checked={darkMode ? 'true' : 'false'}
        onClick={toggleDarkMode}
      >
        <span className={css.check}>
          <span className={css.icon}>
            <SunIcon aria-hidden='true' focusable='false' className={css.sun} />
            <MoonIcon
              aria-hidden='true'
              focusable='false'
              className={css.moon}
            />
          </span>
        </span>
      </button>
    </label>
  )
}

const NavBarAppearance = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`${css.NavBarAppearance} ${css.appearance} appearance`}>
      <SwitchAppearance darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default NavBarAppearance
