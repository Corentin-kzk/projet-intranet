import React from "react";
import Login from "../../Components/Login/Login";
import './LoginPage.css';

const LoginPage = ({setToken}) => {
  return (
    <div className="login-page">
      <Login setToken={setToken} />
    </div>
  );
};

export default LoginPage;
