import React from 'react';

const Newslatter = () => {
    return (
        <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive the latest updates on visa services, travel tips, and exclusive offers.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
    );
};

export default Newslatter;