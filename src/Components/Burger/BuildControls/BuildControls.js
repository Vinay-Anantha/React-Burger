import React from "react";
import cssObj from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Meat1",
    type: "meat1"
  },
  {
    label: "Meat2",
    type: "meat2"
  },
  {
    label: "Cheese",
    type: "cheese"
  }
];
const buildControls = (props) => (
  <div className={cssObj.BuildControls}>
    <p>
      Current Price : <strong>₹{props.price}</strong>{" "}
    </p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          ingredientLabel={ctrl.label}
          key={ctrl.label}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button className={cssObj.OrderButton} disabled={!props.purchaseable}>
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
