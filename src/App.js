import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { AnimatedSwitch } from 'react-router-transition';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Duration from './Duration';
import Age from './Age';
import Complexity from './Complexity';
import Result from './Result';
import Footer from './Footer';
import PrimitiveDot from 'react-icons/lib/go/primitive-dot';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: 4,
      age: 8,
      duration: 1,
      complexity: 1,
      stage: 3,
      result: {
        name: '',
        image_url: 'https://www.onegoalgraduation.org/wp-content/uploads/2016/07/gray_square.png',
        description: ''
      }
    }
  }

  increment(criteria) {
    this.setState(prevState => {
      let nextState = prevState;
      nextState[criteria] = nextState[criteria] + 1;
      return nextState;
    })
  }

  decrement(criteria) {
    this.setState(prevState => {
      let nextState = prevState;
      nextState[criteria] = nextState[criteria] - 1;
      return nextState;
    })
  }

  setCriteria(criteria, payload) {
    this.setState(prevState => {
      let nextState = prevState;
      nextState[criteria] = payload;
      return nextState;
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

  getGame() {
    console.log(this.state);
    axios.get(`http://localhost:3000/result/${this.state.players}/${this.state.age}/${this.state.duration}/${this.state.complexity}/`)
    .then(result => {
      console.log(result.data)
      if (result.data.length) {
        let random = Math.floor(Math.random() * result.data.length);
        this.setState({ result: result.data[random] })
      }
    })
  }

  render() {
    return (
      <div className="text-dark">
        <Navbar color="light">
          <NavbarBrand className="text-primary">
            <PrimitiveDot /> gamechoice
          </NavbarBrand>
        </Navbar>
        <Switch
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.offset}%)` })}
          className="switch-wrapper"
          >
          <Route
            exact
            path='/'
            render={() => <Home criteria={this.state} reset={this.reset.bind(this)} />}
          />
          <Route
            path='/players'
            render={() => <Players criteria={this.state} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />}
          />
          <Route
            path='/age'
            render={() => <Age criteria={this.state} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />}
          />
          <Route
            path='/duration'
            render={() => <Duration criteria={this.state} setCriteria={this.setCriteria.bind(this)} />}
          />
          <Route
            path='/complexity'
            render={() => <Complexity criteria={this.state} setCriteria={this.setCriteria.bind(this)} />}
          />
          <Route
            path='/result'
            render={() => <Result result={this.state.result} getGame={this.getGame.bind(this)} />}
          />
      </Switch>
      </div>
    );
  }
}

export default App;
