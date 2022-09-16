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
import { useEffect } from "react";
import "./Header.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const state = useSelector((state) => {
    return state.user;
  });

  console.log("🚀 ~ file: Header.jsx ~ line 28 ~ state BEFORE", state);

  useEffect(() => {
    setUser(state);
    console.log("🚀 ~ file: Header.jsx ~ line 28 ~ useEffect ~ state", state);
  }, []);

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
      <p className="userName">Bonjour {user?.firstname}</p>
      <NavLink
        to="add/colaborator/"
        className="navlinkbuttons"
        style={(isActive) => ({
          color: isActive ? "white" : "grey",
        })}
      >
        Ajouter un collaborateur
      </NavLink>
      <img src={user?.photo} className="avatar" alt="user image" />
    </header>
  );
};

export default NavBar;
