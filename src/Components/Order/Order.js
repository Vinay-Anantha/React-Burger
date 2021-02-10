import React from "react";
import cssObj from "./Order.module.css";
const Order = () => {
  return (
    <div className={cssObj.Order}>
      <p>Ingredients : </p>
      <p>
        Price <strong>₹</strong>
      </p>
    </div>
  );
};

export default Order;
