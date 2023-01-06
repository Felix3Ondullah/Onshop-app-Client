import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React from "react";
import image from "../Assets/back.jpg";

function About() {
  return (
    <div>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                class="thumbnail img-responsive"
                src={image}
                alt="home"
                height="400"
                width="500"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">What We Do</h1>
              <p class="mt-4 " style={{fontSize:"17px"}} >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <Button variant= "outline-primary"> Try Us</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default About;
