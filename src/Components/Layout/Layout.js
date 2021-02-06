import React from "react";
import cssObj from "./Layout.module.css";
const layout = (props) => (
  <React.Fragment>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={cssObj.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
