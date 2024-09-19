import styles from './index.module.scss'

interface ContactDataCardHrefProps {
  icon: React.ReactNode
  data: string
  href: string
}

export const ContactDataCardHref: React.FC<ContactDataCardHrefProps> = ({
  icon,
  data,
  href,
}) => {
  return (
    <div className={styles.card}>
      <a href={href} className={styles.href} target="_blank">
        {icon}
        <p className={styles.data}>{data}</p>
      </a>
    </div>
  )
}
