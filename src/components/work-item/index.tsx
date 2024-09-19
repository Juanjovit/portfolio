import styles from './index.module.scss'
import { TechnologyBadge } from '../technology-badge'
import { useState } from 'react'
import { WorkItemAButton } from '../work-item-button'
import { ResponsiveImage } from '../responsive-image'

export interface WorkItemProps {
  image: string
  alt: string
  title: string
  text: string
  technologies: string[]
  webSiteUrl: string
  githubUrl: string
}

export const WorkItem: React.FC<WorkItemProps> = ({
  image,
  alt,
  title,
  text,
  technologies,
  webSiteUrl,
  githubUrl,
}) => {
  const [displaySideBar, setDisplaySideBar] = useState(false)

  const handleDisplaySideBar = () => {
    setDisplaySideBar(!displaySideBar)
  }

  return (
    <div className={styles.mainContainer} onClick={handleDisplaySideBar}>
      <div className={styles.cardContainer}>
        <ResponsiveImage
          imageFileName={image}
          alt={alt}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <div className={styles.badgesContainer}>
          {technologies.map((technology) => (
            <TechnologyBadge text={technology} />
          ))}
        </div>
      </div>
      <div
        className={`${styles.sideBar} ${displaySideBar ? styles.displaySideBar : null}`}
      >
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <WorkItemAButton icon="arrowUpRightFromSquare" href={webSiteUrl} />
          </li>
          <li className={styles.listItem}>
            <WorkItemAButton icon="github" href={githubUrl} />
          </li>
        </ul>
      </div>
    </div>
  )
}
