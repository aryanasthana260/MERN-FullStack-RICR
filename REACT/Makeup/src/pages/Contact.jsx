import React from "react";

const Contact = () => {
  const [FullName, setFullName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Message, setMessage] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);

  const handleClear = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );

      const data = {
        FullName,
        Email,
        Message,
      };
      console.log(data);
    } catch (error) {
      console.log(error, Message);
    } finally {
      setIsLoading(false);
    }

    handleClear();
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Contact Us
        </h1>

        <form
          className="flex flex-col gap-4"
          onReset={handleClear}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="fullname"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

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
              {isloading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
