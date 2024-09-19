import styles from './index.module.scss'

import { FilterButton } from '../filter-button'
import { useTranslation } from 'react-i18next'

export const FilterButtons: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.buttonsContainer}>
      <FilterButton text={t('MyWorkSection.Filters.All')} />
      <FilterButton text={t('MyWorkSection.Filters.Work')} />
      <FilterButton text={t('MyWorkSection.Filters.Study')} />
    </div>
  )
}
