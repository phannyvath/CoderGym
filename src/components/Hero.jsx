import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../assets/dumbell.png"; // Ensure this path is correct
import { SlideLeft, SlideRight } from "../util/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              Gym gives you the perfect{" "}
              <span className="text-primary">Health</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 xl:max-w-[500px]"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at the best product.
            </motion.p>
            {/* button section */}
            <div className="flex justify-center items-center gap-8 md:justify-start">
              <button className="primary-btn flex items-center gap-2 duration-300">
                Order now
              </button>
              <button className="flex justify-center items-center gap-2 hover:text-primary hover:scale-110 duration-300">
                <FaPlay />
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }} // Ensure it animates to visible
            transition={{ duration: 0.8 }} // Define transition duration
            src={HeroImg}
            alt="Dumbbell"
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
