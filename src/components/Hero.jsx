import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex text-white">
      <div className="max-w-[800px] mt=[-96px] w-full mx-auto text-center flex flex-col justify-center h-[90vh]">
        <p className="text-[#00df9a] uppercase p-2 font-bold">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          Grow with data.
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            sequence={["BTB", 1, "SASS", 1, "BTC", 1]}
            repeat={Infinity}
            speed={500}
            deletionSpeed={200}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
