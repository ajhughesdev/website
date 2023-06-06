import { useState } from 'react'

import { projects } from './projects.js'
import { ReactComponent as GitHub } from './../../assets/imgs/github-icon.svg'
import { ReactComponent as Demo } from './../../assets/imgs/globe.svg'

import css from './portfolio.module.css'

const tagMap = {
  'javascript': 'js'
}

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  const normalizeSearchTerm = term => {
    return tagMap[term.toLowerCase()] || term
  }

  const filteredProjects = projects.filter(project => project.tags.some(tag => tag.toLowerCase().includes(normalizeSearchTerm(searchTerm).toLowerCase())))


  const projectsList = filteredProjects.map(project => (
    <li className={css.item} key={project.id}>
      <article className={`${css.ProjectItem} ${css.medium}`}>
        <div className={css.profile}>
          <figure className={css.avatar}>
            <img
              className={css['avatar-img']}
              src={`/portfolio/${project.src}`}
              alt={project.title}
              width='392px'
              height='392px'
            />
          </figure>
          <div className={css.data}>
            <h1 className={css.name}>{project.title}</h1>
            <ul className={css.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>
                  <p className={css.tag}>{tag}</p>
                </li>
              ))}
            </ul>
            <p className={css.desc}>{project.description}</p>
            <div className={css.links}>
              <div className={css.SocialLinks}>
                <a
                  href={project.demo}
                  className={css.SocialLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Demo />
                </a>
                <a
                  href={project.repo}
                  className={css.SocialLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHub />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={css.sp}>
          <a
            href='https://github.com/sponsors/ajhughesdev'
            className={`${css['sp-link']} ${css.Link} ${css.link}`}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className={css['sp-icon']}
            >
              <path d='M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z'></path>
            </svg>
            Sponsor
          </a>
        </div>
      </article>
    </li>
  ))

  return (
    <div className='Page'>
      <div style={{ position: 'relative' }}>
        <div>
          <div className={css.PortfolioPage}>
            <div className={css.PortfolioPageTitle}>
              <h1 className={css.title}>Portfolio</h1>
              <p className={css.lead}>
                A collection of projects I've worked on either professionally or
                for the purpose of learning. It is a small representation of my
                skills and experience.
              </p>
            </div>
            <span className={css['input-wrapper']}>
              <input className={css['search-input']} type="text" placeholder="Search by category..." value={searchTerm} onChange={handleSearchChange} />
            </span>
            <div className={`${css.Projects} ${css.medium} ${css['count-12']}`}>
              <ul className={css.container}>{projectsList}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
