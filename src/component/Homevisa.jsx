import React from 'react';
import { NavLink } from 'react-router-dom';

const Homevisa = ({visa}) => {
    const {countryName,visaType,countryImage,processingTime,requiredDocuments,description,ageRestriction,fee,validity,applicationMethod,_id} = visa
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
      {/* Country Image */}
      <img src={countryImage} alt={`${countryName} image`} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Country Name */}
        <h2 className="text-lg font-bold text-teal-600">{countryName}</h2>

        {/* Visa Type */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Visa Type:</span> {visaType}
        </p>

        {/* Processing Time */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Processing Time:</span> {processingTime}
        </p>

        {/* Fee */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Fee:</span> ${fee}
        </p>

        {/* Validity */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Validity:</span> {validity}
        </p>

        {/* Application Method */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Application Method:</span> {applicationMethod}
        </p>

        {/* See Details Button */}
        <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
        <NavLink to={`visadetails/${_id}`}
          
          
        >
          See Details
        </NavLink>

        </button>
        
      </div>
    </div>
    );
};

export default Homevisa;