import React from "react";
import "../../styles/css/eachUser.css";

class eachUser extends React.Component {
  render() {
    return (
      <div className="father">
        <div className="profileImage">
          <img
            className="image"
            height="110px"
            width="110"
            src={this.props.person.image}
            alt="avatar"
          />
        </div>
        <div className="data">
          <p className="info" id="name">
            {this.props.person.name}
          </p>
          <p className="info" id="job">
            {this.props.person.species} ({this.props.person.status})
          </p>
          <p className="info" id="email">
            {/* <span className="contact">Email: </span> */}
            {this.props.person.type}
          </p>
          <p className="info" id="twitter">
            {/* <span className="contact">Twitter: </span> */}
            {this.props.person.gender}
          </p>
        </div>
      </div>
    );
  }
}
export default eachUser;
