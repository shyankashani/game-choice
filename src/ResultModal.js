import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class ResultModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modal}>
        <ModalHeader>
          <div className="text-muted" style={{fontSize: "18px"}}>
            Location
          </div>
          <div style={{fontSize: "60px"}}>
            {this.props.location}
          </div>
        </ModalHeader>
        <ModalFooter>
          <Link to="/">
            <Button
              color="primary"
              className="pl-4 pr-4 pt-2 pb-2 ml-3"
              onClick={this.props.toggleModal}
            >
                Got it!
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ResultModal;
