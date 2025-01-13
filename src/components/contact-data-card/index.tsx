import React, { useState } from 'react'
import styles from './index.module.scss'

interface ContactDataCardProps {
  primaryIcon: React.ReactNode
  secondaryIcon: React.ReactNode
  data: string
}

export const ContactDataCard: React.FC<ContactDataCardProps> = ({
  primaryIcon,
  secondaryIcon,
  data,
}) => {
  const [currentIcon, setCurrentIcon] = useState<React.ReactNode>(primaryIcon)
  const [text, setText] = useState<React.ReactNode>(data)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data)
      setCurrentIcon(secondaryIcon)
      setText('Copied!')
      setTimeout(() => {
        setCurrentIcon(primaryIcon)
        setText(data)
      }, 1000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={styles.card} onClick={handleCopy}>
      {currentIcon}
      <p className={styles.data}>{text}</p>
    </div>
  )
}
