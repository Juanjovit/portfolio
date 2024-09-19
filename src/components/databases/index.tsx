import { Separator } from '../separator'
import styles from './index.module.scss'
import { SVGIcon } from '../svg-icon'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import firebaseIconWhite from '../../assets/icons/firebase-white.svg'
import firebaseIcon from '../../assets/icons/firebase.svg'
import prismadbIconWhite from '../../assets/icons/prismadb-white.svg'
import prismadbIcon from '../../assets/icons/prismadb.svg'
import mysqlIconWhite from '../../assets/icons/mysql-white.svg'
import mysqlIcon from '../../assets/icons/mysql.svg'
import mongodbIconWhite from '../../assets/icons/mongodb-white.svg'
import mongodbIcon from '../../assets/icons/mongodb.svg'

import { TechnologyCard } from '../technology-card'
import { TitleH3 } from '../title-h3'
import { useTranslation } from 'react-i18next'

export const Databases: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitleH3 title={t('SkillsSection.Databases')} />
      <Separator />
      <Row className={styles.row}>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon iconWhite={mysqlIconWhite} iconColored={mysqlIcon} />
            }
            text="MySQL"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon iconWhite={mongodbIconWhite} iconColored={mongodbIcon} />
            }
            text="MongoDB"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={firebaseIconWhite}
                iconColored={firebaseIcon}
              />
            }
            text="Firebase"
          />
        </Col>
        <Col xs={6} className={styles.col}>
          <TechnologyCard
            icon={
              <SVGIcon
                iconWhite={prismadbIconWhite}
                iconColored={prismadbIcon}
              />
            }
            text="Prisma"
          />
        </Col>
      </Row>
    </div>
  )
}
