import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/NavBar";

const Portal = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Portal;
