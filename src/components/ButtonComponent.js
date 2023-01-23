import React from "react";

function ButtonComponent({ name, functionName }) {
  return <button onClick={functionName}>{name}</button>;
}

export default ButtonComponent;
