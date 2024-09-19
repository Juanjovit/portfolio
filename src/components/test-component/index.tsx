import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './index.module.scss'

interface TestComponentProps {
  text: string
}

export const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
  return (
    <div className={styles.background}>
      <h1 className={styles.gradientText}>{text}</h1>
      <h2 className={styles.text}>{text}</h2>
      <h3 className={styles.text}>{text}</h3>
      <p className={styles.text}>{text}</p>
      <Row className={styles.row}>
        <Col className={styles.col}>
          <p className={styles.text}>col 1</p>
        </Col>
        <Col className={styles.col}>
          <p className={styles.text}>col 2</p>
        </Col>
      </Row>
      <div className={styles.turquoiseLine}></div>
      <div className={styles.turquoiseLine2}></div>
      <div className={styles.turquoiseLine3}></div>

      <div className={styles.turquoiseLine4}></div>
      <div className={styles.turquoiseLine5}></div>
      <div className={styles.turquoiseLine6}></div>
      <div className={styles.orangeLine}></div>
    </div>
  )
}
