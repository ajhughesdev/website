import css from './navBarHamburger.module.css'

const NavBarHamburger = ({ toggleNavScreen, isVisible }) => {
  return (
    <button
      type='button'
      className={`${css.NavBarHamburger} ${css.hamburger} ${
        isVisible ? css.active : ''
      } `}
      aria-label='mobile navigation'
      aria-expanded={isVisible ? 'true' : 'false'}
      aria-controls='NavScreen'
      onClick={toggleNavScreen}
    >
      <span className={css.container}>
        <span className={css.top}></span>
        <span className={css.middle}></span>
        <span className={css.bottom}></span>
      </span>
    </button>
  )
}
export default NavBarHamburger
