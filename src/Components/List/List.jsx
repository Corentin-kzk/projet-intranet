import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
const List = ({ list }) => {
  console.log(list);
  return (
    <>
      {list &&
        list.map((collaborator) => {
          return <ProfileCard collaborator={collaborator} key={collaborator.id} />;
        })}
    </>
  );
};

export default List;
