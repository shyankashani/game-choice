import React from 'react';
import { Button } from 'reactstrap';

const Input = props => (
  <div className="d-flex justify-content-center">
    <Button
      outline
      color="primary"
      size="lg"
      className="p-5"
      onClick={() => props.decrement(props.criteria)}
      >
      <h1>
        -
      </h1>
    </Button>

    <h1 className="p-5">
      {props.data}
    </h1>

    <Button
      outline
      color="primary"
      size="lg"
      className="p-5"
      onClick={() => props.increment(props.criteria)}
      >
      <h1>
        +
      </h1>
    </Button>
  </div>
)

export default Input;
