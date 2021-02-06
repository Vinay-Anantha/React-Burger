import React from "react";
import cssObj from "./BuildControl.module.css";
const buildControl = (props) => (
  <div className={cssObj.BuildControl}>
    <div className={cssObj.Label}>{props.ingredientLabel}</div>
    <button
      className={cssObj.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={cssObj.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
