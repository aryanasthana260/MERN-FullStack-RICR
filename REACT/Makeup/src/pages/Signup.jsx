import React, { useState } from "react";

import { SiGnuprivacyguard } from "react-icons/si";

const Signup = () => {
  const [SignupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    DOB: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setSignupData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      DOB: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(SignupData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    handleClearForm();
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 flex items-center gap-1 justify-center">
            <SiGnuprivacyguard />
          Signup Up :)
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={SignupData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={SignupData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* Password */}
          <input
            type="text"
            name="password"
            value={SignupData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* Phone */}
          <input
            type="number"
            name="phone"
            value={SignupData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            value={SignupData.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="DOB"
            value={SignupData.DOB}
            onChange={handleChange}
            placeholder="Enter Date of Birth"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="reset"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Clear
            </button>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
