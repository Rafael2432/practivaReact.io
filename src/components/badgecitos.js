import React from "react";
import "../styles/badgecito.css";

class badgecito extends React.Component {
  render() {
    return (
      <div className="father">
        <div className="profileImage">
          <img
            className="image"
            height="110px"
            width="110"
            src={this.props.person.avatarUrl}
            alt="avatar"
          />
        </div>
        <div className="data">
          <p className="info" id="name">
            {this.props.person.firstName} {this.props.person.lastName}
          </p>
          <p className="info" id="job">
            {this.props.person.jobTitle}
          </p>
          <p className="info" id="email">
            <span className="contact">Email: </span>
            {this.props.person.email}
          </p>
          <p className="info" id="twitter">
            <span className="contact">Twitter: </span>
            {this.props.person.twitter}
          </p>
        </div>
      </div>
    );
  }
}
export default badgecito;
