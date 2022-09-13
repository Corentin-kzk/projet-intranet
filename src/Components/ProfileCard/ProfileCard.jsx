import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileCard.css";

const ProfileCard = ({ collaborator }) => {
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
        <div>
          <button class="noselect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>
          </button>
          <button class="noselect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
