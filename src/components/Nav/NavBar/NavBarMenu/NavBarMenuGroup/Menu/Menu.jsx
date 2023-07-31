import { Link } from 'react-router-dom'
import MenuGroup from './MenuGroup/MenuGroup'

import css from './menu.module.css'

const Menu = () => {
    return (
        <div className={css.Menu}>
            <div className={css.items}>
                <div className={css.MenuLink}>
                    <Link className={css.link} to='about'>About</Link>
                </div>
                <MenuGroup />
            </div>
        </div>
    )
}

export default Menu