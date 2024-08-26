import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isVisible, onClose, icon, title, desc2 }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto"
      >
        <div className="text-6xl mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{desc2}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-500"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
