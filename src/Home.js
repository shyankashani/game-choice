import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
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
            <Link to="/duration=">
              <Button size="lg" color="primary" className="pl-4 pr-4 pt-2 pb-2 badge-pill">
                Get Started
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
