import React from 'react';

const Latestvisa = ({visa}) => {
    const {countryName,visaType,countryImage,processingTime,requiredDocuments,description,ageRestriction,fee,validity,applicationMethod} = visa

    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden border ">
      {/* Country Image */}
      <img src={countryImage} alt={`${countryName} image`} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Country Name */}
        <h2 className="text-xl font-bold text-teal-600">{countryName}</h2>

        {/* Visa Type */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Visa Type:</span> {visaType}
        </p>

        {/* Processing Time */}
        <p className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">Processing Time:</span> {processingTime}
        </p>

        {/* Required Documents */}
        <div className="mt-2">
          <p className="font-semibold text-gray-700">Required Documents:</p>
          <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
            {requiredDocuments?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3">{description}</p>

        {/* See Details Button */}
        <button
          
          className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          See Details
        </button>
      </div>
    </div>
    );
};

export default Latestvisa;