import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import ListPage from "./Pages/ListPage/ListPage";
import CollaboratorPage from "./Pages/CollaboratorPage/CollaboratorPage";

function App() {
  const { isConnected } = useSelector((state) => state.connexion);

  if (!isConnected) {
    return <LoginPage />;
  }
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="list" element={<ListPage />} />
            <Route path="user/setting" element={<SettingsPage />} />
            <Route path="collaborator/:id" element={<CollaboratorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
