import { Separator } from '../separator'
import styles from './index.module.scss'
import { SVGIcon } from '../svg-icon'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
import typeScriptIcon from '../../assets/icons/typescript.svg'
import typeScriptIconWhite from '../../assets/icons/typescript-white.svg'
import { FAIcon } from '../fa-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const CoreWebTechnologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.CoreWebTechnologies')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faHtml5}
                className={`${styles.icon} ${styles.html5}`}
              />
            }
            text="HTML"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon
                icon={faCss3}
                className={`${styles.icon} ${styles.css}`}
              />
            }
            text="CSS"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <FAIcon icon={faJs} className={`${styles.icon} ${styles.js}`} />
            }
            text="JavaScript"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={typeScriptIconWhite}
                iconColored={typeScriptIcon}
              />
            }
            text="TypeScript"
          />
        </Col>
      </Row>
    </div>
  )
}
