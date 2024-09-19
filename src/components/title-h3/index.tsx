import styles from './index.module.scss'

interface TitleH3Props {
  title: string
}

export const TitleH3: React.FC<TitleH3Props> = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>
}
