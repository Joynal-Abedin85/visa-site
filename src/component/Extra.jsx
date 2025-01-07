import React from "react";
import { Fade } from "react-awesome-reveal";
// import { Fade } from "react-awesome-reveal"; // For animation
import { FaUserTie, FaRegBuilding, FaRocket, FaHandshake } from "react-icons/fa"; // React icons for services



const Extra = () => {
    return (
        <div className="min-h-screen bg-gradient-to-t from-teal-600 to-cyan-800 text-white p-8">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <Fade direction="up" triggerOnce>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300">
            Learn more about our mission, vision, and services that we offer for your visa needs.
          </p>
        </Fade>

        {/* Vision and Mission Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Fade direction="left" triggerOnce>
            <div className="bg-teal-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                We aim to simplify the visa application process for people worldwide by offering a
                user-friendly platform for all types of visa applications.
              </p>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="bg-teal-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To provide fast, reliable, and transparent visa services that help individuals travel
                smoothly and efficiently across the globe.
              </p>
            </div>
          </Fade>
        </div>

        {/* Services Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <FaUserTie className="text-4xl mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p className="text-gray-300">
                Get personalized advice from visa experts to ensure a smooth application process.
              </p>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <FaRegBuilding className="text-4xl mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Corporate Visa Services</h3>
              <p className="text-gray-300">
                Specialized visa services for businesses and corporations to help employees with
                travel.
              </p>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <FaRocket className="text-4xl mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient Process</h3>
              <p className="text-gray-300">
                We ensure quick visa processing with minimal effort from your side.
              </p>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="text-center">
              <FaHandshake className="text-4xl mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
              <p className="text-gray-300">
                We collaborate with trusted authorities and embassies to offer you the most reliable
                visa services.
              </p>
            </div>
          </Fade>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Have questions or need assistance? Contact us and we’ll guide you through the entire visa
              application process.
            </p>
          </Fade>
        </div>
      </div>
    </div>
    );
};

export default Extra;
