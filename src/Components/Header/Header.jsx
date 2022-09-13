import React from "react";
import { useSelector } from "react-redux";

import "./Header.css";

const NavBar = () => {
  const data = useSelector((state) => state.user.value);
  const user = data.user
  console.log(user);
  return (
    <header>
      <p className="userName">Bonjour {user.firstname}</p>
      <img src={user.photo} className='avatar' alt="user image" />
    </header>
  );
};

export default NavBar;
