import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold tracking-wide">
          Makeup<span className="text-black">API</span>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-black transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-black transition"
          >
            About
          </Link>

          <Link
            to="/product"
            className="hover:text-black transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="hover:text-black transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
