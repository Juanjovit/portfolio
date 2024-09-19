import { Separator } from '../separator'
import styles from './index.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'

import { FAIcon } from '../fa-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const VersionControl: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.VersionControl')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faGitAlt}
                className={`${styles.icon} ${styles.git}`}
              />
            }
            text="Git"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faGithub}
                className={`${styles.icon} ${styles.github}`}
              />
            }
            text="GitHub"
          />
        </Col>
      </Row>
    </div>
  )
}
