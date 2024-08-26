import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../util/animation";
import Modal from "../../components/Modal";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader will be distracted by readable content.",
    desc2:
      "Cardio machines such as treadmills, ellipticals, and stationary bikes are essential for improving cardiovascular health, enhancing endurance, and supporting weight loss efforts. With customizable settings, you can tailor your workouts to meet specific goals, whether it's increasing stamina, burning calories, or enhancing overall heart health. These machines come equipped with advanced technology to monitor heart rate, distance, speed, and calories burned, ensuring you stay on track with your fitness objectives.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Weightlifting Equipments",
    desc: "The essential tools for strength training, helping you lift and build muscle effectively.",
    desc2:
      "Cardio machines such as treadmills, ellipticals, and stationary bikes are essential for improving cardiovascular health, enhancing endurance, and supporting weight loss efforts. With customizable settings, you can tailor your workouts to meet specific goals, whether it's increasing stamina, burning calories, or enhancing overall heart health. These machines come equipped with advanced technology to monitor heart rate, distance, speed, and calories burned, ensuring you stay on track with your fitness objectives.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Running Equipments",
    desc: "Top quality running shoes and gear to improve performance and comfort.",
    desc2:
      "Cardio machines such as treadmills, ellipticals, and stationary bikes are essential for improving cardiovascular health, enhancing endurance, and supporting weight loss efforts. With customizable settings, you can tailor your workouts to meet specific goals, whether it's increasing stamina, burning calories, or enhancing overall heart health. These machines come equipped with advanced technology to monitor heart rate, distance, speed, and calories burned, ensuring you stay on track with your fitness objectives.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handleClick = (item) => {
    setSelectedEquipment(item);
  };

  const handleCloseModal = () => {
    setSelectedEquipment(null);
  };

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
            onClick={() => handleClick(item)}
            className="space-y-4 p-6 bg-gray-100 hover:bg-orange-100 rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-2xl font-semibold">{item.title}</p>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Rendering */}
      {selectedEquipment && (
        <Modal
          isVisible={true}
          onClose={handleCloseModal}
          icon={selectedEquipment.icon}
          title={selectedEquipment.title}
          desc2={selectedEquipment.desc2}
        />
      )}
    </div>
  );
};

export default Equipment;
