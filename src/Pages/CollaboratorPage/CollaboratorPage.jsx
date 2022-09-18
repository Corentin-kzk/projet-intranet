import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import putData from "../../Service/putdata.service";
import getData from "../../Service/getdata.service";
import { Modal } from "rsuite";

const CollaboratorPage = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUserData] = useState(null);
  const [PasswConfirm, setPasswConfirm] = useState(null);
  const [Error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [succes, setSucces] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  const getUserDataById = async () => {
    const res = await getData(`collaborateurs/${id}`);
    setUserData(res);
  };
  useEffect(() => {
    getUserDataById();
  }, []);

  const putDataForm = async (data) => {
    let res = await putData(`collaborateurs/${id}`, data);
    console.log("🚀 ~ file: CollaboratorPage.jsx ~ line 29 ~ putDataForm ~ res", res)
    
    setSucces(res);
    setUserData(data);
  };
  const onSubmitForm = (data) => {
    const pssw = data.password;
    if (PasswConfirm != pssw) {
      setError(true);
      return;
    } else {
      console.log(
        "🚀 ~ file: CollaboratorPage.jsx ~ line 39 ~ onSubmitForm ~ data",
        data
      );
      setError(false);
      putDataForm(data);
      handleOpen();
    }
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
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title style={{color : "#fff"}} >{succes?.success}</Modal.Title>
        </Modal.Header>
      </Modal>
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
            {Error && (
              <span style={{ color: "red" }}>Not the same password </span>
            )}
            <label className="container__label">passWord :</label>
          </div>
          <div className="container">
            <input
              className="container__input"
              placeholder="Confrim passWord"
              onInput={(e) => {
                setPasswConfirm(e.target.value);
              }}
            />
            {Error && (
              <span style={{ color: "red" }}>Not the same password </span>
            )}
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

export default CollaboratorPage;
