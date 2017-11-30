import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NumberInput from './NumberInput';
import ButtonInput from './ButtonInput';
import Footer from './Footer';

class Question extends Component {
  render() {

    let questions = this.props.questions;
    let questionId = this.props.questionId;

    let currQues = questions[questionId];
    let prevQues = questions[questionId - 1];
    let nextQues = questions[questionId + 1];

    let answers = currQues.answers;

    let prevPath;
    let nextPath;

    if (prevQues) { prevPath = prevQues.path; } else { prevPath = '/'; }
    if (nextQues) { nextPath = nextQues.path; } else { nextPath = '/results'; }

    let inputs = [];

    if (answers) {
      for (let answerId in answers) {
        inputs.push(
          <ButtonInput
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
        <Footer prevPath={prevPath} nextPath={nextPath} />
      </div>
    )
  }
}


export default Question;
