import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.props.getGame();
  }

  render(){

    const mins = [];
    if (this.props.result.duration === 1) {
      mins.push('< 15 mins')
    } else if (this.props.result.duration === 2) {
      mins.push('15-45 min')
    } else if (this.props.result.duration === 3) {
      mins.push('45-90 min')
    } else {
      mins.push('90 mins +')
    }

    const age = `age ${this.props.result.age}+`;

    const players = `${this.props.result.minPlayers}-${this.props.result.maxPlayers} players`;

    return (
      <div>
        <Container className="text-center p-5">
          <Row className="mt-5 pt-5">
            <div className="d-flex justify-content-center pl-5 pr-5 text-left">
              <div>
                <img src={this.props.result.image} style={{width: "240px"}} />
              </div>
              <div className="pl-5">
                <h3 className="mb-3">
                  {this.props.result.name}
                </h3>
                <div style={{fontFamily: "Lora", fontSize: "18px"}}>
                  {this.props.result.about}
                </div>
                <div className="mt-3 text-primary">
                  {players} | {age} | {mins}
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Navbar color="light" className="fixed-bottom p-3">
          <Link to="/complexity">
            <Button className="pt-2 pb-2 text-muted" color="light">
                &larr; Back
            </Button>
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <Button outline className="pl-4 pr-4 pt-2 pb-2 text-muted">
                  Reset
                </Button>
              </Link>
              <Button
                color="success"
                className="pl-4 pr-4 pt-2 pb-2 ml-3"
                onClick={this.toggle.bind(this)}
              >
                Locate + Play
              </Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
                <ModalHeader
                  toggle={this.toggle.bind(this)}
                >
                  <div className="text-muted" style={{fontSize: "18px"}}>
                    Location
                  </div>
                  <div style={{fontSize: "60px"}}>
                    Shelf {this.props.result.location}
                  </div>
                </ModalHeader>
                <ModalFooter>
                  <Link to="/">
                    <Button
                      color="primary"
                      className="pl-4 pr-4 pt-2 pb-2 ml-3"
                    >
                        Got it!
                    </Button>
                  </Link>
                </ModalFooter>
              </Modal>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

}


export default Result;
