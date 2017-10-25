import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InputTwo from './InputTwo';
import Footer from './Footer';

const Duration = props => (
  <div>
    <Container className="text-center p-5">
      <Row className="p-5 mt-5">
        <Col>
          <h3>
            How long a game do you want to play?
          </h3>
        </Col>
      </Row>
      <Row className="mt-5 p-5">
        <Col>
          <InputTwo
            criteria="duration"
            data={props.criteria.duration}
            increment={props.increment}
            decrement={props.decrement}
          />
        </Col>
      </Row>
    </Container>
    <Footer prev="/age" next="/curve" />
  </div>
)

export default Duration;
