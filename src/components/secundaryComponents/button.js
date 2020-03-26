import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.to) {
    return (
      <Link to={props.to} className={props.class}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={() => {
          if (props.click) {
            props.click();
          }
        }}
        className={props.class}
      >
        {props.children}
      </button>
    );
  }
}
export default Button;
