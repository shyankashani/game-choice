import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Duration from './Duration';
import Age from './Age';
import Curve from './Curve';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: 1,
      age: 4,
      duration: 1,
      curve: 1
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

  render() {
    return (
      <div>
        <Navbar color="light">
          <NavbarBrand>
            gamechoice
          </NavbarBrand>
        </Navbar>
        <Switch>
          <Route exact path='/' render={() => <Home criteria={this.state} />} />
          <Route
            path='/players'
            render={() => <Players criteria={this.state} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />}
          />
          <Route
            path='/age'
            render={() => <Age criteria={this.state} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
