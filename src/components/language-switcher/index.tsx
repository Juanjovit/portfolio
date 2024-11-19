import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: 'en' | 'es') => {
    i18n.changeLanguage(language)
  }

  const currentLanguage = i18n.language

  return (
    <div className={styles.container}>
      <button
        className={`${styles.languageButton} ${
          currentLanguage === 'en' ? styles.selectedLanguageButton : ''
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`${styles.languageButton} ${
          currentLanguage === 'es' ? styles.selectedLanguageButton : ''
        }`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  )
}
