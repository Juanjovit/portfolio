import styles from './index.module.scss'
import { Separator } from '../separator'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkItem, WorkItemProps } from '../work-item'
import { FilterButtons } from '../filter-buttons'
import { useAtomValue } from 'jotai'
import { workFilterAtom } from '../../atoms/atoms'
import { FadeInContainer } from '../fade-in-container'
import { useTranslation } from 'react-i18next'
import { TitleH2AndLanguageSwitcher } from '../title-h2-and-language-switcher'

export type WorkType = 'all' | 'work' | 'study' | 'todo' | 'trabajo' | 'estudio'

interface CompleteWorkItem extends WorkItemProps {
  type: WorkType
}

const MyWork: React.FC = () => {
  const { t } = useTranslation()
  const workData: CompleteWorkItem[] = t('MyWorkSection.WorkData', {
    returnObjects: true,
  })
  const workFilter = useAtomValue(workFilterAtom)

  const filteredItems =
    workFilter === 'all' || workFilter === 'todo'
      ? workData
      : workData.filter(({ type }) => type === workFilter)

  return (
    <FadeInContainer>
      <TitleH2AndLanguageSwitcher title={t('MyWorkSection.Title')} />
      <Separator />
      <FilterButtons />
      <Row className={styles.rowStyle}>
        {filteredItems.map((filteredItem) => (
          <Col
            key={filteredItem.title}
            xs={12}
            xl={6}
            className={styles.colStyle}
          >
            <WorkItem {...filteredItem} />
          </Col>
        ))}
      </Row>
    </FadeInContainer>
  )
}

export default MyWork
