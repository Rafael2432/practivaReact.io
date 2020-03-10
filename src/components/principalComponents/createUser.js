import React from "react";
import Ban from "../../images/winter.jpg";
import "../../styles/css/createUser.css";

class createUser extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="header">
            <img className="ban" height="100px" src={Ban} alt="logo" />
          </header>

          <section className="section">
            <img
              className="avatar"
              height="80px"
              src={this.props.avatar}
              alt="logo"
            />
            <h3>
              {this.props.name || "Name"}
              <br />
              {this.props.lastName || "Last name"}
            </h3>
          </section>

          <footer className="footer">{this.props.email || "Email"}</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default createUser;
