import React, { useState } from "react";
import { productsData } from "../../mockData/data";
import { motion } from "framer-motion";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? productsData
      : productsData.filter((card) => card.category === activeTab);

  return (
    <>
      <div className="container mx-auto my-12 md:my-16">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 rounded-full transition duration-300 font-medium shadow-lg ${
                activeTab === tab
                  ? "bg-primary text-white scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render the filtered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Display card details */}
              <img
                src={card.Image}
                alt={card.category}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{card.category}</h3>
              <p className="text-gray-600 mb-4">{card.info}</p>
              <p className="text-primary font-bold">{card.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabComp;
