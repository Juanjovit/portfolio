import React, { CSSProperties } from 'react'
import styles from './index.module.scss'
import {
  faBriefcase,
  faEnvelope,
  faFolder,
  faLayerGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Views } from '../main-layout'

interface CustomButtonProps {
  onClick: (view: Views) => void
  view: Views
  children?: React.ReactNode
  tooltip?: string
}

export const CustomIconButton: React.FC<CustomButtonProps> = ({
  onClick,
  view,
  children,
  tooltip,
}) => {
  const handleOnClick = (view: Views) => {
    onClick(view)
  }

  const selectedIcon = () => {
    switch (view) {
      case 'about-me':
        return <FontAwesomeIcon icon={faUser} className={styles.icon} />
      case 'skills':
        return <FontAwesomeIcon icon={faLayerGroup} className={styles.icon} />
      case 'experience':
        return <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
      case 'my-work':
        return <FontAwesomeIcon icon={faFolder} className={styles.icon} />
      case 'contact-me':
        return <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      default:
        return null
    }
  }

  return (
    <div className={styles.containerStyle}>
      <button onClick={() => handleOnClick(view)} className={styles.navButton}>
        {selectedIcon()}
        {children}
      </button>
      {tooltip ? <span className={styles.customTooltip}>{tooltip}</span> : null}
    </div>
  )
}
