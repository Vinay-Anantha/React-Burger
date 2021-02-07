import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import cssObj from "./Logo.module.css";
const logo = (props) => {
  return (
    <div className={cssObj.Logo}>
      <img src={burgerLogo} alt="React-Burger" />
    </div>
  );
};

export default logo;
