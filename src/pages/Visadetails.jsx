import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import { Authcontext } from "../component/Authprovider";

const Visadetails = () => {
  const visadetl = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const {user} = useContext(Authcontext)
  
  console.log(user);
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
  } = visadetl;
  const [formData, setFormData] = useState({
    email: `${user && user.email}`,
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0], // Current date
    fee: `${fee}`,
    countryName: `${countryName}`,
    countryImage: `${countryImage}`,
    visaType: `${visaType}`,
    processingTime: `${processingTime}`,
    validity: `${validity}`,
    applicationMethod: `${applicationMethod}`,


  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    // Add your form submission logic here (e.g., send data to the server)
    fetch('http://localhost:4000/myvisa',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data => console.log(data))
    setShowModal(false);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Header></Header>
      <div className="bg-black py-10 min-h-screen">
        <div className="bg-gradient-to-b from-teal-600 via-cyan-700 to-black text-white rounded-lg shadow-lg overflow-hidden shadow-teal-600 border border-teal-500 w-11/12 mx-auto  ">
          {/* Country Image */}
          <img
            src={countryImage}
            alt={countryName}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-6">
            {/* Country Name and Visa Type */}
            <h2 className="text-2xl font-bold">{countryName}</h2>
            <p className="text-cyan-300 italic">{visaType}</p>

            {/* Details */}
            <div className="mt-4 space-y-2">
              <p>
                <span className="font-semibold">Processing Time:</span>{" "}
                {processingTime}
              </p>
              <p>
                <span className="font-semibold">Required Documents:</span>{" "}
                {requiredDocuments.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold">Age Restriction:</span>{" "}
                {ageRestriction}+
              </p>
              <p>
                <span className="font-semibold">Fee:</span> ${fee}
              </p>
              <p>
                <span className="font-semibold">Validity:</span> {validity}
              </p>
              <p>
                <span className="font-semibold">Application Method:</span>{" "}
                {applicationMethod}
              </p>
            </div>

            {/* See Details Button */}
            <div className="flex justify-center items-center">
              {/* Apply for Visa Button */}
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded transition duration-200"
              >
                Apply for the Visa
              </button>

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-teal-600">
                      Visa Application
                    </h2>
                    <form onSubmit={handleSubmit}>
                      {/* Email */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          readOnly
                          className="w-full border border-gray-300 rounded p-2 bg-gray-100"
                        />
                      </div>

                      {/* First Name */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>

                      {/* Applied Date */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">
                          Applied Date
                        </label>
                        <input
                          type="text"
                          name="appliedDate"
                          value={formData.appliedDate}
                          readOnly
                          className="w-full border border-gray-300 rounded p-2 bg-gray-100"
                        />
                      </div>

                      {/* Fee */}
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">
                          Fee
                        </label>
                        <input
                          type="number"
                          name="fee"
                          value={formData.fee}
                          readOnly
                          className="w-full border border-gray-300 rounded p-2 bg-gray-100"
                        />
                      </div>

                      {/* Apply Button */}
                      <button
                        type="submit"
                        className="bg-teal-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded w-full"
                      >
                        Apply
                      </button>
                    </form>

                    {/* Close Modal */}
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visadetails;
