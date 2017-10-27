import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Progress extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const circles = [];
    for (let i = 0; i < Object.keys(this.props.criteria).length - 1; i++) {

      let value = this.props.criteria[Object.keys(this.props.criteria)[i]];
      let label = [];
      if (Object.keys(this.props.criteria)[i] === 'players') {
        label.push('players')
      } else if (Object.keys(this.props.criteria)[i] === 'age') {
        label.push('min age')
      } else if (Object.keys(this.props.criteria)[i] === 'duration') {
        label.push('minutes')
      } else {
        label.push('tufness')
      }

      circles.push(
        <div style={{width: "80px"}} className="text-center">
          <div
            className="m-auto border border-primary rounded-circle bg-primary text-white text-center"
            style={{width: "24px", height: "24px", fontSize: "14px"}}
          >
            {value}
          </div>
          <div className="m-auto text-muted" style={{fontSize: "11px", padding: "2px 0 0 0"}}>
            {label}
          </div>
        </div>
      )
    }


    return (
        <div className="d-flex justify-content-around">
          {circles}
        </div>
    )
  }

}



export default Progress;
