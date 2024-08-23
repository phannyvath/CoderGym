import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavbarMenu } from "../mockData/data"; // Import NavbarMenu

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className=" inline-block py-1 px-3 hover:text-primary hover:font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li className="bg-orange-700 text-white font-semibold rounded-md px-5 py-3 hover:bg-orange-400 hover:text-black hover:border-gray-400">
                <button>Login</button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
