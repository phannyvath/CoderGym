import React from "react";

const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Banner Image Section */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        </div>

        {/* Banner Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition duration-300 ease-in-out hover:text-primary">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{subtitle}</p>
          <a
            href={link}
            className="inline-block bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
