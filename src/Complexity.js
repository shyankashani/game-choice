import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Footer from './Footer';

const Complexity = props => (
  <div>
    <Container className="text-center p-5">
      <Row className="p-5 mt-5">
        <Col>
          <h3>
            How steep should the learning complexity be?
          </h3>
        </Col>
      </Row>
      <Row className="mt-5 p-5">
        <Col>
          <div className="d-flex justify-content-center">
            <Button
              outline
              color="success"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('complexity', 1)}
            >
              Gentle
            </Button>
            <Button
              outline
              color="warning"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('complexity', 2)}
            >
              Medium
            </Button>
            <Button
              outline
              color="danger"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('complexity', 3)}
            >
              Brutal
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer prev="/duration" next="/result" />
  </div>
)

export default Complexity;
