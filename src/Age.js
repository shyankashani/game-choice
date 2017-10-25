import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from './Input';
import Footer from './Footer';

const Age = props => (
  <div>
    <Container className="text-center p-5">
      <Row className="p-5 mt-5">
        <Col>
          <h3>
            How old is the youngest player?
          </h3>
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
      <Row>
        <Col>
          <h5>
            years old
          </h5>
        </Col>
      </Row>
    </Container>
    <Footer prev="/players" next="/duration" />
  </div>
)

export default Age;
