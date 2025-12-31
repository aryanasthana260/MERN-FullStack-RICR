import React from "react";

const Form = () => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen pt-[76px] font-sans border border-blue-100">
        {/* NAVBAR */}
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
                  <a href="#" className="hover:bg-blue-100 rounded-4xl">Home</a>
                </li>
                <li>
                  <a href="#"  className="hover:bg-blue-100 rounded-4xl">About</a>
                </li>
                <li>
                  <a href="#"  className="hover:bg-blue-100 rounded-4xl">Courses</a>
                </li>
                <li>
                  <a href="#"  className="hover:bg-blue-100 rounded-4xl">IDE</a>
                </li>
                <li>
                  <a href="#"className="hover:bg-blue-100 rounded-4xl" >Contact Us</a>
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

        {/* FORM SECTION */}
        <main>
          <div className="max-w-[980px] mx-auto mt-10 p-12 rounded-[24px] shadow bg-[#e4f0fc] ">
            <h1 className="text-center text-4xl font-bold">Enquiry Form</h1>
            <p className="text-center mt-4 mb-8 text-gray-900 font-[30px]">
              Have questions or need assistance? Fill out the form below to
              connect with our team and explore your opportunities.
            </p>

            <form className="space-y-5">
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">Person Name*</label>
                  <input
                    type="text"
                    placeholder="Person Name"
                   className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[19px]">Contact Number*</label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    maxLength={10}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter 10-digit mobile number (digits only).
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">Email*</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[19px]">Qualification*</label>
                  <input
                    type="text"
                    placeholder="Qualification"
                   className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>
              </div>

              {/* COLLEGE */}
              <div>
                <label className="font-semibold text-[19px]">College / School Name*</label>
                <input
                  type="text"
                  placeholder="College / School Name"
                  className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                />
              </div>

              {/* ROW 3 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">Year*</label>
                  <select className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]">
                    <option value="" selected disabled>Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>Passout</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[19px]">Branch*</label>
                  <input
                    type="text"
                    placeholder="Branch"
                   className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>
              </div>

              {/* COURSES */}
              <div>
                <label className="font-semibold block mb-4 mt-8 text-[19px]">
                  Interested in Which Course*
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Full Stack Web Development - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Data Science with Python - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Data Analytics with Python - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Business Analyst</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Java Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Python Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>C / C++ Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input type="checkbox" />
                  <span>Other</span>
                </label>
              </div>

              {/* ROW 4 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">
                    Source of Information*
                  </label>
                  <select className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937] ">
                    <option value="" selected disabled  > Source of Information*</option>

                    <option>Social Media</option>
                    <option>Friend</option>
                    <option>College Workshop</option>
                    <option>Received call from institute</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[19px]">Name of Executive*</label>
                  <select className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]">
                    <option>Name of Executive (if any)</option>
                  </select>
                </div>
              </div>

              {/* SUBMIT */}
              <div className="text-center mt-6">
                <button
                  type="button"
                  className="bg-[#0d1b2a] text-white px-10 py-3 rounded-full text-lg hover:bg-gray-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* FOOTER */}
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
                <i className="fa-solid fa-location-dot mr-2"></i>Minal Mall,
                Bhopal
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
      </div>
      );
    </>
  );
};

export default Form;
