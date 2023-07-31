import NavBarMenuLink from './NavBarMenuLink/NavBarMenuLink'
import NavBarMenuGroup from './NavBarMenuGroup/NavBarMenuGroup'

import css from './navBarMenu.module.css'

export const links = [
  {
    id: 0,
    to: 'portfolio',
    text: 'Portfolio',
  },
  {
    id: 1,
    to: 'resume',
    text: 'Resume',
  },
  {
    id: 2,
    to: 'contact',
    text: 'Contact',
  },
]

const NavBarMenu = () => {
  return (
    <nav
      aria-labelledby='main-nav-aria-label'
      className={`${css.NavBarMenu} ${css.menu}`}
    >
      <span id='main-nav-aria-label' className='visually-hidden'>
        Main Navigation
      </span>

      {links.map((link) => (
        <NavBarMenuLink className={`${css.Link} ${css.link} ${css.NavBarMenuLink}`} to={link.to} key={link.id} text={link.text} />
      ))}
      <NavBarMenuGroup />
    </nav>
  )
}

export default NavBarMenu
