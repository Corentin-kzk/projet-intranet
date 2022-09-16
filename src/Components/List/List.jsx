import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
const List = ({ list }) => {
  return (
    <>
      {list &&
        list.map((collaborator) => {
          return (
            <ProfileCard collaborator={collaborator} key={collaborator?.id} />
          );
        })}
    </>
  );
};

export default List;
