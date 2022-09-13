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

const ProfileCard = ({ collaborator }) => {
  const user = useSelector((state) => state.user);

  return (
    <article className="card" key={Number(collaborator.id)}>
      <span className="tag"> {collaborator.service}</span>

      <img
        src={collaborator.photo}
        alt={`photo de ${collaborator.firstname} ${collaborator.lastname}`}
      />

      <div className="card-body">
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
            <button class="noselect red">
              {<FontAwesomeIcon icon={faTrash} />}
            </button>
            <button class="noselect">
              {<FontAwesomeIcon icon={faPenToSquare} />}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProfileCard;
