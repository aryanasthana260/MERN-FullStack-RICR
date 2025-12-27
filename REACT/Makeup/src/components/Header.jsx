import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-primary d-flex justify-content-between align-items-center  text-light">
        <h3 className="bg-red-600 border border-amber-400 text-center text-[25px]">
          My Website
        </h3>
        <div className="flex gap-3 justify-center bg-blue-600 p-5  text-[18px] text-white">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-decoration-none text-light "
          >
            <FaHome className="text-red-400" /> <span>Home</span>
          </Link>
          <Link to={"/about"} className="text-decoration-none text-light">
            About
          </Link>
          <Link to={"/product"} className="text-decoration-none text-light">
            Product
          </Link>
          <Link to={"/contact"} className="text-decoration-none text-light">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
