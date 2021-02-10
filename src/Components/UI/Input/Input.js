import React from "react";

import cssObj from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={cssObj.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={cssObj.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={cssObj.InputElement} {...props} />;
  }

  return (
    <div className={cssObj.Input}>
      <label className={cssObj.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
