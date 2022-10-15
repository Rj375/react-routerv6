import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  let login = localStorage.getItem('login');
  const handleClick = () => {
      localStorage.clear();
      navigate('/login')
  }
  return (
    <div>
      <nav className="nav">
        {/* consider Link as <a></a> tag */}
        {/* NavLink kina use garya vane... yesma className dina milxa but Link maa milde na. */}
        {/* <NavLink to="/" style={({isActive}) => {return {color: isActive ? "red" : "green"}}}>Home</NavLink> |  */}
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/about">About</NavLink> |
        <NavLink to="/nested_contact">Contact Us</NavLink> |
        <NavLink to="/filter">Filter</NavLink> |
        {
        login !== 'true' ? <NavLink to="/login">Login</NavLink>
        :
        <button onClick={handleClick}>Sign Out</button>
        }
      </nav>
    </div>
  );
};

export default NavBar;
