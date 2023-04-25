import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../../../assets/imgs/avataaar.svg'

import css from './navBarTitle.module.css'

const NavBarTitle = ({ isVisible, toggleNavScreen }) => {
  return (
    <div className='NavBarTitle'>
      <Link
        to='/'
        className={css.title}
        onClick={() => isVisible && toggleNavScreen()}
      >
        <Logo className={`Image ${css.logo}`} height={24} />
        ajhughes.dev
      </Link>
    </div>
  )
}
export default NavBarTitle
