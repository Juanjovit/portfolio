import styles from './index.module.scss'

interface FadeInContainerProps {
  children?: React.ReactNode
}

export const FadeInContainer: React.FC<FadeInContainerProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>
}
