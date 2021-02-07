import React from "react";
import cssObj from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={cssObj.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
