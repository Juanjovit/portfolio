import { Separator } from '../separator'
import { TitleH2 } from '../title-h2'
import { ExperienceTimeline } from '../experience-timeline'
import { StudiesTimeline } from '../studies-timeline'
import { FadeInContainer } from '../fade-in-container'
import { useTranslation } from 'react-i18next'

const Experience: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FadeInContainer>
      <TitleH2 title={t('ExperienceSection.Experience.Title')} />
      <Separator />
      <ExperienceTimeline />
      <TitleH2 title={t('ExperienceSection.Studies.Title')} />
      <Separator />
      <StudiesTimeline />
    </FadeInContainer>
  )
}

export default Experience
