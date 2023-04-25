import css from './footer.module.css'

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={css.container}>
        <p className={css.message}>Released under the MIT License.</p>
        <p className={css.copyright}>
          Copyright © 2023-present Andrew J Hughes
        </p>
      </div>
    </footer>
  )
}

export default Footer
