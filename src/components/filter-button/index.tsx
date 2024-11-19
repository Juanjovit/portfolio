import { useAtom } from 'jotai'
import { workFilterAtom } from '../../atoms/atoms'
import { WorkType } from '../my-work'
import { Separator } from '../separator'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface FilterButtonProps {
  text: WorkType
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const FilterButton: React.FC<FilterButtonProps> = ({ text }) => {
  const { i18n } = useTranslation()
  const [workFilter, setWorkFilter] = useAtom(workFilterAtom)

  const updateFilterLanguage = () => {
    const newValue = i18n.language === 'es' ? 'todo' : 'all'
    setWorkFilter(newValue)
  }

  const handleSetFilter = (text: WorkType) => {
    let formatedText = text

    if (text === 'estudio') formatedText = 'study'
    if (text === 'trabajo') formatedText = 'work'

    setWorkFilter(formatedText)
  }

  useEffect(() => {
    updateFilterLanguage()

    i18n.on('languageChanged', updateFilterLanguage)

    return () => {
      i18n.off('languageChanged', updateFilterLanguage)
    }
  }, [i18n, setWorkFilter])

  const isSelected = text == workFilter

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={() => handleSetFilter(text)}>
        {capitalize(text)}
      </button>
      {isSelected ? <Separator /> : null}
    </div>
  )
}
