import React from "react";

// import link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  var isUserLogin = false;

  const handleLogOutClick = () => {
    isUserLogin = false;
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* buttons */}
        {!isUserLogin ? (
          <div className="flex items-center gap-6">
            <Link className="hover:text-violet-900 transition" to="/login">
              Log in
            </Link>
            <Link
              className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <button
              className="hover:text-violet-900 transition"
              onClick={() => handleLogOutClick()}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
