import { CybergridLine } from '../cybergrid-line'
import styles from './index.module.scss'

interface NavbarDecorationProps {
  invertColors?: boolean
}

export const NavbarDecoration: React.FC<NavbarDecorationProps> = ({
  invertColors,
}) => {
  return (
    <CybergridLine
      hasShadow
      invertColors={invertColors}
      className={styles.decoration}
    />
  )
}
