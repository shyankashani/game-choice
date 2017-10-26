import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Result extends Component {

  constructor(props) {
    super(props);
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
                  {this.props.result.min_players}-{this.props.result.max_players} players |&nbsp;
                    ages {this.props.result.min_age}+
                    |&nbsp;
                  {this.props.result.playing_time} mins
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Navbar color="light" className="fixed-bottom p-3">
          <Button className="pl-4 pr-4 pt-2 pb-2 text-muted" color="muted">
              Go back
          </Button>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline className="pl-4 pr-4 pt-2 pb-2" color="primary">
                  Reset
              </Button>
              <Button className="pl-4 pr-4 pt-2 pb-2 ml-3" color="success">
                Locate + Play
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

}


export default Result;
