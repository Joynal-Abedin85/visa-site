import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Blog = () => {
    return (
        <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCtkuhBHoyj8Zd3fX6Ns9cmliz03fcOoYDw&s"
              alt="Blog 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                How to Apply for a Visa in 2025
              </h3>
              <p className="text-gray-600 mt-2">
                Learn the step-by-step process for applying for a visa in the coming year.
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-4">
                <FaCalendarAlt className="mr-2" />
                <span>January 1, 2025</span>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5-9VQ3fVNf978hw4dFhRZ2otCIzC7oK9jw&s"
              alt="Blog 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Top 10 Tips for a Successful Visa Interview
              </h3>
              <p className="text-gray-600 mt-2">
                Prepare for your visa interview with these expert tips and tricks.
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-4">
                <FaCalendarAlt className="mr-2" />
                <span>December 25, 2024</span>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmqbUsosh3ELUQC_MOW5fYZfwOwPO1_Z5jA&s"
              alt="Blog 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Understanding Different Visa Types
              </h3>
              <p className="text-gray-600 mt-2">
                Explore the various types of visas and find the one that suits your needs.
              </p>
              <div className="flex items-center text-gray-500 text-sm mt-4">
                <FaCalendarAlt className="mr-2" />
                <span>December 15, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Blog;