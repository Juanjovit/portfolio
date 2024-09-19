import React from 'react'
import styles from './index.module.scss'

interface CustomSendButtonProps {
  isFormComplete: boolean
  isLoading: boolean
  isSent: boolean
}

export const CustomSendButton: React.FC<CustomSendButtonProps> = ({
  isLoading,
  isFormComplete,
  isSent,
}) => {
  const buttonText = () => {
    if (isLoading) {
      return 'Sending...'
    }
    if (isSent) {
      return 'MESSAGE SENT SUCCESSFULLY'
    }
    return 'Send'
  }

  return (
    <div
      className={`${isFormComplete ? styles.buttonComplete : ''} ${isSent ? styles.buttonSent : ''}`}
    >
      <button className={styles.button} type="submit" disabled={isLoading}>
        {buttonText()}
      </button>
    </div>
  )
}
