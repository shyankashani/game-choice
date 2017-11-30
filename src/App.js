import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
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
    this.setState(state => {
      state.questions[questionId].answer = state.questions[questionId].answer + 1;
      return state;
    })
  }

  decAnswer(questionId) {
    this.setState(state => {
      state.questions[questionId].answer = state.questions[questionId].answer - 1;
      return state
    })
  }

  setAnswer(questionId, answerId) {
    this.setState(state => {
      state.questions[questionId].answer = answerId;
      return state;
    })
  }

  reset() {
    this.setState({
      players: 4,
      age: 8,
      duration: 1,
      complexity: 1,
      result: {
        name: '',
        image_url: 'https://www.onegoalgraduation.org/wp-content/uploads/2016/07/gray_square.png',
        description: ''
      }
    })
  }

  getQuestions() {
    axios.get(`http://localhost:3000/questions`)
    .then(result => {
      console.log('getQuestions', result.data)
      this.setState({ questions: result.data })
    })
  }

  getGame() {
    axios.get(`http://localhost:3000/result/${this.state.players}/${this.state.age}/${this.state.duration}/${this.state.complexity}/`)
    .then(result => {
      if (result.data.length) {
        let random = Math.floor(Math.random() * result.data.length);
        this.setState({ result: result.data[random] })
      }
    })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    let routes = [ <Route exact path='/' render={() => <Home />} key='/' /> ];
    for (let questionId in this.state.questions) {
      routes.push(
        <Route
          path={this.state.questions[questionId].path}
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
          key={this.state.questions[questionId].path}
        />
      )
    }

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
