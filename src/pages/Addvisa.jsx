import React, { useState } from "react";
import Swal from "sweetalert2";

const Addvisa = () => {
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "Tourist visa",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  const documents = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedDocs = checked
        ? [...formData.requiredDocuments, value]
        : formData.requiredDocuments.filter((doc) => doc !== value);

      setFormData({ ...formData, requiredDocuments: updatedDocs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    

    fetch('https://visa-sites.vercel.app/visa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Your operation was successful.",
          icon: "success",
          confirmButtonText: "OK",
        });

      }

    })
  };

  return (
    <div className="bg-gradient-to-t from-cyan-800 to-black py-10 ">
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto  rounded-md text-white  bg-gradient-to-b from-teal-800 to-black shadow-2xl shadow-teal-400">
      <h2 className="text-2xl font-bold mb-4">Add Visa</h2>

      {/* Country Image */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Country Image URL:</label>
        <input
          type="url"
          name="countryImage"
          value={formData.countryImage}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter image URL"
          required
        />
      </div>

      {/* Country Name */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Country Name:</label>
        <input
          type="text"
          name="countryName"
          value={formData.countryName}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter country name"
          required
        />
      </div>

      {/* Visa Type */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Visa Type:</label>
        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
        >
          {visaTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Processing Time */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Processing Time:</label>
        <input
          type="text"
          name="processingTime"
          value={formData.processingTime}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter processing time (e.g., 7-10 days)"
          required
        />
      </div>

      {/* Required Documents */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Required Documents:</label>
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="requiredDocuments"
              value={doc}
              checked={formData.requiredDocuments.includes(doc)}
              onChange={handleChange}
              className="mr-2 text-teal-200"
            />
            <label>{doc}</label>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          rows="4"
          placeholder="Enter description about the visa"
        />
      </div>

      {/* Age Restriction */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Age Restriction:</label>
        <input
          type="number"
          name="ageRestriction"
          value={formData.ageRestriction}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter minimum age"
        />
      </div>

      {/* Fee */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Fee (in USD):</label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter visa fee"
          required
        />
      </div>

      {/* Validity */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Validity:</label>
        <input
          type="text"
          name="validity"
          value={formData.validity}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter validity period (e.g., 6 months)"
          required
        />
      </div>

      {/* Application Method */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Application Method:</label>
        <input
          type="text"
          name="applicationMethod"
          value={formData.applicationMethod}
          onChange={handleChange}
          className="w-full text-teal-200 border p-2 rounded"
          placeholder="Enter application method (e.g., Online)"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
      >
        Add Visa
      </button>
    </form>
    </div>
  );
};

export default Addvisa;
