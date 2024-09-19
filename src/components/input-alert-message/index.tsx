import styles from './index.module.scss'

interface InputAlertMessageProps {
  text: string
}

export const InputAlertMessage: React.FC<InputAlertMessageProps> = ({
  text,
}) => {
  return <div className={styles.alertMessage}>{text}</div>
}
