import {
  faBars,
  faXmark,
  faHouse,
  faGear,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import "./Header.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let localUser = sessionStorage.getItem("user");
  localUser = JSON.parse(localUser);
  if (!localUser) {
    return <>Loader</>;
  }

  return (
    <header>
      <nav id="myNav" className={isOpen ? "overlay open " : "overlay false "}>
        <span
          className="closebtn"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <div className="overlay-content">
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
        </div>
        <LogOut />
      </nav>

      <span className="open-btn" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <p className="userName">Bonjour {localUser?.firstname}</p>
      {localUser?.isAdmin && (
        <NavLink
          to="add/collaborator/"
          className="navlinkbuttons"
          style={(isActive) => ({
            color: isActive ? "white" : "grey",
          })}
        >
          Ajouter un collaborateur
        </NavLink>
      )}
      <img src={localUser?.photo} className="avatar" alt="user image" />
    </header>
  );
};

export default NavBar;
