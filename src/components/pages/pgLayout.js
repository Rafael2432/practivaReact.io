import React from "react";
import "../../styles/css/pgLayout.css";
import { Link } from "react-router-dom";
import bigContext from "../app/context.js";
import logo from "../../images/lion.png";

export default function Layout(props) {
  const [user] = React.useState({
    //intentar con solo un argumento
    name: "Paco",
    "last name": "de la rosa",
    email: "pacoBacan@gmail.com"
  });

  return (
    <bigContext.Provider value={user}>
      <div className="barra">
        <Link to="/" className="presioname">
          <div className="whiteCircle">
            <img src={logo} alt="Logo" height="40px" />
          </div>
        </Link>
      </div>
      <div className="estorbo">
        <div className="diosito">{props.children}</div>
      </div>
    </bigContext.Provider>
  );
}
