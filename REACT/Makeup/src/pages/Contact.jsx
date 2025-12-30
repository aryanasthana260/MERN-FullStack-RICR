import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
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
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={contactData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {/* Phone */}
          <input
            type="number"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            value={contactData.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={contactData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            value={contactData.message}
            onChange={handleChange}
            placeholder="Message"
            className="border border-gray-300 rounded px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <div className="border border-gray-300 rounded p-2 resize-none focus:ring-2 focus:ring-pink-400 outline-none ">
            <label htmlFor="religion" className="text-[19px] font-semibold">
              Religion-
            </label>
            <select
              className="align-items-end px-15 py-3  outline-1 font-light "
              name="religion"
              id="religion"
              onChange={handleChange}
              value={contactData.religion}
            >
              <option value="" className="">
                ---Select Religion---
              </option>
              <option value="islam">Islam</option>
              <option value="hinduism">Hinduism</option>
              <option value="christianity">Christianity</option>
              <option value="buddhism">Buddhism</option>
              <option value="jainism">Jainism</option>
              <option value="sikhism">Sikhism</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="border border-gray-300 rounded p-3 resize-none focus:ring-2 focus:ring-pink-400 outline-none text-[18px] font-light">
            <label htmlFor="gender" className="text-[19px] font-semibold ">
              Gender-->
            </label>
            <input
              className="outline-none ] "
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={contactData.gender === "male"}
            />{" "}
            ...Male...
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={contactData.gender === "female"}
            />{" "}
            ...Female...
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              checked={contactData.gender === "other"}
            />{" "}
            ...Other...
          </div>

          <div className="border border-gray-300 rounded p-3 resize-none focus:ring-2 focus:ring-pink-400 outline-none">
            <label htmlFor="skill " className="text-[19px] font-semibold">
              Skill known:-
            </label>
            <div className="font-light">
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              ...HTML...
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              ...CSS...
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find((word) => word === "js")
                    ? true
                    : false
                }
              />{" "}
              ...JS...
              <input
                className="p-2 py-2"
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("react")}
              />{" "}
            ...REACT...
            </div>
          </div>

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

export default Contact;
