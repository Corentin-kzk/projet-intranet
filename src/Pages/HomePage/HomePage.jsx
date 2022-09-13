import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import List from "../../Components/List/List";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { ADD } from "../../reducer/collabReducer";
import getData from "../../Service/getdata.service";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [moreRandom, setMoreRandom] = useState(null);

  useEffect(() => {
    const getRandomUser = async () => {
      let collabData = await getData("collaborateurs/random");
      console.log(
        "🚀 ~ file: HomePage.jsx ~ line 15 ~ getRandomUser ~ collabData",
        collabData
      );
      setData(collabData);
    };
    getRandomUser();
  }, [moreRandom]);

  return (
    <div className="main-random-user">
      <h1>Home</h1>
      <ProfileCard collaborator={data} />
      <div className="button-container" >
        <button onClick={() => {setMoreRandom(moreRandom + 1)}}>Rencontrer un nouveau profile</button>
      </div>
    </div>
  );
};

export default HomePage;
