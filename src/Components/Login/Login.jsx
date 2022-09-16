import React, { useState } from "react";
import PropTypes from "prop-types";
import postData from "../../Service/postdata.service";
import "./Login.css";
import stockLocalSessions from "../../Service/stocklocalsessions.service";
import { useDispatch } from "react-redux";
import { ADD } from "../../reducer/userReducer";
import { logIn } from "../../reducer/ConnexionReducer";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("login", {
      email: username.trim(),
      password: password.trim(),
    });

    if (res.status === 404) {
      setError(true);
      setMessageError(res.data.error);
    }
    if (res.token) {
      dispatch(ADD(res));
      dispatch(logIn());
      stockLocalSessions("jwt", res.token);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <label className={error ? "error-input" : ""}>
          <p>Email</p>
          <input
            className={error ? "error-input" : ""}
            type="text"
            autoComplete="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className={error ? "error-input" : ""}>
          <p>Mot de passe</p>
          <input
            className={error ? "error-input" : ""}
            autoComplete="current-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" className={error ? "error-btn" : ""}>
            Connexion
          </button>
        </div>
      </form>
      {error && (
        <div className="error">
          <p>{messageError}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Login;
