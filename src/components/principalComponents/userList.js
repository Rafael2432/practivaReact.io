import React from "react";
import EachUser from "../secundaryComponents/eachUser.js";
class userList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map(person => (
          <li key={person.id}>
            <EachUser person={person} />
          </li>
        ))}
      </ul>
    );
  }
}
export default userList;
