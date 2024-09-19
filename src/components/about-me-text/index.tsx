import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

export const AboutMeText: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <p className={styles.text}>{t('AboutMeSection.Text1')}</p>
      <p className={styles.text}>{t('AboutMeSection.Text2')}</p>
    </>
  )
}
