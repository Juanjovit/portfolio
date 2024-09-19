import { Separator } from '../separator'
import styles from './index.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const Languages: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.Languages.Title')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <p className={styles.text}>{t('SkillsSection.Languages.Es')}</p>
        </Col>
        <Col xs={6} className={styles.col}>
          <p className={styles.text}>{t('SkillsSection.Languages.En')}</p>
        </Col>
      </Row>
    </div>
  )
}
