import { faBars, faXmark, faHouse, faGear, faList} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import "./Header.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector((state) => state.user.value);
  const user = data.user;

  return (
    <header>
      <nav id="myNav" class={isOpen ? "overlay open " : "overlay false "}>
        <span
          class="closebtn"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <div class="overlay-content">
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
            to="detail"
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
        <LogOut/>
      </nav>

      <span className="open-btn" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <p className="userName">Bonjour {user.firstname}</p>
      <img src={user.photo} className="avatar" alt="user image" />
    </header>
  );
};

export default NavBar;
