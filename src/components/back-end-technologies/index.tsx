import { Separator } from '../separator'
import styles from './index.module.scss'
import { SVGIcon } from '../svg-icon'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { faNodeJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons'
import expressjsIconWhite from '../../assets/icons/expressjs-white.svg'
import expressjsIcon from '../../assets/icons/expressjs.svg'

import { FAIcon } from '../fa-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const BackendTechnologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.BackendTechnologies')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faNodeJs}
                className={`${styles.icon} ${styles.nodejs}`}
              />
            }
            text="Node.js"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={expressjsIconWhite}
                iconColored={expressjsIcon}
              />
            }
            text="Express"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon icon={faPhp} className={`${styles.icon} ${styles.php}`} />
            }
            text="PHP"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faLaravel}
                className={`${styles.icon} ${styles.laravel}`}
              />
            }
            text="Laravel"
          />
        </Col>
      </Row>
    </div>
  )
}
