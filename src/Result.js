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
    return (
      <div>
        <Container className="text-center p-5">
          <Row className="mt-5 p-5">
            <Col>
              <h3>
                &nbsp;
              </h3>
            </Col>
          </Row>
          <Row>
            <div className="d-flex justify-content-center pl-5 pr-5 text-left">
              <div>
                <img src="http://via.placeholder.com/300.png/09f/fff" style={{width: "200px"}} />
              </div>
              <div className="pl-5">
                <div>
                  <h3>
                    {this.props.result.name}
                  </h3>
                </div>
                <div style={{fontFamily: "Lora", fontSize: "18px"}}>
                  {this.props.result.description}
                </div>
                <div className="pt-2 text-primary">
                  {this.props.result.min_players}-{this.props.result.max_players} players |&nbsp;ages {this.props.result.min_age}+&nbsp;|&nbsp;
                  {this.props.result.playing_time} mins
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Navbar color="light" className="fixed-bottom p-3">
          <Link to="/curve">
            <Button className="pt-2 pb-2 text-muted" color="light">
                &larr; Back
            </Button>
          </Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline className="pl-4 pr-4 pt-2 pb-2 text-muted">
                Reset
              </Button>
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
                  <div style={{fontSize: "64px"}}>
                    Shelf W2
                  </div>
                </ModalHeader>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={this.toggle.bind(this)}
                    className="pl-4 pr-4 pt-2 pb-2 ml-3"
                  >
                      Got it!
                  </Button>
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
