import styles from './index.module.scss'
import { Separator } from '../separator'
import { TitleH2 } from '../title-h2'
import emailjs from 'emailjs-com'
import { useRef, useState, useEffect } from 'react'
import { useUpdateSiteStatus } from '../../utils/siteStatus'
import { InputAlertMessage } from '../input-alert-message'
import { CustomSendButton } from '../custom-send-button'

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const [fieldErrors, setFieldErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  })

  const [isLoading, setIsLoading] = useState(false)
  const updateSiteStatus = useUpdateSiteStatus()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = {
      user_name: !formValues.user_name.trim(),
      user_email: !formValues.user_email.trim(),
      message: !formValues.message.trim(),
    }
    setFieldErrors(errors)

    const formIsValid = !Object.values(errors).some(Boolean)

    setIsLoading(true)
    setIsSent(false)

    if (formIsValid && form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
        )
        .then(
          () => {
            updateSiteStatus('success')
            setFormValues({
              user_name: '',
              user_email: '',
              message: '',
            })
            setIsLoading(false)
            setIsSent(true)
          },
          (error) => {
            updateSiteStatus('error')
            setIsLoading(false)
          },
        )
    } else {
      updateSiteStatus('error')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsFormComplete(
      formValues.user_name.trim() !== '' &&
        formValues.user_email.trim() !== '' &&
        formValues.message.trim() !== '',
    )
  }, [formValues])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))

    if (value.trim() !== '') {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }

    if (isSent) {
      setIsSent(false)
    }
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            name="user_name"
            placeholder="Your name here"
            value={formValues.user_name}
            onChange={handleChange}
          />
          {fieldErrors.user_name && (
            <InputAlertMessage text="Please add your name" />
          )}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="user_email"
            placeholder="Your email here"
            value={formValues.user_email}
            onChange={handleChange}
          />
          {fieldErrors.user_email && (
            <InputAlertMessage text="Please add your email" />
          )}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Message</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            placeholder="Your message here"
            value={formValues.message}
            onChange={handleChange}
          />
          {fieldErrors.message && (
            <InputAlertMessage text="Please add your message" />
          )}
        </div>
        <CustomSendButton
          isFormComplete={isFormComplete}
          isLoading={isLoading}
          isSent={isSent}
        />
      </form>
    </>
  )
}
