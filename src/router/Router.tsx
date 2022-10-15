import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import UserPage from "../components/UserPage";
import SearchParams from "../components/SearchParams";
import Contact from "../components/contactPage/NestedContact";
import Channel from "../components/contactPage/Channel";
import Company from "../components/contactPage/Company";
import Other from "../components/contactPage/Other";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";
const Router = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Navigate to="/"/>}/> it will redirect back to home page if error page is not found. */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute Component={Home}/>} />
        <Route path="/about" element={<ProtectedRoute Component={About}/>} />
        <Route path="/user/:name" element={<UserPage />} />
        <Route path="/user/:name" element={<UserPage />} />
        <Route path="/filter" element={<ProtectedRoute Component={SearchParams}/>} />
        <Route path="/nested_contact/" element={<Contact />}>
          <Route path="channel" element={<Channel />} />
          <Route path="company" element={<Company />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Router;
