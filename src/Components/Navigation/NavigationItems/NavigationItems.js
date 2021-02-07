import React from "react";
import cssObj from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navItems = (props) => {
  return (
    <ul className={cssObj.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navItems;
