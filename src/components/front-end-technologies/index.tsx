import { Separator } from '../separator'
import styles from './index.module.scss'
import { SVGIcon } from '../svg-icon'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
  faBootstrap,
  faReact,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import nextjsIcon from '../../assets/icons/nextjs.svg'
import nextjsIconWhite from '../../assets/icons/nextjs-white.svg'

import { FAIcon } from '../fa-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const FrontendTechnologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.FrontendFrameworksAndLibraries')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faReact}
                className={`${styles.icon} ${styles.react}`}
              />
            }
            text="React"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faVuejs}
                className={`${styles.icon} ${styles.vue}`}
              />
            }
            text="Vue.js"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon iconWhite={nextjsIconWhite} iconColored={nextjsIcon} />
            }
            text="NEXT.js"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faBootstrap}
                className={`${styles.icon} ${styles.bootstrap}`}
              />
            }
            text="Bootstrap"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faSass}
                className={`${styles.icon} ${styles.scss}`}
              />
            }
            text="Sass"
          />
        </Col>
      </Row>
    </div>
  )
}
