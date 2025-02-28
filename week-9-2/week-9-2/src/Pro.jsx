import React from "react";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>; // Accessing props
}

function Pro() {
  return <Greeting name="Rohit" />; // Passing props
}

export default Pro;
