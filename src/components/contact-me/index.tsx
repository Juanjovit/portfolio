import styles from './index.module.scss'
import { Separator } from '../separator'
import { TitleH2 } from '../title-h2'
import { ContactForm } from '../contact-form'
import { ContactData } from '../contact-data'
import { FadeInContainer } from '../fade-in-container'
import { TitleH2AndLanguageSwitcher } from '../title-h2-and-language-switcher'

const ContactMe: React.FC = () => {
  return (
    <FadeInContainer>
      <TitleH2AndLanguageSwitcher title="Contact Me" />
      <Separator />
      <ContactData />
      <TitleH2 title="Send Me a Message" />
      <Separator />
      <ContactForm />
    </FadeInContainer>
  )
}

export default ContactMe
