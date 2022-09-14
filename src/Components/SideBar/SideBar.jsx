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
          Home <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink
          to="user/setting"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          Détails <FontAwesomeIcon icon={faGear} />
        </NavLink>
        <NavLink
          to="list"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          List <FontAwesomeIcon icon={faList} />
        </NavLink>
        <LogOut />
      </nav>
    </>
  );
};

export default SideBar;
