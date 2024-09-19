import { CybergridLine } from '../cybergrid-line'
import styles from './index.module.scss'

export const Separator: React.FC = () => {
  return <CybergridLine hasShadow className={styles.separator} />
}
