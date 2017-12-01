import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col, Button, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

class ResultBody extends Component {
  render() {
    return (
      <div className="fixed-bottom bg-light">
        <Progress value={100} style={{height: "2px"}} />
        <div className="d-flex justify-content-between p-3">
          <div>
            <Link to="/complexity">
              <Button className="pt-2 pb-2 text-muted" color="light">
                &larr; Back
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <Button outline className="pl-4 pr-4 pt-2 pb-2 text-muted"> Reset </Button>
            </Link>
            <Button
              color="success"
              className="pl-4 pr-4 pt-2 pb-2 ml-3"
              onClick={this.props.toggleModal}
            >
              Locate + Play
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultBody;
