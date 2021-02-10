import React from "react";
import { NavLink } from "react-router-dom";
import cssObj from "./NavigationItem.module.css";
const navItem = (props) => {
  return (
    <li className={cssObj.NavigationItem}>
      <NavLink to={props.link} exact activeClassName={cssObj.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;
