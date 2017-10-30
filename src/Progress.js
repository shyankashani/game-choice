import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Progress extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const circleClasses = 'text-center';
    const circleStyles = {width: "80px"};

    const valueClasses = 'm-auto border border-primary rounded-circle bg-primary text-white text-center';
    const valueStyles = {width: "24px", height: "24px", fontSize: "14px"};

    const labelClasses = 'm-auto text-muted';
    const labelStyles = {fontSize: "11px", padding: "2px 0 0 0"};

    const stages = ['players', 'age', 'duration', 'complexity'];
    const circles = [];

    for (let i = 0; i < this.props.criteria.stage; i++) {
      circles.push(
        <div style={circleStyles} className={circleClasses}>
          <div className={valueClasses} style={valueStyles}>
            {this.props.criteria[stages[i]]}
          </div>
          <div className={labelClasses} style={labelStyles}>
            {stages[i]}
          </div>
        </div>
      )
    }

    for (let j = this.props.criteria.stage; j < 4; j++) {
      circles.push(
        <div style={circleStyles} className={circleClasses}>
          <div className='m-auto border border-primary rounded-circle text-white text-center' style={valueStyles}>
            &nbsp;
          </div>
          <div className={labelClasses} style={labelStyles}>
            &nbsp;
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
