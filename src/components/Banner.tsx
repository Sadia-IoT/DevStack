// import React from "react";
import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className="py-20 sm:py-20">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:flex-row md:justify-between">
       <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl md:text-6xl ">
          Build Your Ideal
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            {" "}
            Development Stack
          </span>
        </h1>
        <p className="mt-6 max-w-2xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4 md:justify-start">
          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white">
            Explore Technologies
          </button>
          <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={BannerImage} alt="devstack" className="w-full max-w-sm sm:max-w-md" />
      </div>
      </div>
    </section>
  );
};

export default Banner;
