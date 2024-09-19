import { ProfileCard } from '../profile-card'
import styles from './index.module.scss'

interface MainContentCardProps {
  children: React.ReactNode
}

export const MainContentCard: React.FC<MainContentCardProps> = ({
  children,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBackground}></div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}
