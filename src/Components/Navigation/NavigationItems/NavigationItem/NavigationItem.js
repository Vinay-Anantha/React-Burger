import React from "react";
import cssObj from "./NavigationItem.module.css";
const navItem = (props) => {
  return (
    <li className={cssObj.NavigationItem}>
      <a href={props.link} className={props.active ? cssObj.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navItem;
