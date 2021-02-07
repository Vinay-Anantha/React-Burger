import React from "react";
import cssObj from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={cssObj.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
