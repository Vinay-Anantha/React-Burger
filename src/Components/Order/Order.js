import { checkPropTypes } from "prop-types";
import React from "react";
import cssObj from "./Order.module.css";
const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      quantity: props.ingredients[ingredientName]
    });
  }
  const filterIngredients = ingredients.filter((i) => {
    return i.name !== "price";
  });
  const ingredientsOutput = filterIngredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.quantity})
      </span>
    );
  });
  return (
    <div className={cssObj.Order}>
      <p>Ingredients : {ingredientsOutput}</p>
      <p>
        Price <strong>₹{props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
