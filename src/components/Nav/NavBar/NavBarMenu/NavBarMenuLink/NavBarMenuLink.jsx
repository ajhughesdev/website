import { NavLink } from 'react-router-dom'
import css from './navBarMenuLink.module.css'

const NavBarMenuLink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={`${css.Link} ${css.link} ${css.NavBarMenuLink}`}
      tabIndex='0'
    >
      {text}
    </NavLink>
  )
}

export default NavBarMenuLink
