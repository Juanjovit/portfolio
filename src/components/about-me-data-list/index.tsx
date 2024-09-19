import styles from './index.module.scss'
import { DataText } from '../data-text'
import { useTranslation } from 'react-i18next'

export const DataList: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ul className={styles.data}>
      <DataText
        title={t('AboutMeSection.DataList.FullName.Title')}
        data={t('AboutMeSection.DataList.FullName.Data')}
      />
      <DataText
        title={t('AboutMeSection.DataList.Country.Title')}
        data={t('AboutMeSection.DataList.Country.Data')}
      />
      <DataText
        title={t('AboutMeSection.DataList.Phone.Title')}
        data={process.env.REACT_APP_MY_PHONE_NUMBER || ''}
      />
      <DataText
        title={t('AboutMeSection.DataList.Email.Title')}
        data={process.env.REACT_APP_MY_EMAIL || ''}
      />
    </ul>
  )
}
