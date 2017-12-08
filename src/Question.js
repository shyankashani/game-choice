import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NumberInput from './NumberInput';
import AnswerButton from './buttons/AnswerButton';
import Footer from './Footer';
import pathFinder from './utils/pathFinder';
import percentCalculator from './utils/percentCalculator';

class Question extends Component {
  render() {

    let questionId = this.props.questionId;
    let questions = this.props.questions;
    let answers = questions[questionId].answers;

    let inputs = [];

    if (answers) {
      for (let answerId in answers) {
        inputs.push(
          <AnswerButton
            answerId={answerId}
            questionId={questionId}
            text={answers[answerId].text}
            setAnswer={this.props.setAnswer}
            key={answerId}
          />
        );
      }
    } else {
      inputs.push(
        <NumberInput
          questionId={questionId}
          answer={this.props.answer}
          incAnswer={this.props.incAnswer}
          decAnswer={this.props.decAnswer}
          key={0}
        />
      );
    }

    return (
      <div>
        <Container className="text-center p-5">
          <Row className="p-5 mt-5">
            <Col>
              <h3>
                {this.props.questions[this.props.questionId].text}
              </h3>
            </Col>
          </Row>
          <Row className="mt-5 p-5">
            <Col>
              <div className="d-flex justify-content-center" >
                {inputs}
              </div>
            </Col>
          </Row>
        </Container>
        <Footer
          prevPath={pathFinder.prevPath(questionId, questions)}
          nextPath={pathFinder.nextPath(questionId, questions)}
          percentComplete={percentCalculator(questionId, questions)}
        />
      </div>
    );

  }
}


export default Question;
