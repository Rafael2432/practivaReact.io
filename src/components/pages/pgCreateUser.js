import React, { useState } from "react";
import CreateUser from "../principalComponents/createUser.js";
import avatar from "../../images/mathiasVeridico.png";
import Form from "../principalComponents/form.js";
import Button from "../secundaryComponents/button.js";
import Machucame2 from "../secundaryComponents/machucame2";
import ReactDOM from "react-dom";
import Emoji from "../secundaryComponents/emoji";

export default function PgCreateUser(props) {
  const [form, onChange] = useForm();
  const [toggle, handleClick] = useToggle();

  return (
    <React.Fragment>
      <div className="topButtons">
        <Button click={handleClick} class="buttonUser">
          Open Window
        </Button>
        <Button class="buttonUser emojiMargin" to="/users">
          <Emoji className="emoji" symbol="👈" label="finger pointing back" />
          Go back
        </Button>
      </div>

      <CreateUser
        name={form.Name}
        lastName={form["Last name"]}
        email={form.Email}
        avatar={avatar}
      />

      <Form form={form} change={onChange} />

      {toggle &&
        ReactDOM.createPortal(
          <Machucame2 toggle={handleClick} />,
          document.getElementById("container2")
        )}
    </React.Fragment>
  );
}

function useForm() {
  const [form, setForm] = useState({
    Name: "",
    "Last name": "",
    Email: ""
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return [form, onChange];
}

function useToggle() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return [toggle, handleClick];
}
