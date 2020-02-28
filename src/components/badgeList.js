import React from "react";
import Badgecito from "./badgecitos.js";
class badgeList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map(person => (
          <li key={person.id}>
            <Badgecito person={person} />
          </li>
        ))}
      </ul>
    );
  }
}
export default badgeList;
