import { useAtomValue } from 'jotai'
import styles from './index.module.scss'
import { siteStatusAtom } from '../../atoms/atoms'
import { useEffect, useState } from 'react'
import { CybergridLine } from '../cybergrid-line'

export const CybergridBG: React.FC = () => {
  return (
    <div className={styles.cybergridContainer}>
      <div className={styles.cybergridTop}></div>
      <div className={styles.cybergridBottom}>
        <div className={styles.cybergridBG}>
          <CybergridLine className={styles.cbWave} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft1}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft2}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft3}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft4}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft5}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft6}`} />
          <CybergridLine className={`${styles.cbWave} ${styles.cbWaveLeft7}`} />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight0}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight1}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight2}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight3}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight4}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight5}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight6}`}
          />
          <CybergridLine
            className={`${styles.cbWave} ${styles.cbWaveRight7}`}
          />
          <CybergridLine className={`${styles.cbWaveHorizontal}`} />
          <CybergridLine className={`${styles.cbWaveHorizontal}`} />
          <CybergridLine
            className={`${styles.cbWaveHorizontal} ${styles.cbWaveHorizontalAnimation1}`}
          />
          <CybergridLine
            className={`${styles.cbWaveHorizontal} ${styles.cbWaveHorizontalAnimation2}`}
          />
          <CybergridLine
            className={`${styles.cbWaveHorizontal} ${styles.cbWaveHorizontalAnimation3}`}
          />
          <CybergridLine
            className={`${styles.cbWaveHorizontal} ${styles.cbWaveHorizontalAnimation4}`}
          />
          <CybergridLine
            className={`${styles.cbWaveHorizontal} ${styles.cbWaveHorizontalAnimation5}`}
          />
        </div>
      </div>
    </div>
  )
}
