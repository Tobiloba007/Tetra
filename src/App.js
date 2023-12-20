import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-Certificate" element={<VerifyCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;
