import css from './features.module.css'

const features = [
  {
    id: 0,
    icon: '💡',
    title: 'Instant Server Start',
    details: 'On demand file serving over native ESM, no bundling required!',
  },
  {
    id: 1,
    icon: '⚡️',
    title: 'Lightning Fast HMR',
    details:
      'Hot Module Replacement (HMR) that stays fast regardless of app size.',
  },
  {
    id: 2,
    icon: '🛠️',
    title: 'Rich Features',
    details: 'Out-of-the-box support for TypeScript, JSX, CSS and more.',
  },
  {
    id: 3,
    icon: '📦',
    title: 'Optimized Build',
    details:
      'Pre-configured Rollup build with multi-page and library mode support.',
  },
  {
    id: 4,
    icon: '🔩',
    title: 'Universal Plugins',
    details: 'Rollup-superset plugin interface shared between dev and build.',
  },
  {
    id: 5,
    icon: '🔑',
    title: 'Fully Typed APIs',
    details: 'Flexible programmatic APIs with full TypeScript typing.',
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
