import React, { useState, useRef, useEffect } from "react";
import "../../styles/css/search.css";

export default function Search(props) {
  const inputRef = useRef(null);

  const [barColor, interval] = useChangeColor();

  useEffect(() => {
    const intervalId = interval();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <input
      ref={inputRef}
      className="search"
      id={barColor}
      type="text"
      placeholder="Search a character"
      value={props.query}
      onChange={e => {
        props.setQuery(e.target.value);
      }}
    />
  );
}

function useChangeColor() {
  const [barColor, setBarColor] = useState("grey");

  const interval = () => {
    const intervalId = setInterval(() => {
      setBarColor(prevBarColor => {
        switch (prevBarColor) {
          case "orange":
            return "grey";
          case "grey":
            return "orange";
          default:
            console.log("error del searchBar");
        }
      });
    }, 500);

    return intervalId;
  };

  return [barColor, interval];
}
