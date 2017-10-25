import React from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = props => (
  <Container className="text-center p-5">
    <Row className="mt-5 p-5">
      <Col>
        <h3>
          Play the perfect game.
        </h3>
      </Col>
    </Row>
    <Row className="mt-5 p-5">
      <Col>
        <Link to="/players">
          <Button size="lg" color="primary" className="pl-4 pr-4 pt-2 pb-2">
              Get Started
          </Button>
        </Link>
      </Col>
    </Row>
  </Container>
)

export default Home;
