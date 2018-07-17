import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {

    let nextPathButton = [];

    if (this.props.nextPathEnabled) {
      if (this.props.nextPath === '/result') {
        nextPathButton.push(
          <Button key={0} className="pl-4 pr-4 pt-2 pb-2 ml-3 badge-pill" color="success"> Complete </Button>
        );
      } else {
        nextPathButton.push(
          <Button key={1} className="pl-4 pr-4 pt-2 pb-2 ml-3 badge-pill" color="primary"> Continue </Button>
        );
      }
    } else {
      if (this.props.nextPath === '/result') {
        nextPathButton.push(
          <Button disabled key={2} className="pl-4 pr-4 pt-2 pb-2 ml-3 badge-pill" color="success"> Complete </Button>
        );
      } else {
        nextPathButton.push(
          <Button disabled key={3} className="pl-4 pr-4 pt-2 pb-2 ml-3 badge-pill" color="primary"> Continue </Button>
        );
      }
    }

    return (
      <div className="fixed-bottom bg-light">
        <Progress value={this.props.percentComplete} style={{height: "2px"}} />
        <div className="d-flex justify-content-between p-3">
          <div>
            <Link to={this.props.prevPath}>
              <Button className="pt-2 pb-2 mr-5 text-muted" color="light">
                &larr; Back
              </Button>
            </Link>
          </div>
          <div>
            <Link to={this.props.nextPath}>
              {nextPathButton}
          </Link>
        </div>
      </div>
    </div>
  )
}
}

export default Footer;
