import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
const List = ({ list }) => {
  console.log("🚀 ~ file: List.jsx ~ line 4 ~ List ~ list", list);

  return (
    <>
      {list &&
        list.map((collaborator) => {
          return <ProfileCard collaborator={collaborator} />;
        })}
    </>
  );
};

export default List;
