import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    
    if (!login) {
      navigate("/");
    }
  }, []);

  return Component ? <Component /> : <Outlet />;
};

export default Protected;
