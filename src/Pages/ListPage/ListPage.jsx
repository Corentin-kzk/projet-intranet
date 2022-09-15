import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import List from "../../Components/List/List";
import getData from "../../Service/getdata.service";
import "./ListPage.css";

const ListPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      let collabData = await getData("collaborateurs");
      setData(collabData);
    };
    getUser();
  }, []);
  console.log(data);
  return (
    <main className="list-main" >
      <from className="form-wrapper">
        <div class="search-container">
          <input type="text" class="search-input" />
          {<FontAwesomeIcon icon={faMagnifyingGlass} />}
        </div>
        <select>
          <option value="value" selected>
            {" "}
            Rechercher par :{" "}
          </option>
          <option value="name">Nom/Prénom</option>
          <option value="city">Localisation</option>
        </select>
        <select>
          <option value="value" selected>
            Category
          </option>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option selected value="coconut">
            Noix de coco
          </option>
          <option value="mango">Mangue</option>
        </select>
      </from>
      <section className="list-wrapper">{data && <List list={data} />}</section>
    </main>
  );
};

export default ListPage;
