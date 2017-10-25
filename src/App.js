import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { AnimatedSwitch } from 'react-router-transition';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Duration from './Duration';
import Age from './Age';
import Curve from './Curve';
import Results from './Results';
import Footer from './Footer';
import PrimitiveDot from 'react-icons/lib/go/primitive-dot';
import axios from 'axios';

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

  setCriteria(criteria, payload) {
    this.setState(prevState => {
      let nextState = prevState;
      nextState[criteria] = payload;
      return nextState;
    })
  }

  getGame() {
    console.log('this.state', this.state);
    axios.get(`http://localhost:3000/result/${this.state.players}/${this.state.age}/${this.state.duration}/${this.state.curve}/`)
    .then(result => { console.log(result) })
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
          <Route exact path='/' render={() => <Home criteria={this.state} />} />
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
            render={() => <Duration setCriteria={this.setCriteria.bind(this)} />}
          />
          <Route
            path='/curve'
            render={() => <Curve setCriteria={this.setCriteria.bind(this)} getGame={this.getGame.bind(this)} />}
          />
          <Route
            path='/results'
            render={() => <Results criteria={this.state} />}
          />
      </Switch>
      </div>
    );
  }
}

export default App;
