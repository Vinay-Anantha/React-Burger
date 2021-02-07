import React from "react";
import cssObj from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = (props) => (
  <header className={cssObj.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={cssObj.Logo}>
      <Logo />
    </div>
    <nav className={cssObj.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
