import React from "react";
import cssObj from "./Modal.module.css";
const Modal = (props) => {
  return <div className="cssObj.Modal">{props.children}</div>;
};

export default Modal;
