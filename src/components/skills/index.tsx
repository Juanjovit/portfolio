import { Separator } from '../separator'
import { TitleH2 } from '../title-h2'

import { CoreWebTechnologies } from '../core-web-technologies'
import { FrontendTechnologies } from '../front-end-technologies'
import { BackendTechnologies } from '../back-end-technologies'
import { Databases } from '../databases'
import { VersionControl } from '../version-control'
import { DesignTools } from '../design-tool'
import { TestingTechnologies } from '../testing-technologies'
import { Languages } from '../languages'
import { FadeInContainer } from '../fade-in-container'
import { useTranslation } from 'react-i18next'

const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FadeInContainer>
      <TitleH2 title={t('SkillsSection.Title')} />
      <Separator />
      <CoreWebTechnologies />
      <FrontendTechnologies />
      <BackendTechnologies />
      <Databases />
      <VersionControl />
      <DesignTools />
      <TestingTechnologies />
      <Languages />
    </FadeInContainer>
  )
}

export default Skills
