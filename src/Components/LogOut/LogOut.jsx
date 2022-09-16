import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../reducer/ConnexionReducer";
import { userLogOut } from "../..//reducer/userReducer";
import "./LogOut.css";

const LogOut = () => {
  const dispatch = useDispatch();
  const OnDisconnect = () => {
    dispatch(userLogOut());
    dispatch(logOut());
  };
  return (
    <>
      <button
        onClick={() => {
          OnDisconnect();
        }}
        className="logout-btn"
        data-text="Déconnexion"
      >
        {<FontAwesomeIcon icon={faArrowRightFromBracket} />}
      </button>
    </>
  );
};

export default LogOut;
