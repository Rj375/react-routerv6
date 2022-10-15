import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>Hi, Iam About Page</h1>
      <Link to="/user/Ramesh">Go to Ramesh's Page</Link> <br />
      <Link to="/user/Sonis">Go to Sonis's Page</Link>
    </div>
  );
};

export default About;
