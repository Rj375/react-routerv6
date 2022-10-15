import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = (navigateMe: string) => {
    navigate(navigateMe);
  };
  return (
    <div>
      <h1>Iam TypeScript Project with vite, Learning Router v6</h1>

      <button onClick={() => handleClick("/about")}>Go to About Page</button>
      <button onClick={() => handleClick("/filter")}>Go to Filter Page</button>
    </div>
  );
};

export default Home;
