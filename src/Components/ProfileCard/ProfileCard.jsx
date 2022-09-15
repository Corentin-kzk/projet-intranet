import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCakeCandles,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ collaborator }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const OnRedirect = () => {
    navigate(`/collaborator/${collaborator?.id}`);
  };
  return (
    <article className="card" key={Number(collaborator.id)}>
      <section className="card-cover">
        <span className="tag"> {collaborator.service}</span>
        <img
          src={collaborator.photo}
          alt={`photo de ${collaborator.firstname} ${collaborator.lastname}`}
        />
      </section>
      <section className="card-content">
        <h2>
          {collaborator.firstname} {collaborator.lastname}
        </h2>
        <p>
          {collaborator.city}, {collaborator.country}
        </p>
        <ul>
          <li>
            {<FontAwesomeIcon icon={faPhone} />} {collaborator.phone}{" "}
          </li>
          <li>
            {<FontAwesomeIcon icon={faEnvelope} />} {collaborator.email}
          </li>
          <li>
            {<FontAwesomeIcon icon={faCakeCandles} />} {collaborator.birthdate}
          </li>
        </ul>
        {user.isAdmin && (
          <div className="button-container">
            <button className="noselect red">
              {<FontAwesomeIcon icon={faTrash} />}
            </button>
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
