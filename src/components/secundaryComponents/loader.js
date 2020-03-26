import React from "react";
import "../../styles/css/loader.css";

export default function Loader(props) {
  const [state, setState] = React.useState("orange");

  function interval() {
    const id = setInterval(() => {
      setState(prevState => {
        if (prevState === "orange") {
          return "white";
        } else {
          return "orange";
        }
      });
    }, 160);
    return id;
  }

  React.useEffect(() => {
    const id = interval();

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="loaderPort">
      <div className={state}></div>
    </div>
  );
}
