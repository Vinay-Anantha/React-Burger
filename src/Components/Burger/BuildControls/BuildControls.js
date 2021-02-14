import React from "react";
import cssObj from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "MeatA",
    type: "meatA"
  },
  {
    label: "MeatB",
    type: "meatB"
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
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={cssObj.OrderButton}
      disabled={!props.orderNowBtnEnabled}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
