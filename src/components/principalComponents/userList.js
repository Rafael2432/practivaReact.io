import React from "react";
import EachUser from "../secundaryComponents/eachUser.js";

export default function UserList(props) {
  return (
    <ul>
      {props.data.map(person => (
        <li key={person.id}>
          <EachUser person={person} />
        </li>
      ))}
    </ul>
  );
}
