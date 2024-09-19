import {
  ExperienceTimelineItem,
  ExperienceTimelineItemProps,
} from '../experience-timeline-item'
import { useTranslation } from 'react-i18next'

// const experienceData = [
//   {
//     date: '2023 - 2024',
//     role: 'Fullstack Web Developer',
//     company: 'Talentech',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2022 - 2023',
//     role: 'Front-end Web Developer',
//     company: 'Talentech',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2021',
//     role: 'Profesor de educación física en escuela primaria',
//     company: 'Colegio Crear',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2020',
//     role: 'Profesor de GYM modalidad virtual',
//     company: 'Davinci',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
//   {
//     date: '2019',
//     role: 'Profesor en GYM',
//     company: 'Instituto Santa Rosa',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur tenetur et officiis asperiores dolores perspiciatis eveniet ad minima, aperiam consectetur adipisci, sapiente quam laboriosam. Culpa explicabo cumque voluptas recusandae.',
//   },
// ]

export const ExperienceTimeline: React.FC = () => {
  const { t } = useTranslation()

  const experienceData: ExperienceTimelineItemProps[] = t(
    'ExperienceSection.Experience.ExperienceData',
    {
      returnObjects: true,
    },
  )

  return (
    <>
      {experienceData.map(({ date, role, company, description }, index) => (
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
