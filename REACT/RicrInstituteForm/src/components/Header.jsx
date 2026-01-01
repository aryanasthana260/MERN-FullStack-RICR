import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[76px]">
          <img
            src="https://ricr.in/assets/home/assets/images/logo/logo-2.png"
            alt="RICR logo"
            className="h-11 object-contain"
          />

          <ul className="hidden lg:flex gap-6 text-gray-900 font-medium">
            <li>
              <a href="#" className="hover:bg-blue-100 rounded-4xl">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-100 rounded-4xl">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-100 rounded-4xl">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-100 rounded-4xl">
                IDE
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-100 rounded-4xl">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <span className="text-sm text-gray-600 font-semibold">
              <i className="fa-solid fa-phone mr-2"></i>+91 87659 49245
            </span>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Student Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
