import {
  ExperienceTimelineItem,
  ExperienceTimelineItemProps,
} from '../experience-timeline-item'
import { useTranslation } from 'react-i18next'

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
