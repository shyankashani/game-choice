import React from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = props => (
  <Container className="text-center">
    <Row className="mt-5">
      <Col>
        <h1>
          Welcome to Victory Point.
        </h1>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col>
        <h3>
          Need help choosing a game for your party?
        </h3>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col>
        <Button color="primary">
          <Link to='/players'>
            Get Started
          </Link>
        </Button>
      </Col>
    </Row>
  </Container>
)

export default Home;
