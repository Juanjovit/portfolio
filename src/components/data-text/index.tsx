import styles from './index.module.scss'

interface DataTextProps {
  title: string
  data: string
}

export const DataText: React.FC<DataTextProps> = ({ title, data }) => {
  return (
    <li className={styles.li}>
      <div className={styles.data}>
        <span>{title}:</span>
        {data}
      </div>
      <div className={styles.decoration}></div>
    </li>
  )
}
