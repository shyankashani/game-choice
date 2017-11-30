import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom bg-light" >
        <Progress value={this.props.stage} style={{height: "2px"}} />
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
              { this.props.nextPath === '/result'
                ? <Button className="pl-4 pr-4 pt-2 pb-2 ml-3" color="success"> Complete </Button>
                : <Button className="pl-4 pr-4 pt-2 pb-2 ml-3" color="primary"> Continue </Button>
            }
          </Link>
        </div>
      </div>
    </div>
  )
}
}

export default Footer;
