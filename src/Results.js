import React from 'react';
import { Navbar, NavbarBrand, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Results = props => (
  <Container className="text-center p-5">
    <Row className="mt-5 p-5">
      <Col>
        <h3>
          Here are your results:
        </h3>
      </Col>
    </Row>
    <Row className="mt-5 p-5">
      <Col>
        {props.criteria.players}
      </Col>
      <Col>
        {props.criteria.age}
      </Col>
      <Col>
        {props.criteria.duration}
      </Col>
      <Col>
        {props.criteria.curve}
      </Col>
    </Row>
  </Container>
)

export default Results;
