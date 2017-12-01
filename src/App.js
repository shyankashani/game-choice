import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
import Result from './Result';
import PrimitiveDot from 'react-icons/lib/go/primitive-dot';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      result: null
    }
  }

  incAnswer(questionId) {
    let newAnswer = this.state.questions[questionId].answer + 1;
    let minAnswer = this.state.questions[questionId].minAnswer;
    let maxAnswer = this.state.questions[questionId].maxAnswer;

    if (minAnswer <= newAnswer && newAnswer <= maxAnswer) {
      this.setState(state => {
        state.questions[questionId].answer = newAnswer;
        return state;
      })
    }
  }

  decAnswer(questionId) {
    let newAnswer = this.state.questions[questionId].answer - 1;
    let minAnswer = this.state.questions[questionId].minAnswer;
    let maxAnswer = this.state.questions[questionId].maxAnswer;

    if (minAnswer <= newAnswer && newAnswer <= maxAnswer) {
      this.setState(state => {
        state.questions[questionId].answer = newAnswer;
        return state
      })
    }
  }

  setAnswer(questionId, answerId) {
    this.setState(state => {
      state.questions[questionId].answer = answerId;
      return state;
    })
  }

  reset() {}

  getQuestions() {
    axios.get(`http://localhost:3000/questions`)
    .then(result => {
      console.log('getQuestions', result.data)
      this.setState({ questions: result.data })
    })
  }

  getGame() {
    let params = '';
    for (let questionId in this.state.questions) {
      params += `/${this.state.questions[questionId].answer}`;
    }

    axios.get('http://localhost:3000/result' + params)
    .then(result => {
      console.log('getGame', result);
    })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    let routes = [
      <Route
        path='/'
        render={() => <Home /> }
        key='/'
        exact
      />
    ];

    for (let questionId in this.state.questions) {
      let path = `/${this.state.questions[questionId].criterion}`

      routes.push(
        <Route
          path={path}
          render={() =>
            <Question
              questions={this.state.questions}
              questionId={this.state.questions[questionId].id}
              answer={this.state.questions[questionId].answer}
              setAnswer={this.setAnswer.bind(this)}
              incAnswer={this.incAnswer.bind(this)}
              decAnswer={this.decAnswer.bind(this)}
            />
          }
          key={path}
        />
      );
    }

    routes.push(
      <Route
        path='/result'
        render={() =>
          <Result
            result={this.state.result}
            getGame={this.getGame.bind(this)}
          />
        }
        key='/result'
      />
    );

    return (
      <div className="text-dark">
        <Navbar color="light">
          <NavbarBrand className="text-primary">
            <PrimitiveDot /> gamechoice
          </NavbarBrand>
        </Navbar>
        <Switch>
          {routes}
        </Switch>
      </div>
    );
  }
}

export default App;
