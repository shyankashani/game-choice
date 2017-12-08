import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class WideButton extends Component {
  render() {
    if (this.props.linkTo) {
      return (
        <Link to={this.props.linkTo}>
          <Button
            className="pl-4 pr-4 pt-2 pb-2 ml-3"
            color={this.props.color}
          >
            {this.props.text}
          </Button>
        </Link>
      );
    }

    if (this.props.handleClick) {
      return (
        <Button
          className="pl-4 pr-4 pt-2 pb-2 ml-3"
          onClick={this.props.handleClick}
        >
          {this.props.text}
        </Button>
      );
    }
  }
}

export default WideButton;


// <WideButton linkTo="" handleClick="" text="" color="" />


return (
  <div className="fixed-bottom bg-light">
    <Progress value={this.props.percentComplete} style={{height: "2px"}} />
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
