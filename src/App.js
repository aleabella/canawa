import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/"   element={<Home/>} />
        <Route exact path="/rooms/" element={<Rooms/>} />
        <Route exact path="/rooms/single" element={<SingleRoom/>} />
        <Route element={Error}/>
      
      </Routes>
    </>
  );
}

export default App;
