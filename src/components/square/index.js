import React from "react";

const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.index}
  </button>
);
export default Square;
