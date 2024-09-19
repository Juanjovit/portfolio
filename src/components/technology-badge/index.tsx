import styles from './index.module.scss'

interface TechnologyBadgeProps {
  text: string
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ text }) => {
  return (
    <div className={styles.badgeContainer}>
      <p className={styles.badgeText}>{text}</p>
    </div>
  )
}
