import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const []

  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className="w-3xl bg-white rounded shadow border p-3">
          <select
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border p-3 rounded w-1/2 overflow-hidden"
          >
            <option value="">-Select Country-</option>
            {
                CountryData.map((Country,idx)=>(</option>
                        <option>{country.Countryname}<option/>)

                )
            }
          </select>

          <select
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border p-3 rounded w-1/2 overflow-hidden"
          >
            <option value="">-Select Country-</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Currency;
