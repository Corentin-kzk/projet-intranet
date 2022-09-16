import React, { useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import getData from "../../Service/getdata.service";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [moreRandom, setMoreRandom] = useState(null);

  useEffect(() => {
    const getRandomUser = async () => {
      let collabData = await getData("collaborateurs/random");
      setData(collabData);
    };
    getRandomUser();
  }, [moreRandom]);

  return (
    <main className="main-random-user">
      <ProfileCard collaborator={data} />
      <div className="button-container">
        <button
          onClick={() => {
            setMoreRandom(moreRandom + 1);
          }}
        >
          Rencontrer un nouveau profile
        </button>
      </div>
    </main>
  );
};

export default HomePage;
