import { AboutMeText } from '../about-me-text'
import { Separator } from '../separator'
import { DataList } from '../about-me-data-list'
import { useTranslation } from 'react-i18next'
import { FadeInContainer } from '../fade-in-container'
import { TitleH2AndLanguageSwitcher } from '../title-h2-and-language-switcher'

const AboutMe: React.FC = () => {
  const { t } = useTranslation()
  return (
    <FadeInContainer>
      <TitleH2AndLanguageSwitcher title={t('AboutMeSection.Title')} />
      <Separator />
      <AboutMeText />
      <DataList />
    </FadeInContainer>
  )
}

export default AboutMe
