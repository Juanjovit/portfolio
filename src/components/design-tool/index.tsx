import { Separator } from '../separator'
import styles from './index.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import photoshopIconWhite from '../../assets/icons/photoshop-white.svg'
import photoshopIcon from '../../assets/icons/photoshop.svg'
import illustratorIconWhite from '../../assets/icons/illustrator-white.svg'
import illustratorIcon from '../../assets/icons/illustrator.svg'
import figmaIconWhite from '../../assets/icons/figma-white.svg'
import figmaIcon from '../../assets/icons/figma.svg'
import { SVGIcon } from '../svg-icon'
import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const DesignTools: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.DesignTools')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={photoshopIconWhite}
                iconColored={photoshopIcon}
              />
            }
            text="Photoshop"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={illustratorIconWhite}
                iconColored={illustratorIcon}
              />
            }
            text="Illustrator"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon iconWhite={figmaIconWhite} iconColored={figmaIcon} />
            }
            text="Figma"
          />
        </Col>
      </Row>
    </div>
  )
}
