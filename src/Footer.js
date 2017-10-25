import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = props => (
  <div>
    <Navbar color="light" className="fixed-bottom p-3">
      <Link to={props.prev}>
        <Button className="pl-4 pr-4 pt-2 pb-2 text-muted" color="muted">
            Go back
        </Button>
      </Link>
      <Link to={props.next}>
        { props.next === '/results'
          ? <Button color="success"> Complete </Button>
          : <Button color="primary"> Continue </Button>
        }

      </Link>
    </Navbar>
  </div>
)

export default Footer;
