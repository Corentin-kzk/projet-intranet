import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return (
      <div className="wrapper">
        <Login setToken={setToken} />
      </div>
    );
  }
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/preferences">
              <Preferences />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
