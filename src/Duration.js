import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
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
          <div className="d-flex justify-content-center" >
            <Button
              outline
              color="success"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('duration', 1)}
            >
              &#60; 15 mins
            </Button>
            <Button
              outline
              color="primary"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('duration', 2)}
            >
                15-45 min
            </Button>
            <Button
              outline
              color="warning"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('duration', 3)}
            >
              45-90 min
            </Button>
            <Button
              outline
              color="danger"
              className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
              size="lg"
              onClick={() => props.setCriteria('duration', 4)}
            >
              90 mins +
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer prev="/age" next="/complexity" curr="/duration" criteria={props.criteria} />
  </div>
)

export default Duration;
