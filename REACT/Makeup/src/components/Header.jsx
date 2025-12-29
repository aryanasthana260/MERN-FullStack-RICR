import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaBookReader } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { SiGnuprivacyguard } from "react-icons/si";

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
            className="flex items-center gap-1 hover:text-black transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-black transition flex items-center gap-1"
          >
            <FaBookReader />
            About
          </Link>

          <Link
            to="/product"
            className="hover:text-black transition flex items-center gap-1"
          >
            <TiShoppingCart />
            Products
          </Link>

          <Link
            to="/contact"
            className="hover:text-black transition flex items-center gap-1"
          >
            <IoIosContact />
            Contact
          </Link>
          <Link
            to="/Login"
            className="hover:text-black transition flex items-center gap-1"
          >
            <SlLogin />
            Login
          </Link>
          <Link
            to="/Signup"
            className="hover:text-black transition flex items-center gap-1"
          >
            <SiGnuprivacyguard />
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
