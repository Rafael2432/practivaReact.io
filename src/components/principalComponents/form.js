import React from "react";
import "../../styles/css/form.css";

class form extends React.Component {
  state = {};
  handleClick = e => {
    console.log(this.props.state);
  };

  render() {
    return (
      <form className="containerForm">
        <input
          onChange={this.props.change}
          value={this.props.state.form.Name}
          name="Name"
          className="nameText"
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          onChange={this.props.change}
          value={this.props.state.form["Last name"]}
          name="Last name"
          className="lastNameText"
          type="text"
          placeholder="Last Name"
        />
        <br />

        <input
          onChange={this.props.change}
          value={this.props.state.form.Email}
          name="Email"
          className="emailText"
          type="text"
          placeholder="Email"
        />
        <br />

        <input
          className="formButton"
          onClick={this.handleClick}
          type="button"
          value="Ready"
        />
      </form>
    );
  }
}
export default form;
