import MenuLink from './MenuLink/MenuLink'

import css from './menuGroup.module.css'

const MenuGroup = () => {
    return (
        <div className={css.MenuGroup}>
            <MenuLink />
        </div>
    )
}

export default MenuGroup