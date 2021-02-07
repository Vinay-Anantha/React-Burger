import React from "react";
import cssObj from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
const toolbar = (props) => (
  <header className={cssObj.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav></nav>
  </header>
);

export default toolbar;
