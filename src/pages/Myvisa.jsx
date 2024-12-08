import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaClock, FaDollarSign } from "react-icons/fa";

const Myvisa = () => {
  const myvisa = useLoaderData(); 
  const {
    countryName,
    visaType,
    countryImage,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    _id,
  } = myvisa;
  return (
    <div className="w-11/12 mx-auto">
        {
            myvisa.map(myv => (

            
    <div key='myv._id' className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg p-4 my-5 flex flex-col md:flex-row gap-4">
      {/* Image */}
      <img
        src={myv?.countryImage}
        alt={myv?.countryName}
        className="w-full md:w-1/3 h-40 object-cover rounded-md"
      />

      {/* Content */}
      <div className="flex flex-col justify-between w-full">
        <div>
          {/* Country Name */}
          <h2 className="text-2xl font-bold">{myv?.countryName}</h2>
          {/* Visa Type */}
          <p className="text-cyan-300 text-sm mb-2">{myv?.visaType}</p>
          {/* Additional Info */}
          <div className="text-gray-300 space-y-2">
            <p>
              <FaClock className="inline mr-2 text-teal-400" />
              Processing Time: {myv?.processingTime}
            </p>
            <p>
              <FaDollarSign className="inline mr-2 text-green-400" />
              Fee: ${myv?.fee}
            </p>
            <p>
              <FaClock className="inline mr-2 text-blue-400" />
              Validity: {myv?.validity}
            </p>
            <p>
              <span className="font-semibold text-gray-100">
                Application Method:
              </span>{" "}
              {myv?.applicationMethod}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            <FaEdit />
            Update
          </button>
          <button
            
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            <FaTrashAlt />
            Delete
          </button>
        </div>
      </div>
    </div>
        ))
    }
    </div>
  );
};

export default Myvisa;
