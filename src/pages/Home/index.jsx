import { Link } from 'react-router-dom'
import avataaar from './../../assets/imgs/avatar.png'

import css from './home.module.css'
import Features from '../../components/Features/Features'

const Home = () => {
  return (
    <div className={css.Home}>
      <div className={`${css.Hero} ${css['has-image']} ${css.HomeHero}`}>
        <div className={css.container}>
          <div className={css.main}>
            <h1 className={css.name}>
              <span className={css.clip}>Andrew J Hughes</span>
            </h1>
            <p className={css.text}>Frontend Web Developer</p>
            <p className={css.tagline}>
              Empowering Developers to Build Amazing Websites
            </p>
            <div className={css.actions}>
              <div className={css.action}>
                <Link
                  className={`${css.Button} ${css.medium} ${css.brand}`}
                  to='/portfolio/'
                >
                  Latest Projects
                </Link>
              </div>
              <div className={css.action}>
                <a
                  className={`${css.Button} ${css.medium} ${css.alt}`}
                  href='https://github.com/ajhughesdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <div className={css['image-container']}>
              <div className={css['image-bg']}></div>
              <img
                src={avataaar}
                alt='avatar'
                className={`${css.Image} ${css['img-src']}`}
              />
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  )
}
export default Home
