import React from "react";
import "./Settings.css";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user);
  return (
    <main className="settings-wrapper">
      <div class="avatar-settings">
        <img class="avatar-image" src={user.photo} />
      </div>
      <h1 style={{ color: "#fff" }}>
        {user.firstname} {user.lastname}
      </h1>
      <section className="wrapper-details-forms">
        <form>
          <div class="container">
            <input placeholder={user.firstname} class="container__input" />
            <label class="container__label">First Name :</label>
          </div>
          <div class="container">
            <input placeholder={user.lastname} class="container__input" />
            <label class="container__label">Last Name :</label>
          </div>
          <div class="container">
            <input
              placeholder={user.email}
              class="container__input"
              type="email"
            />
            <label class="container__label">Email:</label>
          </div>
          <div class="container">
            <input
              placeholder={user.phone}
              class="container__input"
              type="tel"
            />
            <label class="container__label">Phone Number</label>
          </div>
          <div class="container">
            <input placeholder={user.city} class="container__input" />
            <label class="container__label">City :</label>
          </div>
          <div class="container">
            <input placeholder={user.country} class="container__input" />
            <label class="container__label">Country :</label>
          </div>
          <div class="container">
            <input class="container__input" />
            <label class="container__label">passWord :</label>
          </div>
          <div class="container">
            <input class="container__input" />
            <label class="container__label">Confrim passWord :</label>
          </div>
          <button>Sauvegarder</button>
        </form>
      </section>
    </main>
  );
};

export default SettingsPage;
