import React from "react";
import "../../styles/css/pgUserList.css";
import UserList from "../principalComponents/userList.js";
import Button from "../secundaryComponents/button";
import Loader from "../secundaryComponents/loader.js";
import MoreCharacters from "../secundaryComponents/moreCharacters";

class pgUserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      nextPage: 1,
      data: {
        results: []
      }
    };
    // console.log(this.state);
  }
  componentDidMount() {
    this.peticion.call(this);
  }
  async peticion() {
    try {
      this.setState({
        loading: true
      });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        error: null,
        nextPage: this.state.nextPage + 1,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        }
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
      console.log("error");
    }
  }

  render() {
    if (!this.state.error && this.state.loading) {
      return (
        <React.Fragment>
          <Loader />
        </React.Fragment>
      );
    } else if (!this.state.error && !this.state.loading) {
      return (
        <React.Fragment>
          <UserList data={this.state.data.results} />
          <div className="estorbo2">
            <Button class="buttonList" to="/users/new" message="New user" />
            <MoreCharacters click={this.peticion.bind(this)} />
          </div>
        </React.Fragment>
      );
    } else {
      return <h1>Error ocurred</h1>;
    }
  }
}
export default pgUserList;
