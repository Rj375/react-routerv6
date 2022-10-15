import React from "react";
import { Link, Outlet,NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Hi, Iam Contact Us Page</h1>
      <span>Nested Routes, yesma / hunna Link ko to maa and route component maa</span>
      <nav className="nav">
        <NavLink to="channel">Channel</NavLink> |
        <NavLink to="company">Company</NavLink> |
        <NavLink to="other">Others</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Contact;
