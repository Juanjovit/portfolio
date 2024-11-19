import styles from './index.module.scss'
import { TitleH2 } from '../title-h2'
import { LanguageSwitcher } from '../language-switcher'

interface TitleH2AndLanguageSwitcherProps {
  title: string
}

export const TitleH2AndLanguageSwitcher: React.FC<
  TitleH2AndLanguageSwitcherProps
> = ({ title }) => {
  return (
    <div className={styles.container}>
      <TitleH2 title={title} />
      <LanguageSwitcher />
    </div>
  )
}
