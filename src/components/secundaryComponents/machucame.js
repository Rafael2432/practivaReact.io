import React, { useReducer } from "react";
import "../../styles/css/machucame.css";

function reducer(state, action) {
  switch (action) {
    case "increase":
      if (state.count > 9) {
        return { count: 0 };
      } else {
        return { count: state.count++ };
      }

    case "decrease":
      return { count: state.count - 1 };
    default:
      console.log("press error");
  }
}

function Machucame(props) {
  const [count, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="padre">
      <div className="cuadro">
        <h1>{props.children}</h1>
        <button onClick={props.toggle} className="button">
          {props.message.toUpperCase()}
        </button>

        {count.count}
        <div className="buttonContainer">
          <button
            onClick={() => {
              dispatch("increase");
            }}
            className="button"
          >
            Increase
          </button>
          <button
            onClick={() => {
              dispatch("decrease");
            }}
            className="button"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
export default Machucame;
