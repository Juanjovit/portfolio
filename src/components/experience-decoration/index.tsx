import styles from './index.module.scss'

interface ExperienceDecorationProps {
  className?: string
}

export const ExperienceDecoration: React.FC<ExperienceDecorationProps> = ({
  className,
}) => {
  return <div className={`${className} ${styles.line}`}></div>
}
