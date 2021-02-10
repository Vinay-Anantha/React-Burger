import React, { Component } from "react";
import PropTypes from "prop-types";
import cssObj from "./BurgerIngredient.module.css";
class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className={cssObj.BreadTop}>
            <div className={cssObj.Seeds1}></div>
            <div className={cssObj.Seeds2}></div>
          </div>
        );
        break;
      case "salad":
        ingredient = <div className={cssObj.Salad}></div>;
        break;
      case "meatA":
        ingredient = <div className={cssObj.MeatA}></div>;
        break;
      case "meatB":
        ingredient = <div className={cssObj.MeatB}></div>;
        break;
      case "cheese":
        ingredient = <div className={cssObj.Cheese}></div>;
        break;
      case "bread-bottom":
        ingredient = <div className={cssObj.BreadBottom}></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredient;
