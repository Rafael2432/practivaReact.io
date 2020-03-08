import React from "react";
import "../../styles/css/pgUserList.css";

function moreCharacters(props) {
  return (
    <div className="button2" onClick={props.click}>
      More characters
    </div>
  );
}
export default moreCharacters;
