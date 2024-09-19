import { AboutMeText } from '../about-me-text'
import { Separator } from '../separator'
import { DataList } from '../about-me-data-list'
import { TitleH2 } from '../title-h2'
import { useTranslation } from 'react-i18next'
import { FadeInContainer } from '../fade-in-container'
import { LanguageSwitcher } from '../language-switcher'

const AboutMe: React.FC = () => {
  const { t } = useTranslation()
  return (
    <FadeInContainer>
      <TitleH2 title={t('AboutMeSection.Title')} />
      <Separator />
      <AboutMeText />
      <DataList />
      <LanguageSwitcher />
    </FadeInContainer>
  )
}

export default AboutMe
