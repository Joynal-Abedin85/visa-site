import React from 'react';

const Promotional = () => {
    return (
        <section className="bg-blue-600 py-10">
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Special Promotion: 50% Off on Visa Services!
              </h2>
              <p className="text-lg">
                Apply for your visa now and take advantage of this limited-time
                offer. Let us make your travel dreams a reality!
              </p>
            </div>
  
            {/* Call-to-Action Button */}
            <div>
              <a
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Promotional;