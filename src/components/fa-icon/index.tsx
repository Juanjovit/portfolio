import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from './index.module.scss'

interface FAIconProps {
  icon: IconDefinition
  className?: string
}

export const FAIcon: React.FC<FAIconProps> = ({ icon, className }) => {
  return (
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} className={className} size="10x" />
    </div>
  )
}
