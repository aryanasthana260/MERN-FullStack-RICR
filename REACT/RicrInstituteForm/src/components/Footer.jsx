import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#125785] text-white mt-16 py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">
        <div>
          <img
            src="https://ricr.in/assets/home/assets/images/logo/logo.png"
            alt="logo"
            className="max-w-[180px]"
          />
          <p className="mt-3 text-sm">
            RICR is a subsidiary of Raj Digital Private Limited — a coding &
            robotics institute empowering students with education.
          </p>
        </div>

        <div>
          <h6 className="font-bold mb-2">Quick Links</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Host a Workshop</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Ambassador</a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold mb-2">Other Links</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Edunest Facility</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p>
            <i className="fa-solid fa-location-dot mr-2"></i>Minal Mall, Bhopal
          </p>
          <p>
            <i className="fa-solid fa-envelope mr-2"></i>contact@ricr.in
          </p>
          <p>
            <i className="fa-solid fa-phone mr-2"></i>+91 87659 49245
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6 border-t border-white/30 pt-4 flex justify-between text-xs text-white/70">
        <span>© 2024 - Raj Digital Private Limited</span>
        <a href="#">Sitemap</a>
      </div>
    </footer>
  );
};

export default Footer;
