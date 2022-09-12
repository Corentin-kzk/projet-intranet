import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import postData from "../../Service/postdata.service";
import "./Login.css";
import stockLocalSessions from "../../Service/stocklocalsessions.service";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postData("login", {
      email: username.trim(),
      password: password.trim(),
    });
    if (data.status === 404) {
      setError(true);
    }
    if (data.token) {
      setToken(data.token);
      stockLocalSessions("jwt", data.token);
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
          <p>Login ou mot de passe incorect </p>{" "}
        </div>
      )}
    </div>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
