import React from 'react';
import { Button } from 'reactstrap';

const InputTwo = props => (
  <div className="d-flex justify-content-center" >
    <Button
      outline
      color="success"
      className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
    >
      15 min
    </Button>
    <Button
      outline
      color="primary"
      className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
    >
        Short
    </Button>
    <Button
      outline
      color="warning"
      className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
    >
        Medium
    </Button>
    <Button
      outline
      color="danger"
      className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
    >

    </Button>
  </div>
)

export default InputTwo;
