import React from "react";
import Home from "./pages/Home/Home.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Home/>
    <ToastContainer />
    </>
  );
}

export default App;
