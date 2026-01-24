import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditProfileModal = ({ onclose }) => {
  const { user, setUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.put("/user/update", formData);

      setUser(res.data.data);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));

      console.log("Profile updated:", res.data.data);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
      onclose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-9999 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Edit Profile
            </h2>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
          <button
            onClick={onclose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Body */}
          <div className="p-6 space-y-5">
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="cursor-not-allowed w-full mt-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="button"
                onClick={onclose}
                className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-3 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
