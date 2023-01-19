import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import "../Css/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  //navigatee to search page

  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/search");
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
              <h1 class="font-weigh-light">
                <strong>Search </strong> And <strong> Compare </strong> Products
                With On-Shop, Your <strong> Ultimate Shopping </strong>{" "}
                Companion
              </h1>
              <p class="mt-4 " style={{ fontSize: "16px" }}>
                With our advanced search and filtering options, you can narrow
                down your options and find the perfect product at the right
                price. Never overspend again with On-Shop - the ultimate tool
                for savvy shoppers.
              </p>
              <div>
                <Button
                  className="btn btn-lg"
                  onClick={navigateToSearch}
                  variant="outline-primary"
                >
                  {" "}
                  Search Product
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
