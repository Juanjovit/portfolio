import styles from './index.module.scss'

interface TitleH2Props {
  title: string
}

export const TitleH2: React.FC<TitleH2Props> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>
}
