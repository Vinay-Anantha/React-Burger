import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import cssObj from "./CheckoutSummary.module.css";
const checkoutSummary = (props) => {
  return (
    <div className={cssObj.CheckoutSummary}>
      <h1>We hope you love it!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
