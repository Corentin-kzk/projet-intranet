import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import putData from "../../Service/putdata.service";
import getData from "../../Service/getdata.service";

const CollaboratorPage = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUserData] = useState(null);

  const { id } = useParams();

  const getUserDataById = async () => {
    const res = await getData(`collaborateurs/${id}`);
    setUserData(res);
  };
  useEffect(() => {
    getUserDataById();
  }, []);

  const putDataForm = async (data) => {
    let res = await putData(`collaborateurs/${user.id}`, data);
    setUserData(data);
  };
  const onSubmitForm = (data) => {
    putDataForm(data);
  };
  if (!user) {
    return (
      <>
        <h1>Load</h1>
      </>
    );
  }

  return (
    <main className="settings-wrapper">
      <div class="avatar-settings">
        <img class="avatar-image" src={user.photo} />
      </div>
      <h1 style={{ color: "#fff" }}>
        {user.firstname} {user.lastname}
      </h1>
      <section className="wrapper-details-forms">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div class="container">
            <input
              placeholder="Firstname"
              defaultValue={user.firstname}
              class="container__input"
              {...register("firstname")}
            />
            <label class="container__label">First Name :</label>
          </div>
          <div class="container">
            <input
              placeholder="Lastname"
              defaultValue={user.lastname}
              class="container__input"
              {...register("lastname")}
            />
            <label class="container__label">Last Name :</label>
          </div>
          <div class="container">
            <input
              placeholder="Email"
              defaultValue={user.email}
              class="container__input"
              type="email"
              {...register("email")}
            />
            <label class="container__label">Email:</label>
          </div>
          <div class="container">
            <input
              placeholder="Phone number"
              defaultValue={user.phone}
              class="container__input"
              type="tel"
              {...register("phone")}
            />
            <label class="container__label">Phone Number</label>
          </div>
          <div class="container">
            <input
              placeholder="City"
              defaultValue={user.city}
              class="container__input"
              {...register("city")}
            />
            <label class="container__label">City :</label>
          </div>
          <div class="container">
            <input
              placeholder="Country"
              defaultValue={user.country}
              class="container__input"
              {...register("country")}
            />
            <label class="container__label">Country :</label>
          </div>
          <div class="container">
            <input
              class="container__input"
              placeholder="PassWord"
              {...register("password")}
            />
            <label class="container__label">passWord :</label>
          </div>
          <div class="container">
            <input class="container__input" placeholder="Confrim passWord" />
            <label class="container__label">Confrim passWord :</label>
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

export default CollaboratorPage;
