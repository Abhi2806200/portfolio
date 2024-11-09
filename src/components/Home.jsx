import React from "react";
import HeroImage from "../assets/heroImage.png"; // Make sure this image path is correct
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import "./css/home.css";  // Ensure this file includes any custom styles

const Home = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div name="home" className="h-screen w-full bg-transparent overflow-hidden">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row space-y-8 md:space-y-0">
        <div ref={textRef} className={`flex flex-col justify-center h-full text-center md:text-left md:w-2/3 ${textInView ? "slide-in-left" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 animate-pulse">
            Hello there, I'm Abhishek Agnihotri,
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-gray-200 mt-4 leading-relaxed">
            A frontend developer dedicated to transforming ideas into seamless digital experiences. I’m passionate about creating innovative web applications using React, Tailwind, Next.js, Redux, and blockchain, crafting seamless user experiences with each project.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-10 py-4 font-semibold flex items-center rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div ref={imageRef} className={`w-full flex justify-center md:w-1/3 ${imageInView ? "slide-in-right" : "opacity-0"}`}>
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-full w-2/3 md:w-72 lg:w-full shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
