import React from 'react'
import {
  ExperienceTimelineItem,
  ExperienceTimelineItemProps,
} from '../experience-timeline-item'
import { useTranslation } from 'react-i18next'

// const studiesData = [
//   {
//     date: '2021 - 2023',
//     role: 'Web Design Career',
//     company: 'Davinci',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2020',
//     role: 'Web Design Course',
//     company: 'Davinci',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2016 - 2019',
//     role: 'Profesorado en educación física',
//     company: 'Instituto Santa Rosa',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
// ]

export const StudiesTimeline: React.FC = () => {
  const { t } = useTranslation()

  const studiesData: ExperienceTimelineItemProps[] = t(
    'ExperienceSection.Studies.StudiesData',
    {
      returnObjects: true,
    },
  )

  return (
    <>
      {studiesData.map(({ date, role, company, description }, index) => (
        <ExperienceTimelineItem
          key={index}
          date={date}
          role={role}
          company={company}
          description={description}
        />
      ))}
    </>
  )
}
