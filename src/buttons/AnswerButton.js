import React from 'react';
import { Button } from 'reactstrap';
import colorSequence from '../utils/colorSequence.js'

const AnswerButton = props => (
  <Button
    outline
    color={colorSequence[props.answerId]}
    className="pl-4 pr-4 pt-2 pb-2 mr-3 ml-3"
    size="lg"
    onClick={() => props.setAnswer(props.questionId, props.answerId)}
  >
    {props.text}
  </Button>
)

export default AnswerButton;
