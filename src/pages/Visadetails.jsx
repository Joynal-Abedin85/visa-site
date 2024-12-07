import React from 'react';
import Header from '../component/Header';
import { useLoaderData } from 'react-router-dom';

const Visadetails = () => {
    const visadetl = useLoaderData()
    const {countryName,visaType,countryImage,processingTime,requiredDocuments,description,ageRestriction,fee,validity,applicationMethod,_id} = visadetl
    return (
        <>
        <Header></Header>
        <div className='bg-black py-10 min-h-screen'>
        <div className="bg-gradient-to-b from-teal-600 via-cyan-700 to-black text-white rounded-lg shadow-lg overflow-hidden shadow-teal-600 border border-teal-500 w-11/12 mx-auto  ">
      {/* Country Image */}
      <img src={countryImage} alt={countryName} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6">
        {/* Country Name and Visa Type */}
        <h2 className="text-2xl font-bold">{countryName}</h2>
        <p className="text-cyan-300 italic">{visaType}</p>

        {/* Details */}
        <div className="mt-4 space-y-2">
          <p>
            <span className="font-semibold">Processing Time:</span> {processingTime}
          </p>
          <p>
            <span className="font-semibold">Required Documents:</span>{" "}
            {requiredDocuments.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Age Restriction:</span> {ageRestriction}+
          </p>
          <p>
            <span className="font-semibold">Fee:</span> ${fee}
          </p>
          <p>
            <span className="font-semibold">Validity:</span> {validity}
          </p>
          <p>
            <span className="font-semibold">Application Method:</span> {applicationMethod}
          </p>
        </div>

        {/* See Details Button */}
        <button
          className="mt-6 w-full bg-teal-500 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded transition duration-200"
        >
          See Details
        </button>
      </div>
    </div>
        </div>
        
        
        </>
        
    );
};

export default Visadetails;