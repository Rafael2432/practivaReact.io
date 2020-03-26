import React from "react";
import "../../styles/css/form.css";

export default function Form(props) {
  const handleClick = e => {
    console.log(props.form);
  };

  return (
    <form className="containerForm">
      <input
        onChange={props.change}
        value={props.form.Name}
        name="Name"
        className="nameText"
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        onChange={props.change}
        value={props.form["Last name"]}
        name="Last name"
        className="lastNameText"
        type="text"
        placeholder="Last Name"
      />
      <br />

      <input
        onChange={props.change}
        value={props.form.Email}
        name="Email"
        className="emailText"
        type="text"
        placeholder="Email"
      />
      <br />

      <input
        className="formButton"
        onClick={handleClick}
        type="button"
        value="Ready"
      />
    </form>
  );
}
