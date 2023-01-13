import "../Css/Footer.css";
import { Container, Row, Col } from 'react-bootstrap';
import React from "react";

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            
          </Col>
          <Col xs={12} md={6}>
            <p className="text-right">
            <h6>Copyright © Onshop 2023</h6>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

