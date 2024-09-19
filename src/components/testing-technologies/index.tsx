import { Separator } from '../separator'
import styles from './index.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import jestIconWhite from '../../assets/icons/jest-white.svg'
import jestIcon from '../../assets/icons/jest.svg'
import { SVGIcon } from '../svg-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const TestingTechnologies: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.Testing')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={<SVGIcon iconWhite={jestIconWhite} iconColored={jestIcon} />}
            text="Jest"
          />
        </Col>
      </Row>
    </div>
  )
}
