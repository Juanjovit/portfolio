import styles from './index.module.scss'

interface ImageProps {
  imageFileName: string
  alt: string
  className?: string
}

export const ResponsiveImage: React.FC<ImageProps> = ({
  imageFileName,
  alt,
  className,
}) => {
  return (
    <img
      src={require(`../../images/${imageFileName}`)}
      alt={alt}
      className={`${styles.image} ${className}`}
    />
  )
}
