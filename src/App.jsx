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
import NewCollaboratorPage from "./Pages/NewCollaboratorPage/NewCollaboratorPage";

function App() {
  const { isConnected } = useSelector((state) => state.connexion);
  const user = useSelector((state) => {
    return state.user;
  });

  

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
            <Route
              path="/add/collaborator/"
              element={<NewCollaboratorPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
