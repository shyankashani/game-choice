import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import ResultBody from './ResultBody';
import ResultFooter from './ResultFooter';
import ResultModal from './ResultModal';

class Result extends Component {

  componentDidMount() {
    this.props.getGame();
  }

  render() {
    if (this.props.result) {
      return (
        <div>
          <ResultBody result={this.props.result} />
          <ResultFooter toggleModal={this.props.toggleModal} />
          <ResultModal modal={this.props.modal} toggleModal={this.props.toggleModal} />
        </div>
      )
    } else {
      return(<div>Wait</div>)
    }
  }
}

export default Result;
