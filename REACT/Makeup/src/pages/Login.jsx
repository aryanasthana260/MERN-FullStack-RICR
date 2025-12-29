import React, { useState } from "react";

const Login = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(LoginData);
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
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          {/* Email */}
          <input
            type="text"
            name="email"
            value={LoginData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* PASSWORD */}
          <input
            type="text"
            name="password"
            value={LoginData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
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
          <div className="text-blue-800 text-center">
            <a href="/Signup">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
