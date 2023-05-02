import css from './features.module.css'

const features = [
  {
    id: 0,
    icon: '💡',
    title: 'Customizable Designs',
    details: 'Customized frontend web development solutions tailored to your needs.',
  },
  {
    id: 1,
    icon: '⚡️',
    title: 'Responsive Layouts',
    details:
      'Advanced techniques and tools to create responsive and dynamic designs.',
  },
  {
    id: 2,
    icon: '🛠️',
    title: 'SEO Optimization',
    details: 'SEO optimization to improve visibility and traffic to your website.',
  },
  {
    id: 3,
    icon: '📦',
    title: 'Cross-Browser Compatibility',
    details:
      'Cross-browser compatibility to ensure your site looks great on any device.',
  },
  {
    id: 4,
    icon: '🔩',
    title: 'Fast Load Times',
    details: 'Fast load times for a seamless user experience.',
  },
  {
    id: 5,
    icon: '🔑',
    title: 'Expert Support',
    details: 'Expert support available 24/7 to answer any questions or solve any issues.',
  },
]

const Features = () => {
  const featuresList = features.map((feature) => (
    <li className={`${css['grid-6']} ${css.item}`} key={feature.id}>
      <span className={`${css.Link} ${css.Feature}`}>
        <article className={css.box}>
          <div className={css.icon}>{feature.icon}</div>
          <h2 className={css.title}>{feature.title}</h2>
          <p className={css.details}>{feature.details}</p>
        </article>
      </span>
    </li>
  ))

  return (
    <div className={`${css.Features} ${css.HomeFeatures}`}>
      <div className={css.container}>
        <ul className={css.items}>{featuresList}</ul>
      </div>
    </div>
  )
}

export default Features
