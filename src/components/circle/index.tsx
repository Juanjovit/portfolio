import styles from './index.module.scss'

export const Circle: React.FC = () => {
  return (
    <>
      <div className="d-flex">
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
        <div className={styles.circle5}></div>
      </div>
    </>
  )
}
