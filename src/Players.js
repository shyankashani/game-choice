import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from './Input';
import Footer from './Footer';

const Players = props => (
  <div>
    <Container className="text-center">
      <Row className="mt-5">
        <Col>
          <h1>
            How many players are in your group?
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Input
            criteria="players"
            data={props.criteria.players}
            increment={props.increment}
            decrement={props.decrement}
          />
        </Col>
      </Row>
    </Container>
    <Footer prev="/" next="/age" />
  </div>
)

export default Players;
