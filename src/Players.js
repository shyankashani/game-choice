import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from './Input';
import Footer from './Footer';

const Players = props => (
  <div>
    <Container className="text-center p-5">
      <Row className="p-5 mt-5">
        <Col>
          <h3>
            How many people will be playing?
          </h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Input
            criteria="players"
            data={props.criteria.players}
            incAnswer={props.incAnswer}
            decAnswer={props.decAnswer}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            people
          </h5>
        </Col>
      </Row>
    </Container>
    <Footer prev="/" next="/age" curr="/players" criteria={props.criteria} stage={25} />
  </div>
)

export default Players;
