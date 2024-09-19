import styles from './index.module.scss'
import { Separator } from '../separator'
import { TitleH2 } from '../title-h2'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WorkItem, WorkItemProps } from '../work-item'
import { FilterButtons } from '../filter-buttons'
import { useAtomValue } from 'jotai'
import { workFilterAtom } from '../../atoms/atoms'
import { FadeInContainer } from '../fade-in-container'
import { useTranslation } from 'react-i18next'

// const workItems = [
//   {
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero facilis dicta ex non sint itaque accusantium excepturi magnam debitis minus.',
//     title: 'Work Item 1',
//     type: 'work',
//     technologies: ['React', 'Prisma', 'Next.JS'],
//     image: image1,
//     alt: 'image1',
//   },
//   {
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero facilis dicta ex non sint itaque accusantium excepturi.',
//     title: 'Work Item 2',
//     type: 'study',
//     technologies: ['Html', 'CSS', 'JavaScript'],
//     image: image2,
//     alt: 'image2',
//   },
//   {
//     text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur voluptas sit nam similique velit sed re.',
//     title: 'Work Item 3',
//     type: 'study',
//     technologies: ['PHP'],
//     image: image3,
//     alt: 'image3',
//   },
// ]

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
      <TitleH2 title={t('MyWorkSection.Title')} />
      <Separator />
      <FilterButtons />
      <Row className={styles.rowStyle}>
        {filteredItems.map((filteredItem, index) => (
          <Col key={index} xs={12} xl={6} className={styles.colStyle}>
            <WorkItem {...filteredItem} />
          </Col>
        ))}
      </Row>
    </FadeInContainer>
  )
}

export default MyWork
