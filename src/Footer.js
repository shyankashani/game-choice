import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Progress from './Progress';

const Footer = props => (
  <div className="d-flex justify-content-between fixed-bottom p-3 bg-light" >
    <div>
      <Link to={props.prev}>
        <Button className="pt-2 pb-2 mr-5 text-muted" color="light">
            &larr; Back
        </Button>
      </Link>
    </div>
    <Progress criteria={props.criteria} curr={props.curr}/>
    <div>
      <Link to={props.next}>
        { props.next === '/result'
          ? <Button className="pl-4 pr-4 pt-2 pb-2 ml-3" color="success"> Complete </Button>
          : <Button className="pl-4 pr-4 pt-2 pb-2 ml-3" color="primary"> Continue </Button>
        }
    </Link>
    </div>
  </div>
)

export default Footer;
