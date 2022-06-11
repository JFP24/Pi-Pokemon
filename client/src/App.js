import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Components/Landing/Landing.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { CardDetails } from "./Components/CardDetails/CardDetails.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Details/:id" element={<CardDetails />} />
    </Routes>
  );
}
export default App;
