import React from 'react';
import { FaGlobe, FaPercent, FaPlaneDeparture } from 'react-icons/fa';

const Offer = () => {
    return (
        <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
          Exclusive Offers
        </h2>
        <p className="text-center text-blue-600 mb-8">
          Grab our limited-time offers and make your visa journey seamless!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaPlaneDeparture className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Free Travel Consultation
            </h3>
            <p className="text-blue-600">
              Get a free consultation for your travel visa application.
            </p>
          </div>

          {/* Offer 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaPercent className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              20% Off on Visa Services
            </h3>
            <p className="text-blue-600">
              Enjoy a 20% discount on all our visa processing services.
            </p>
          </div>

          {/* Offer 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaGlobe className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Priority Processing
            </h3>
            <p className="text-blue-600">
              Get your visa processed faster with our priority service.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Offer;