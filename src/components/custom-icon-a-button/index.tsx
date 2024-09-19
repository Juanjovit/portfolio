import React, { CSSProperties } from 'react'
import styles from './index.module.scss'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CustomButtonProps {
  href?: string
  icon: 'linkedin' | 'github' | 'instagram'
  children?: React.ReactNode
}

export const CustomIconAButton: React.FC<CustomButtonProps> = ({
  href,
  icon,
  children,
}) => {
  const selectedIcon = () => {
    switch (icon) {
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      case 'github':
        return <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      case 'instagram':
        return <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      default:
        return null
    }
  }

  return (
    <a href={href} target="_blank" className={styles.navButton}>
      {selectedIcon()}
      {children}
    </a>
  )
}
