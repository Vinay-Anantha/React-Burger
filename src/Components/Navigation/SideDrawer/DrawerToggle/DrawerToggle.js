import React from "react";
import cssObj from "./DrawerToggle.module.css";
const drawerToggle = (props) => {
  return (
    <div onClick={props.clicked} className={cssObj.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
