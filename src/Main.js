import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Duration from './Duration';
import Ages from './Ages';
import Curve from './Curve';

const Main = props => (
  <main>
    <div>
      {props.criteria.age}
    </div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/players' component={Players}/>
    </Switch>
  </main>
)

export default Main
