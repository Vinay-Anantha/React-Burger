import React from "react";
import cssObj from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = (props) => (
  <header className={cssObj.Toolbar}>
    <div>MENU</div>
    <div className={cssObj.Logo}>
      <Logo />
    </div>
    <nav className={cssObj.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
