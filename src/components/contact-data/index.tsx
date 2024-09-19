import styles from './index.module.scss'
import { FAIcon } from '../fa-icon'
import { faCheck, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ContactDataCard } from '../contact-data-card'
import { ContactDataCardHref } from '../contact-data-card-href'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ContactData: React.FC = () => {
  return (
    <Row className={styles.container}>
      <Col className={styles.col}>
        <ContactDataCard
          primaryIcon={<FAIcon icon={faPhone} className={styles.icon} />}
          secondaryIcon={<FAIcon icon={faCheck} className={styles.icon} />}
          data={process.env.REACT_APP_MY_PHONE_NUMBER || ''}
        />
      </Col>
      <Col className={styles.col}>
        <ContactDataCard
          primaryIcon={<FAIcon icon={faEnvelope} className={styles.icon} />}
          secondaryIcon={<FAIcon icon={faCheck} className={styles.icon} />}
          data={process.env.REACT_APP_MY_EMAIL || ''}
        />
      </Col>
      <Col className={styles.col}>
        <ContactDataCardHref
          icon={<FAIcon icon={faLinkedin} className={styles.icon} />}
          data="Juan José Vitali"
          href={process.env.REACT_APP_MY_LINKEDIN || ''}
        />
      </Col>
      <Col className={styles.col}>
        <ContactDataCardHref
          icon={<FAIcon icon={faGithub} className={styles.icon} />}
          data="Juanjovit"
          href={process.env.REACT_APP_MY_GITHUB || ''}
        />
      </Col>
    </Row>
  )
}
