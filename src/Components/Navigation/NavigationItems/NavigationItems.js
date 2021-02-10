import React from "react";
import cssObj from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navItems = (props) => {
  return (
    <ul className={cssObj.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default navItems;
