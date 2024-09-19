import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Circle } from '../circle'
import { InvertedTriangle } from '../tinverted-riangle'
import { TestComponent } from '../test-component'

export const Main: React.FC = () => {
  return (
    <main>
      <div>
        MAIN Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        accusamus earum, dolores asperiores, deserunt illum ducimus labore
        impedit praesentium, quae dicta aliquid ad? Est officia vel ea
        cupiditate unde magnam?
      </div>
      {/* <>
              <Row className={styles.row}>

                  <Col className={styles.col}>

            <CustomText />
          </Col>
        </Row>
        <Circle />
        <InvertedTriangle />
        <TestComponent text="Web Designer" />
      </> */}
    </main>
  )
}
