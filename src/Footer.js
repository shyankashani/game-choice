import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = props => (
  <div>
    <Navbar color="light" className="fixed-bottom p-3">
      <Link to={props.prev}>
        <Button className="pt-2 pb-2 text-muted" color="light">
            &larr; Go back
        </Button>
      </Link>
      <Link to={props.next}>
        { props.next === '/result'
          ? <Button color="success"> Complete </Button>
          : <Button color="primary"> Continue </Button>
        }

      </Link>
    </Navbar>
  </div>
)

export default Footer;
