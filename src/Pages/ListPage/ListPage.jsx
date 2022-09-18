import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useMemo, useRef } from "react";
import List from "../../Components/List/List";
import getData from "../../Service/getdata.service";
import "./ListPage.css";
import search from "../../Service/search.service";
import { useSelector } from "react-redux";

const ListPage = () => {
  const [data, setData] = useState(null);
  const [listData, setlistData] = useState([]);
  const [nbrOfCard, setNbrOfCard] = useState(7);
  const [selectorSearcehBy, setselctorSearchBy] = useState("name");
  const isDelete = useSelector((state) => state.delete);
  const selectorSearcehByWork = useRef();
  const searchTextField = useRef();
  selectorSearcehByWork.current = "null";
  searchTextField.current = "";

  useEffect(() => {
    const getUser = async () => {
      let collabData = await getData("collaborateurs");
      setData(collabData);
    };
    getUser();
  }, [isDelete]);

  useMemo(() => {
    if (data) {
      let draw = [];
      for (let i = 0; i <= nbrOfCard; i++) {
        draw.push(data[i]);
      }
      setlistData(draw);
    }
  }, [nbrOfCard, data]);

  const OnSearch = () => {
    let arrayFiltered = search(
      data,
      searchTextField,
      selectorSearcehBy,
      selectorSearcehByWork
    );
    setlistData(arrayFiltered);
  };

  return (
    <main className="list-main">
      <form className="form-wrapper">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            onChange={(e) => {
              searchTextField.current = e.target.value;
              OnSearch();
            }}
          />
          {<FontAwesomeIcon icon={faMagnifyingGlass} />}
        </div>
        <select
          onChange={(e) => {
            setselctorSearchBy(e.target.value);
          }}
        >
          <option value="name">Nom/Prénom</option>
          <option value="city">Localisation</option>
        </select>
        <select
          onChange={(e) => {
            selectorSearcehByWork.current = e.target.value;
            OnSearch();
          }}
        >
          <option value="null">Service</option>
          <option value="Client">Client</option>
          <option value="Marketing">Marketing</option>
          <option value="echnique">Technique</option>
        </select>
      </form>
      <section className="list-wrapper">
        {data && <List list={listData} />}
      </section>
      <button
        onClick={() => {
          setNbrOfCard(nbrOfCard + 7);
        }}
      >
        reload list + 8
      </button>
    </main>
  );
};

export default ListPage;
