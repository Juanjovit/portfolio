import { useTranslation } from 'react-i18next'
import { CustomIconButton } from '../custom-icon-button'
import { Views } from '../main-layout'
import { NavbarDecoration } from '../navbar-decoration'
import styles from './index.module.scss'

interface NavbarProps {
  onViewChange: (view: Views) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onViewChange }) => {
  const { t } = useTranslation()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <NavbarDecoration />
        <ul className={styles.list}>
          <li>
            <CustomIconButton
              tooltip={t('Navbar.AboutMe.Tooltip')}
              view="about-me"
              onClick={onViewChange}
            />
          </li>
          <li>
            <CustomIconButton
              tooltip={t('Navbar.Skills.Tooltip')}
              view="skills"
              onClick={onViewChange}
            />
          </li>
          <li>
            <CustomIconButton
              tooltip={t('Navbar.Experience.Tooltip')}
              view="experience"
              onClick={onViewChange}
            />
          </li>
          <li>
            <CustomIconButton
              tooltip={t('Navbar.MyWork.Tooltip')}
              view="my-work"
              onClick={onViewChange}
            />
          </li>
          <li>
            <CustomIconButton
              tooltip={t('Navbar.ContactMe.Tooltip')}
              view="contact-me"
              onClick={onViewChange}
            />
          </li>
        </ul>
        <NavbarDecoration invertColors />
      </div>
    </nav>
  )
}
