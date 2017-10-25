import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from './Input';
import Footer from './Footer';

const Duration = props => (
  <div>
    <Container className="text-center">
      <Row className="mt-5">
        <Col>
          <h1>
            How steep should the learning curve be?
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Input
            criteria="curve"
            data={props.criteria.curve}
            increment={props.increment}
            decrement={props.decrement}
          />
        </Col>
      </Row>
    </Container>
    <Footer prev="/duration" next="/results" />
  </div>
)

export default Duration;
