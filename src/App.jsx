import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
