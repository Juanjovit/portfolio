import styles from './index.module.scss'

export const CustomMainTitle: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.text}>JUANJO VITALI</span>
        <strong className={styles.gradientText}>Web Developer</strong>
      </h1>
    </>
  )
}
