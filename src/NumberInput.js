import React from 'react';
import CircleButton from './buttons/CircleButton';
import Plus from 'react-icons/lib/go/plus';
import Dash from 'react-icons/lib/go/dash';

const NumberInput = props => (
  <div className="d-flex justify-content-center">
    <CircleButton
      icon={<Dash />}
      questionId={props.questionId}
      handleClick={props.decAnswer}
    />

    <div style={{fontSize: "68px"}} className="ml-5 mr-5 text-primary">
      {props.answer}
    </div>

    <CircleButton
      icon={<Plus />}
      questionId={props.questionId}
      handleClick={props.incAnswer}
    />
  </div>
);

export default NumberInput;
