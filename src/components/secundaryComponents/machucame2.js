import React from "react";
import Machucame from "./machucame";

function machucame2(props) {
  return (
    <Machucame toggle={props.toggle} message="click">
      Volver a la lista
    </Machucame>
  );
}
export default machucame2;
