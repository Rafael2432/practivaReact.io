import React from "react";
import "../../styles/css/pgLayout.css";
import { Link } from "react-router-dom";

export default props => (
  <React.Fragment>
    <div className="barra">
      <Link to="/" className="presioname">
        Presioname
      </Link>
    </div>
    <div className="estorbo">
      <div className="diosito">{props.children}</div>
    </div>
  </React.Fragment>
);
