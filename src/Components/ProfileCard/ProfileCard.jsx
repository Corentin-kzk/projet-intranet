import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCakeCandles,
  faTrash,
  faPenToSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "rsuite";
import { RemindFill } from "@rsuite/icons";
import { useForm } from "react-hook-form";
import "./ProfileCard.css";
import "rsuite/dist/rsuite.min.css";
import deleteData from "../../Service/deleteData.service";
import { isDelete } from "../../reducer/DeletedUser";

const ProfileCard = ({ collaborator }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let localUser = sessionStorage.getItem("user");
  localUser = JSON.parse(localUser);
  if (!localUser) {
    return <>Loader</>;
  }
  const dispatch = useDispatch();

  const OnRedirect = () => {
    navigate(`/collaborator/${collaborator?.id}`);
  };

  const confirmDeleteUser = (data) => {
    const re = new RegExp(data.firstname, "gi");
    if (!collaborator.firstname.match(re)) {
      setError(true);
      return;
    }

    setError(false);
    const err = deleteData(`collaborateurs/${collaborator.id}`);
    dispatch(isDelete());
    handleClose();
  };

  return (
    <article className="card" key={Number(collaborator.id)}>
      <section className="card-cover">
        <img
          src={collaborator.photo}
          alt={`photo de ${collaborator.firstname} ${collaborator.lastname}`}
        />
      </section>
      <section className="card-content">
        <h2>
          {collaborator.firstname} {collaborator.lastname}
        </h2>
        <span className="tag txt-center"> {collaborator.service}</span>
        <div className="border"></div>
        <p className="txt-center localisation">
          {collaborator.city}, {collaborator.country}
        </p>
        <ul>
          <li>
            {<FontAwesomeIcon icon={faPhone} />} <p> {collaborator.phone}</p>
          </li>
          <li>
            {<FontAwesomeIcon icon={faEnvelope} />}
            <p>{collaborator.email}</p>
          </li>
          <li>
            {<FontAwesomeIcon icon={faCakeCandles} />}
            <p> {collaborator.birthdate}</p>
          </li>
        </ul>
        {localUser.isAdmin && (
          <div className="button-container">
            <button
              className="noselect red"
              onClick={() => {
                handleOpen();
              }}
            >
              {<FontAwesomeIcon icon={faTrash} />}
            </button>
            <Modal
              backdrop="static"
              role="alertdialog"
              open={open}
              onClose={handleClose}
              size="sm"
            >
              <Modal.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  className="fixed-top"
                  onClick={handleClose}
                  appearance="subtle"
                >
                  <FontAwesomeIcon icon={faX} />
                </Button>
                <RemindFill
                  style={{
                    color: "#fff",
                    fontSize: 60,
                    marginBottom: 15,
                  }}
                />
                <p style={{ color: "#fff" }}>
                  Once canceled, you will not be able to recover this
                  transaction. Are you sure you want to cancel this transaction?
                </p>

                <form
                  style={{ width: "90%" }}
                  onSubmit={handleSubmit(confirmDeleteUser)}
                >
                  <input
                    style={{
                      borderBottom: "solid 2px #fff",
                      backgroundColor: "black",
                      color: "#fff",
                      placeholder: "#111",
                    }}
                    type="text"
                    name="ConfirmDele"
                    id="ConfirmDele"
                    {...register("firstname")}
                    placeholder={collaborator.firstname}
                  />
                  {error && (
                    <p className="red">
                      {" "}
                      ERROR: It's not the right NAME it's mandatory to remove an
                      User Please retry{" "}
                    </p>
                  )}
                  <input
                    style={{
                      backgroundColor: "#111",
                      color: "#fff",
                      border: "solid 1px #fff",
                      width: "40%",
                      margin: "20px auto",
                    }}
                    type="submit"
                    value="Confirmer la supression"
                  />
                </form>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
            <button
              className="noselect"
              onClick={() => {
                OnRedirect();
              }}
            >
              {<FontAwesomeIcon icon={faPenToSquare} />}
            </button>
          </div>
        )}
      </section>
    </article>
  );
};

export default ProfileCard;
