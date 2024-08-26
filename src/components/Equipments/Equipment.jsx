import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../util/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader will be distracted by readable content.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Weightlifting Equipments",
    desc: "The essential tools for strength training, helping you lift and build muscle effectively.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Running Equipments",
    desc: "Top quality running shoes and gear to improve performance and comfort.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipment = () => {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
        {/* Header Section */}
        <div className="space-y-4 p-6 bg-primary text-white rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            What we offer for you
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            readable content.
          </p>
        </div>

        {/* Equipment Items */}
        {EquipmentData.map((item) => (
          <motion.div
            key={item.id}
            variants={SlideLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            className="space-y-4 p-6 bg-gray-100 hover:bg-orange-100 rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-2xl font-semibold">{item.title}</p>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
