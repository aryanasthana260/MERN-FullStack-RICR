import React from "react";


const Form = () => {
  const [personName, setPersonName] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [collegeName, setCollegeName] = React.useState("");
  const [year, setYear] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  const [sourceInfo, setSourceInfo] = React.useState("");
  const [executiveName, setExecutiveName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCourseChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter((course) => course !== value));
    }
  };

  const handleClear = () => {
    setPersonName("");
    setContactNumber("");
    setEmail("");
    setQualification("");
    setCollegeName("");
    setYear("");
    setBranch("");
    setCourses([]);
    setSourceInfo("");
    setExecutiveName("");
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const data = {
        personName,
        contactNumber,
        email,
        qualification,
        collegeName,
        year,
        branch,
        courses,
        sourceInfo,
        executiveName,
      };

      console.log("Form Data:", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    handleClear();
  };

  return (
    <>
      <div className="bg-slate-100 min-h-screen pt-[76px] font-sans border border-blue-100">
        

        <main>
          <div className="max-w-[980px] mx-auto mt-10 p-12 rounded-[24px] shadow bg-[#e4f0fc]">
            <h1 className="text-center text-4xl font-bold">Enquiry Form</h1>
            <p className="text-center mt-4 mb-8 text-gray-900 font-[30px]">
              Have questions or need assistance? Fill out the form below to
              connect with our team and explore your opportunities.
            </p>

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">
                    Person Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Person Name"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[19px]">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    maxLength={10}
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter 10-digit mobile number (digits only).
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">Email*</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[19px]">
                    Qualification*
                  </label>
                  <input
                    type="text"
                    placeholder="Qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-[19px]">
                  College / School Name*
                </label>
                <input
                  type="text"
                  placeholder="College / School Name"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">Year*</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  >
                    <option value="">Year</option>
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
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-4 mt-8 text-[19px]">
                  Interested in Which Course*
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Full Stack Web Development - Placement Oriented"
                    onChange={handleCourseChange}
                    checked={courses.includes(
                      "Full Stack Web Development - Placement Oriented"
                    )}
                  />
                  <span>Full Stack Web Development - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Data Science with Python - Placement Oriented"
                    onChange={handleCourseChange}
                    checked={courses.includes(
                      "Data Science with Python - Placement Oriented"
                    )}
                  />
                  <span>Data Science with Python - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Data Analytics with Python - Placement Oriented"
                    onChange={handleCourseChange}
                    checked={courses.includes(
                      "Data Analytics with Python - Placement Oriented"
                    )}
                  />
                  <span>Data Analytics with Python - Placement Oriented</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Business Analyst"
                    onChange={handleCourseChange}
                    checked={courses.includes("Business Analyst")}
                  />
                  <span>Business Analyst</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Java Programming"
                    onChange={handleCourseChange}
                    checked={courses.includes("Java Programming")}
                  />
                  <span>Java Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Python Programming"
                    onChange={handleCourseChange}
                    checked={courses.includes("Python Programming")}
                  />
                  <span>Python Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="C / C++ Programming"
                    onChange={handleCourseChange}
                    checked={courses.includes("C / C++ Programming")}
                  />
                  <span>C / C++ Programming</span>
                </label>

                <label className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    value="Other"
                    onChange={handleCourseChange}
                    checked={courses.includes("Other")}
                  />
                  <span>Other</span>
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[19px]">
                    Source of Information*
                  </label>
                  <select
                    value={sourceInfo}
                    onChange={(e) => setSourceInfo(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  >
                    <option value="">Source of Information*</option>
                    <option>Social Media</option>
                    <option>Friend</option>
                    <option>College Workshop</option>
                    <option>Received call from institute</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[19px]">
                    Name of Executive*
                  </label>
                  <select
                    value={executiveName}
                    onChange={(e) => setExecutiveName(e.target.value)}
                    className="w-full mt-1 p-3 rounded-xl border border-[#b9c8d3] bg-white text-[#1f2937]"
                  >
                    <option value="">Name of Executive (if any)</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-[#0d1b2a] text-white px-10 py-3 rounded-full text-lg hover:bg-gray-700"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </main>

        
      </div>
    </>
  );
};

export default Form;
