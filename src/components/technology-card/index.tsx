import styles from './index.module.scss'

interface TechnologyCardProps {
  icon: React.ReactNode
  text: string
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon,
  text,
}) => {
  return (
    <div className={styles.card}>
      {icon}
      <p className={styles.text}>{text}</p>
    </div>
  )
}
