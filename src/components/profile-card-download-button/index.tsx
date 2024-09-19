import React from 'react'
import styles from './index.module.scss'
import { Separator } from '../separator'
import { useTranslation } from 'react-i18next'

export const ProfileCardDownloadButton: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Separator />
      <a href="" className={styles.downloadButton}>
        {t('ProfileCard.DownloadCV')}
      </a>
      <Separator />
    </>
  )
}
