import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaClock, FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";
import { Authcontext } from "../component/Authprovider";

const Myvisa = () => {
  const myvisa = useLoaderData();
  const {data} = useContext(Authcontext)

  const [selectedVisa, setSelectedVisa] = useState(null); // State to hold the selected visa
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const openUpdateModal = (visa) => {
    setSelectedVisa(visa); // Set selected visa data
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setSelectedVisa(null); // Clear selected visa
    setIsModalOpen(false); // Close modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdate(selectedVisa._id, selectedVisa); // Update visa with new data
    closeModal(); // Close modal after update
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedVisa({ ...selectedVisa, [name]: value }); // Update state with new value
  };

  const handledelete = (_id) => {

    



    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/myvisa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
//   const {
//     countryName,
//     visaType,
//     countryImage,
//     processingTime,
//     requiredDocuments,
//     description,
//     ageRestriction,
//     fee,
//     validity,
//     applicationMethod,
//     _id,
//   } = myvisa;
  return (
    <div className="px-5 dark:bg-teal-900 dark:text-white transition duration-300 py-5">
      {myvisa.map((myv) => (
        <div
          key="myv._id"
          className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg p-4 my-5 flex flex-col md:flex-row gap-4"
        >
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
              onClick={() => openUpdateModal(myv)}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                <FaEdit />
                Update
              </button>
              <button
                onClick={() => handledelete(myv._id)}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                <FaTrashAlt />
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="block mb-2">
                Country Name:
                <input
                  type="text"
                  name="countryName"
                  value={selectedVisa?.countryName || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Visa Type:
                <input
                  type="text"
                  name="visaType"
                  value={selectedVisa?.visaType || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Processing Time:
                <input
                  type="text"
                  name="processingTime"
                  value={selectedVisa?.processingTime || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Fee:
                <input
                  type="number"
                  name="fee"
                  value={selectedVisa?.fee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-2">
                Validity:
                <input
                  type="text"
                  name="validity"
                  value={selectedVisa?.validity || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <label className="block mb-4">
                Application Method:
                <input
                  type="text"
                  name="applicationMethod"
                  value={selectedVisa?.applicationMethod || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </label>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myvisa;
