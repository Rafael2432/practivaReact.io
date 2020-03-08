import React from "react";
import "../../styles/css/pgError404.css";

function error() {
  return (
    <React.Fragment>
      <h1 className="tituloError">
        Error <span className="e404">404</span>
      </h1>
      <p className="parrafoError">
        hemos cometido un error lo sentidmos mucho alaverga{" "}
      </p>
    </React.Fragment>
  );
}
export default error;
