import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Support = () => {
    return (
        <section className=" bg-gray-100 dark:bg-teal-900  dark:text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold  mb-4">
              Support & Contact
            </h2>
            <p className="text-gray-400">
              Have questions or need assistance? Get in touch with us.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Method 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <FaPhoneAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone Support
              </h3>
              <p className="text-gray-600">
                Call us at <strong>+1 234 567 890</strong> for immediate assistance.
              </p>
            </div>
  
            {/* Contact Method 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600">
                Reach us at <strong>support@visasite.com</strong> for queries.
              </p>
            </div>
  
            {/* Contact Method 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">
                123 Visa Lane, Travel City, TX 75001, USA
              </p>
            </div>
          </div>
  
          <div className="text-center mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    );
};

export default Support;