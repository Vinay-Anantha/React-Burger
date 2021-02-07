import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssObj from "./SideDrawer.module.css";

const SideDrawer = () => {
  return (
    <div className={cssObj.SideDrawer}>
      <div className={cssObj.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
