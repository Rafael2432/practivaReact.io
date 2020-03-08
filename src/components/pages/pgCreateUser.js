import React from "react";
import CreateUser from "../principalComponents/createUser.js";
import avatar from "../../images/mathiasVeridico.png";
import Form from "../principalComponents/form.js";
import Button from "../secundaryComponents/button.js";

class pgCreateUser extends React.Component {
  state = {
    form: {
      Name: "",
      "Last name": "",
      Email: ""
    }
  };

  onChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="estorbo">
        <div className="diosito">
          <Button class="buttonUser" to="/users" message="Go back" />
          <CreateUser
            name={this.state.form.Name}
            lastName={this.state.form["Last name"]}
            email={this.state.form.Email}
            avatar={avatar}
          />

          <Form state={this.state} change={this.onChange} />
        </div>
      </div>
    );
  }
}

export default pgCreateUser;
