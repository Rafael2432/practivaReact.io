import React from "react";
import "../../styles/css/loader.css";

class loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "white" };
    this.interval();
  }
  interval() {
    setInterval(() => {
      if (this.state.color === "white") {
        this.setState({
          color: "orange"
        });
      } else {
        this.setState({
          color: "white"
        });
      }
    }, 180);
  }
  render() {
    return (
      <div className="loaderPort">
        <div className={this.state.color}></div>;
      </div>
    );
  }
}
export default loader;
