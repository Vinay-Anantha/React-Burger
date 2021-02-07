import React from "react";
import cssObj from "./Toolbar.module.css";
const toolbar = (props) => (
  <header className={cssObj.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav></nav>
  </header>
);

export default toolbar;
