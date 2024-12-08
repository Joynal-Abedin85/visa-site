import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaCalendarAlt, FaDollarSign, FaUserAlt, FaEnvelope } from "react-icons/fa";


const Application = () => {
  const myvisa = useLoaderData();
  return (
    <div className="px-5 dark:bg-teal-900 dark:text-white transition duration-300 py-5">
      {myvisa.map((myv) => (
        <div key='myv._id' className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg p-4 my-5 flex flex-col md:flex-row gap-4">
          {/* Country Image */}
          <img
            src={myv?.countryImage}
            alt={myv?.countryName}
            className="w-full md:w-1/3 h-40 object-cover rounded-md"
          />

          {/* Content */}
          <div className="flex flex-col justify-between w-full">
            <div>
              {/* Country and Visa Type */}
              <h2 className="text-2xl font-bold">{myv?.countryName}</h2>
              <p className="text-cyan-300 text-sm mb-2">{myv?.visaType}</p>

              {/* Visa Details */}
              <div className="text-gray-300 space-y-2">
                <p>
                  <FaCalendarAlt className="inline mr-2 text-teal-400" />
                  Applied Date: {myv?.appliedDate}
                </p>
                <p>
                  <FaCalendarAlt className="inline mr-2 text-blue-400" />
                  Processing Time: {myv?.processingTime}
                </p>
                <p>
                  <FaDollarSign className="inline mr-2 text-green-400" />
                  Fee: ${myv?.fee}
                </p>
                <p>
                  <FaCalendarAlt className="inline mr-2 text-purple-400" />
                  Validity: {myv?.validity}
                </p>
                <p>
                  <span className="font-semibold text-gray-100">
                    Application Method:
                  </span>{" "}
                  {myv?.applicationMethod}
                </p>
              </div>

              {/* Applicant Details */}
              <div className="mt-4 text-gray-300 space-y-2">
                <p>
                  <FaUserAlt className="inline mr-2 text-yellow-400" />
                  Applicant: {myv?.firstName}-{myv?.lastName}
                </p>
                <p>
                  <FaEnvelope className="inline mr-2 text-red-400" />
                  Email: {myv?.email}
                </p>
              </div>
            </div>

            {/* Cancel Button */}
            <div className="flex justify-end mt-4">
              <button
                
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Application;
