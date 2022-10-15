import React from "react";
import { useParams } from "react-router-dom";
const UserPage = () => {
  const params = useParams();
  let { name } = params; //this is destructuring
  return (
    <div>
      <h1>Hi, This is {name}'s Page</h1>
    </div>
  );
};

export default UserPage;
