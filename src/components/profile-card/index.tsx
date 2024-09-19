import React, { CSSProperties } from 'react'
import profileImage from '../../images/profile-pic.png'
import styles from './index.module.scss'
import { CustomIconAButton } from '../custom-icon-a-button'
import { Separator } from '../separator'
import { ProfileCardTitle } from '../profile-card-title'
import { ProfileCardButtonsList } from '../profile-card-buttons-list'
import { ProfileCardDownloadButton } from '../profile-card-download-button'

const style: CSSProperties = {
  backgroundImage: `url(${profileImage})`,
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}

export const ProfileCard: React.FC = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardBackground}></div>
      <div className={styles.profileCardContent}>
        <div style={style}>
          <div className={styles.infoBox}>
            <ProfileCardTitle />
            <ProfileCardButtonsList />
            <ProfileCardDownloadButton />
          </div>
        </div>
      </div>
    </div>
  )
}
