import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from './Input';
import Footer from './Footer';

const Age = props => (
  <div>
    <Container className="text-center">
      <Row className="mt-5">
        <Col>
          <h1>
            How old is the youngest person in your group?
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Input
            criteria="age"
            data={props.criteria.age}
            increment={props.increment}
            decrement={props.decrement}
          />
        </Col>
      </Row>
    </Container>
    <Footer prev="/players" next="/duration" />
  </div>
)

export default Age;
