import React from "react";
import "./Settings.css";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import putData from "../../Service/putdata.service";

const SettingsPage = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  const { register, handleSubmit } = useForm();

  const putDataForm = async (data) => {
    let res = await putData(`collaborateurs/${user.id}`, data);
    console.log(res);
  };
  const onSubmitForm = (data) => {
    console.log("🚀 ~ file: SettingsPage.jsx ~ line 11 ~ user ~ user", user);
    console.log(
      "🚀 ~ file: SettingsPage.jsx ~ line 21 ~ onSubmit ~ data",
      data
    );
    putDataForm(data);
  };

  return (
    <main className="settings-wrapper">
      <div className="avatar-settings">
        <img className="avatar-image" src={user.photo} />
      </div>
      <h1 style={{ color: "#fff" }}>
        {user.firstname} {user.lastname}
      </h1>
      <section className="wrapper-details-forms">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="container">
            <input
              placeholder="Firstname"
              defaultValue={user.firstname}
              className="container__input"
              {...register("firstname")}
            />
            <label className="container__label">First Name :</label>
          </div>
          <div className="container">
            <input
              placeholder="Lastname"
              defaultValue={user.lastname}
              className="container__input"
              {...register("lastname")}
            />
            <label className="container__label">Last Name :</label>
          </div>
          <div className="container">
            <input
              placeholder="Email"
              defaultValue={user.email}
              className="container__input"
              type="email"
              {...register("email")}
            />
            <label className="container__label">Email:</label>
          </div>
          <div className="container">
            <input
              placeholder="Phone number"
              defaultValue={user.phone}
              className="container__input"
              type="tel"
              {...register("phone")}
            />
            <label className="container__label">Phone Number</label>
          </div>
          <div className="container">
            <input
              placeholder="City"
              defaultValue={user.city}
              className="container__input"
              {...register("city")}
            />
            <label className="container__label">City :</label>
          </div>
          <div className="container">
            <input
              placeholder="Country"
              defaultValue={user.country}
              className="container__input"
              {...register("country")}
            />
            <label className="container__label">Country :</label>
          </div>
          <div className="container">
            <input
              className="container__input"
              placeholder="PassWord"
              {...register("password")}
            />
            <label className="container__label">passWord :</label>
          </div>
          <div className="container">
            <input className="container__input" placeholder="Confrim passWord" />
            <label className="container__label">Confrim passWord :</label>
          </div>
          <select
            name="service"
            id="service"
            placeholder="service"
            defaultValue={user.service}
            {...register("service")}
          >
            <option value="Client">Client</option>
            <option value="Marketing">Marketing</option>
            <option value="Technique">Technique</option>
          </select>
          <select
            name="gender"
            id="gender"
            placeholder="Gender"
            defaultValue={user.gender}
            {...register("gender")}
          >
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          <input
            placeholder="Photo"
            defaultValue={user.photo}
            name="photo"
            id="photo"
            {...register("photo")}
          />
          <input
            type="date"
            placeholder="Birthdate"
            defaultValue={user.birthdate}
            name="Birthdate"
            id="Birthdate"
            {...register("birthdate")}
          />

          <input type="submit" value="Sauvegarder" />
        </form>
      </section>
    </main>
  );
};

export default SettingsPage;
