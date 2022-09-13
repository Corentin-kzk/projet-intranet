import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import Header from "./Components/Header/Header"

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <LoginPage setToken={setToken} />;
  }
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Header/>
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
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
