import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import css from './contact.module.css'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <form ref={form} onSubmit={sendEmail} className={css.form}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}

export default Contact