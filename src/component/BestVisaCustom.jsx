import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaClock, FaDollarSign, FaArrowRight } from "react-icons/fa";

const BestVisaCustom = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-8">
        Best Visa Options for Top Countries
      </h1>

      {/* Grid Container */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 - USA */}
        <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=USA"
            alt="USA"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-teal-300">USA</h2>
            <p className="text-cyan-200 mt-2 text-sm">
              Best Visa:{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Tourist Visa"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                />
              </span>
            </p>
            <div className="text-gray-300 space-y-2 mt-4 text-sm">
              <p>
                <FaClock className="inline mr-2 text-teal-400" />
                Validity: 10 Years
              </p>
              <p>
                <FaDollarSign className="inline mr-2 text-green-400" />
                Fee: $160
              </p>
            </div>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition duration-200">
              See More
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Card 2 - Canada */}
        <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=Canada"
            alt="Canada"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-teal-300">Canada</h2>
            <p className="text-cyan-200 mt-2 text-sm">
              Best Visa:{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Work Visa"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                />
              </span>
            </p>
            <div className="text-gray-300 space-y-2 mt-4 text-sm">
              <p>
                <FaClock className="inline mr-2 text-teal-400" />
                Validity: 2 Years
              </p>
              <p>
                <FaDollarSign className="inline mr-2 text-green-400" />
                Fee: $150
              </p>
            </div>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition duration-200">
              See More
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Card 3 - Australia */}
        <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=Australia"
            alt="Australia"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-teal-300">Australia</h2>
            <p className="text-cyan-200 mt-2 text-sm">
              Best Visa:{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Student Visa"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                />
              </span>
            </p>
            <div className="text-gray-300 space-y-2 mt-4 text-sm">
              <p>
                <FaClock className="inline mr-2 text-teal-400" />
                Validity: 5 Years
              </p>
              <p>
                <FaDollarSign className="inline mr-2 text-green-400" />
                Fee: $620
              </p>
            </div>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition duration-200">
              See More
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Card 4 - UK */}
        <div className="bg-gradient-to-r from-teal-700 via-cyan-800 to-black text-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200?text=UK"
            alt="UK"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-teal-300">UK</h2>
            <p className="text-cyan-200 mt-2 text-sm">
              Best Visa:{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Business Visa"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                />
              </span>
            </p>
            <div className="text-gray-300 space-y-2 mt-4 text-sm">
              <p>
                <FaClock className="inline mr-2 text-teal-400" />
                Validity: 6 Months
              </p>
              <p>
                <FaDollarSign className="inline mr-2 text-green-400" />
                Fee: $200
              </p>
            </div>
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition duration-200">
              See More
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestVisaCustom;
