import React, { Component } from 'react';

class UnknownPage extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-danger">
          <i className="fa fa-exclamation-circle"></i>&nbsp;
          Page not found
        </div>
      </div>
    );
  }
}

export default UnknownPage;