import React from "react";

function Button(props) {
  return (
    <button type={props.type} className={`rounded-lg p-5 ${props.customClass}`}>
      {props.children}
    </button>
  );
}

export default Button;
