import { Container, Row, Col,Image} from 'react-bootstrap'
import React from 'react'

function About() {
  return (
    <div>
    <main>
      <Container>
        <Row className='px-4 my-5'>
          <Col sm={7}>
            <Image
             src ="https://unsplash.com/photos/LvySG1hvuzI"
             fluid
             rounded
            />
          
          </Col>
          <Col sm={5}>sm-4</Col>

        </Row>
      </Container>
    </main>
  
    </div>

    
  )
}

export default About