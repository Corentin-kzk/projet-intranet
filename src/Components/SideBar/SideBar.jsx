import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

import LogOut from "../LogOut/LogOut";

const SideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <NavLink
          to="/"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          <FontAwesomeIcon icon={faHouse} />
          Home
        </NavLink>
        <NavLink
          to="user/setting"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          <FontAwesomeIcon icon={faGear} />
          Détails
        </NavLink>
        <NavLink
          to="list"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          <FontAwesomeIcon icon={faList} />
          List
        </NavLink>
        <LogOut />
      </nav>
    </>
  );
};

export default SideBar;
