import { lazy, Suspense, useState } from 'react'
import { CybergridBG } from '../cybergrid-bg'
import { MainContent } from '../main-content'
import { Navbar } from '../navbar'

const AboutMe = lazy(() => import('../about-me'))
const Skills = lazy(() => import('../skills'))
const Experience = lazy(() => import('../experience'))
const MyWork = lazy(() => import('../my-work'))
const ContactMe = lazy(() => import('../contact-me'))

export type Views =
  | 'about-me'
  | 'skills'
  | 'experience'
  | 'my-work'
  | 'contact-me'

export const MainLayout: React.FC = () => {
  const [state, setState] = useState<Views>('about-me')

  const handleView = (view: Views) => {
    setState(view)
  }

  const content = () => {
    switch (state) {
      case 'about-me':
        return <AboutMe />
      case 'skills':
        return <Skills />
      case 'experience':
        return <Experience />
      case 'my-work':
        return <MyWork />
      case 'contact-me':
        return <ContactMe />
      default:
        return <AboutMe />
    }
  }

  return (
    <>
      <CybergridBG />
      <Navbar onViewChange={handleView} />
      <MainContent>
        <Suspense fallback={<div></div>}>{content()}</Suspense>
      </MainContent>
    </>
  )
}
