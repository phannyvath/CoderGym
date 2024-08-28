import React from "react";

const Banner2 = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-12 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4 mb-8 md:mb-0 md:max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get 20% Discount On Your First Order
          </h1>
          <p className="text-lg text-gray-600">
            We will make sure you get the right and best quality products for
            your workout.
          </p>
        </div>
        {/* Button Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="primary-btn bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
          <button className="primary-btn bg-secondary hover:bg-secondary-dark text-white py-3 px-6 rounded-lg transition duration-300">
            Stay in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
