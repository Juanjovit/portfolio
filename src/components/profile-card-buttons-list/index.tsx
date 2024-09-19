import React from 'react'
import styles from './index.module.scss'
import { CustomIconAButton } from '../custom-icon-a-button'

export const ProfileCardButtonsList: React.FC = () => {
  return (
    <ul className={styles.buttonsContainer}>
      <li>
        <CustomIconAButton
          href={process.env.REACT_APP_MY_LINKEDIN || ''}
          icon="linkedin"
        />
      </li>
      <li>
        <CustomIconAButton
          href={process.env.REACT_APP_MY_GITHUB || ''}
          icon="github"
        />
      </li>
      <li>
        <CustomIconAButton
          href={process.env.REACT_APP_MY_INSTAGRAM || ''}
          icon="instagram"
        />
      </li>
    </ul>
  )
}
