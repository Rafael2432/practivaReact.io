import React from "react";
import "../../styles/css/eachUser.css";
import Emoji from "./emoji";

function Switch({ status }) {
  //minuscula
  switch (status) {
    case "Alive":
      return <Emoji symbol="😀" label="alive" className="bigger" />;
    case "Dead":
      return <Emoji symbol="🤕" label="dead" className="bigger" />;
    case "unknown":
      return <Emoji symbol="🤫" label="unknown" className="bigger" />;
    default:
      return "";
  }
}

export default function EachUser({ person }) {
  return (
    <div className="father">
      <div className="profileImage">
        <img
          className="image"
          height="110px"
          width="110"
          src={person.image}
          alt="avatar"
        />
      </div>
      <div className="data">
        <p className="info" id="name">
          {person.name}
        </p>
        <p className="info" id="job">
          {person.species} ({person.status}) {Switch(person)}
        </p>
        <p className="info" id="email">
          {/* <span className="contact">Email: </span> */}
          {person.type}
        </p>
        <p className="info" id="twitter">
          {/* <span className="contact">Twitter: </span> */}
          {person.gender}
        </p>
      </div>
    </div>
  );
}
