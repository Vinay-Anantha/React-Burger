import React from "react";
import cssObj from "./Backdrop.module.css";

const backdrop = (props) =>
  props.show ? (
    <div className={cssObj.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
