import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");

    if (login !== "true") {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
