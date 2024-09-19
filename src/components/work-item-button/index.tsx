import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface WorkItemButtonProps {
  href?: string
  icon: 'arrowUpRightFromSquare' | 'github'
}

export const WorkItemAButton: React.FC<WorkItemButtonProps> = ({
  icon,
  href,
}) => {
  const selectedIcon = () => {
    switch (icon) {
      case 'arrowUpRightFromSquare':
        return (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.icon}
          />
        )
      case 'github':
        return <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      case 'arrowUpRightFromSquare':
      default:
        return null
    }
  }

  return (
    <a href={href} target="_blank" className={styles.button}>
      {selectedIcon()}
    </a>
  )
}
