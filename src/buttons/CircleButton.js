import React from 'react';

const CircleButton = props => (
  <div
    className="rounded-circle bg-light"
    style={{width: "106px"}}
    onClick={() => props.handleClick(props.questionId)}
  >
    <div style={{fontSize: "60px"}} className="text-primary">
      {props.icon}
    </div>
  </div>
);

export default CircleButton;
