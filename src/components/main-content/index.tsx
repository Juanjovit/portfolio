import { MainContentCard } from '../main-content-card'
import { ProfileCard } from '../profile-card'
import styles from './index.module.scss'

interface MainContentProps {
  children: React.ReactNode
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className={` ${styles.cardContainer}`}>
      <ProfileCard />
      <MainContentCard>{children}</MainContentCard>
    </div>
  )
}
