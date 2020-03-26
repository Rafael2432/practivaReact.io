import React, { useContext } from "react";
import Ban from "../../images/winter.jpg";
import "../../styles/css/createUser.css";
import bigContext from "../app/context.js";

export default function CreatUser(props) {
  const userContext = useContext(bigContext);
  return (
    <React.Fragment>
      <div className="container">
        <header className="header">
          <img className="ban" height="100px" src={Ban} alt="logo" />
        </header>

        <section className="section">
          <img className="avatar" height="80px" src={props.avatar} alt="logo" />
          <h3>
            {props.name || userContext.name}
            <br />
            {props.lastName || userContext["last name"]}
          </h3>
        </section>

        <footer className="footer">{props.email || userContext.email}</footer>
      </div>
    </React.Fragment>
  );
}
