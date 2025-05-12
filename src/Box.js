//Box.js
import React from "react";
import "./App.css";

function Box(props) {
  return (

    <div className="box">
        Box1
        {props.name}
    </div>

  );
}

export default Box;