import React from "react";
import { Link } from "react-router-dom";

class button extends React.Component {
  render() {
    return (
      <Link to={this.props.to} className={this.props.class}>
        {this.props.message}
      </Link>
    );
  }
}
export default button;
