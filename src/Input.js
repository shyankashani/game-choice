import React from 'react';
import Plus from 'react-icons/lib/go/plus';
import Dash from 'react-icons/lib/go/dash';

const Input = props => (
  <div className="d-flex justify-content-center">
    <div
      className="rounded-circle bg-light"
      style={{width: "106px"}}
      onClick={() => props.decrement(props.criteria)}
      >
      <div style={{fontSize: "60px"}} className="text-primary">
        <Dash />
      </div>
    </div>

    <div style={{fontSize: "68px"}} className="ml-5 mr-5 text-primary">
      {props.data}
    </div>

    <div
      className="rounded-circle bg-light"
      style={{width: "106px"}}
      onClick={() => props.increment(props.criteria)}
      >
      <div style={{fontSize: "60px"}} className="text-primary">
        <Plus />
      </div>
    </div>
  </div>
)

export default Input;
