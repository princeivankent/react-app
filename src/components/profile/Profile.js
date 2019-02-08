import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    console.log(props.match.params.profile_id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;