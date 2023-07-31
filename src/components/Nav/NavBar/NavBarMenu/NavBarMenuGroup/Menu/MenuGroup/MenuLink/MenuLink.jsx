import css from './menuLink.module.css'

export const resourceLinks = [
    {
        id: 0,
        url: 'https://twitter.com/ajhughesdev',
        text: 'Twitter',
    },
    {
        id: 1,
        url: 'https://cssjavascript.com',
        text: 'CSSJavaScript.com',
    },
    {
        id: 2,
        url: 'https://penetr8.me/forum',
        text: 'Penetr8.Me Community',
    }
]
const MenuLink = () => {
    return (
        <div className={css.MenuLink}>
            {resourceLinks.map((link) => (
                <a key={link.id} className={`${css.Link} ${css.link} ${css['external-link-icon']}`} href={link.url} target='_blank' rel='noreferrer'>
                    {link.text}
                </a>
            ))}
        </div>
    )
}

export default MenuLink