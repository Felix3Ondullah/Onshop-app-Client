import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import "../Css/Home.css"
import {useNavigate} from 'react-router-dom';

function Home() {
  //navigatee to search page

  const navigate = useNavigate();
  const navigateToSearch =() => {
    navigate('/search');
  };

  return (
    <div className="mainsection">
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              {/* <Image
                class="thumbnail img-responsive"
                src={image}
                alt="home"
                height="400"
                width="500"
                fluid
                rounded
                className=""
              /> */}
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">Search And Compare Products With On-Shop</h1>
              <p class="mt-4 " style={{ fontSize: "20px" }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div>
              < Button  onClick={navigateToSearch} variant="outline-primary" > Search Product</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
