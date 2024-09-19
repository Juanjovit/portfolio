import React from 'react'
import styles from './index.module.scss'

interface SVGIconProps {
  iconWhite: string
  iconColored: string
  className?: string
}

export const SVGIcon: React.FC<SVGIconProps> = ({
  iconWhite,
  iconColored,
  className,
}) => {
  return (
    <div className={styles.iconContainer}>
      <img
        src={iconWhite}
        alt="Icon"
        className={className}
        onMouseOver={(e) => (e.currentTarget.src = iconColored)}
        onMouseOut={(e) => (e.currentTarget.src = iconWhite)}
      />
    </div>
  )
}
