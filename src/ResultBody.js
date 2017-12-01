import React from 'react';
import { Container, Row } from 'reactstrap';

const ResultBody = props => (
  <Container className="text-center p-5">
    <Row className="mt-5 pt-5">
      <div className="d-flex justify-content-center pl-5 pr-5 text-left">
        <div>
          <img src={props.result.imageURL} style={{width: "240px"}} />
        </div>
        <div className="pl-5">
          <h3 className="mb-3">
            {props.result.name}
          </h3>
          <div style={{fontFamily: "Lora", fontSize: "18px"}}>
            {props.result.description}
          </div>
          <div className="mt-2 text-primary">
            {props.result.minPlayers}-{props.result.maxPlayers} players | ages {props.result.minAge}+
          </div>
        </div>
      </div>
    </Row>
  </Container>
);

export default ResultBody;
