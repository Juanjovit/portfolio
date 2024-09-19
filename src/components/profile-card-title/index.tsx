import React from 'react'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const ProfileCardTitle: React.FC = () => {
  const { t } = useTranslation()

  return (
    <h1 className={styles.title}>
      <div className={styles.name}>{t('ProfileCard.Title')}</div>
      <div className={styles.role}>{t('ProfileCard.SubTitle')}</div>
    </h1>
  )
}
