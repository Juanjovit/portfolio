import { ExperienceDecoration } from '../experience-decoration'
import styles from './index.module.scss'

export interface ExperienceTimelineItemProps {
  date: string
  role: string
  company: string
  description: string
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  date,
  role,
  company,
  description,
}) => {
  return (
    <div className={styles.container}>
      <ExperienceDecoration className={styles.decoration} />
      <div className={styles.data}>
        <p className={`${styles.text} ${styles.date}`}>{date}</p>
        <h3 className={`${styles.text} ${styles.role}`}>{role}</h3>
        <p className={`${styles.text} ${styles.company}`}>{company}</p>
        <p className={`${styles.text} ${styles.description}`}>{description}</p>
      </div>
    </div>
  )
}
