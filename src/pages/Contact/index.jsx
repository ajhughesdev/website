import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import css from './contact.module.css'

const Contact = () => {
  const form = useRef()
  const [successMessage, setSuccessMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setSuccessMessage('Message sent successfully!')
            form.current.reset()
          }
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={css.form}>
        <label>Name</label>
        <input type='text' name='from_name' />
        <label>Email</label>
        <input type='email' name='from_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
      {setSuccessMessage && <p className={css.message}>{successMessage}</p>}
    </>
  )
}

export default Contact
