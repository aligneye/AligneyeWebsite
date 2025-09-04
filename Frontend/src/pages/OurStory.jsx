import React from "react";

const OurStory = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-teal-400 leading-tight">
          Our Story
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Every great idea begins with a simple question. Aligneye started with
          a single thought: "what if we could use wearable technology to solve
          the posture and eye strain problems of modern life?"
        </p>
      </div>

      {/* Story Timeline / Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 lg:mb-16">
        {/* Image 1 */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/prototype.png"
            alt="Early prototype"
            className="rounded-lg shadow-md w-full object-cover h-auto"
          />
          <p className="text-gray-400 text-sm sm:text-base mt-3 text-center px-2">
            Taping sensors to glasses - our very first experiments.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/neckbandIntegration.png"
            alt="Neckband iteration"
            className="rounded-lg shadow-md w-full object-cover h-auto"
          />
          <p className="text-gray-400 text-sm sm:text-base mt-3 text-center px-2">
            Experimenting with different forms and materials.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/finalProduct.png"
            alt="Final product"
            className="rounded-lg shadow-md w-full object-cover h-96"
          />
          <p className="text-gray-400 text-sm sm:text-base mt-3 text-center px-2">
            The wearable neckband - smart posture correction in action.
          </p>
        </div>
      </div>

      {/* Story Text */}
      <div className="max-w-3xl mx-auto text-center space-y-6 bg-gray-800/60 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700 mb-12 lg:mb-16">
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          From taping sensors to glasses, to experimenting with different forms
          and materials, our early prototypes were raw but full of potential.
          Each iteration taught us something new: how people move, how they
          respond to feedback, and how technology can seamlessly support
          well-being.
        </p>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Through countless trials, tests, and refinements, we shaped our vision
          into a wearable neckband that combines smart posture correction,
          gentle feedback, and real-time insights. What started as a few wires
          and taped-together models has grown into a device designed to empower
          healthier living.
        </p>
        <p className="text-teal-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6">
          This journey is ongoing, but one thing has never changed - our mission
          to align technology with human health.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a
          href="/product"
          className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-bold text-base sm:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          Explore Aligneye
        </a>
      </div>
    </div>
  );
};

export default OurStory;
