import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = props => (
  <div>
    <Navbar color="light" className="fixed-bottom">
      <Button color="secondary">
        <Link to={props.prev}>
          Back
        </Link>
      </Button>
      <Button color="primary">
        <Link to={props.next}>
          Continue
        </Link>
      </Button>
    </Navbar>
  </div>
)

export default Footer;
