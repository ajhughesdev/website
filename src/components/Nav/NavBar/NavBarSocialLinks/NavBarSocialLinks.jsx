import { ReactComponent as MastodonIcon } from './../../../../assets/imgs/mastodon-icon.svg'
import { ReactComponent as TwitterIcon } from './../../../../assets/imgs/twitter-icon.svg'
import { ReactComponent as LinkedInIcon } from './../../../../assets/imgs/linkedin-icon.svg'
import { ReactComponent as GitHubIcon } from './../../../../assets/imgs/github-icon.svg'

import css from './navBarSocialLinks.module.css'

export const socials = [
  {
    id: 0,
    to: 'https://mastodon.ajhughes.dev/@ajhughesdev',
    icon: MastodonIcon,
    text: 'mastodon',
  },
  {
    id: 1,
    to: 'https://twitter.com/ajhughesdev',
    icon: TwitterIcon,
    text: 'twitter',
  },
  {
    id: 2,
    to: 'https://linkedin.com/in/ajhughesdev',
    icon: LinkedInIcon,
    text: 'linkedin',
  },
  {
    id: 3,
    to: 'https://github.com/ajhughesdev',
    icon: GitHubIcon,
    text: 'github',
  },
]

export const Icon = (props) => {
  const { icon: TheIcon, ...restProps } = props
  return <TheIcon {...restProps} />
}

const NavBarSocialLinks = () => {
  return (
    <div
      className={`${css.SocialLinks} ${css.NavBarSocialLinks} ${css['social-links']}`}
    >
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
  )
}

export default NavBarSocialLinks
