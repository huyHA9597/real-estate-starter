import React from "react";

// import routes and route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<Home />} />
        <Route path="/type/:type" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
