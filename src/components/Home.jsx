import React, { useMemo, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Constants
const ANIMATION_SETTINGS = {
  triggerOnce: true,
  threshold: 0.2,
};

const HERO_TEXT = {
  greeting: "Hello there, I'm Abhishek Agnihotri,",
  description:
    "A frontend developer dedicated to transforming ideas into seamless digital experiences. I'm passionate about creating innovative web applications using React, Tailwind, Next.js, Redux, and blockchain, crafting seamless user experiences with each project.",
};

const Home = () => {
  const { ref: textRef, inView: textInView } = useInView(ANIMATION_SETTINGS);
  const { ref: imageRef, inView: imageInView } = useInView(ANIMATION_SETTINGS);
  const controls = useAnimation();
  const [greeting, setGreeting] = useState("");

  // Typewriter effect for greeting
  useEffect(() => {
    if (textInView) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < HERO_TEXT.greeting.length) {
          setGreeting(HERO_TEXT.greeting.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [textInView]);

  // Animate text and image on scroll into view
  useEffect(() => {
    if (textInView) controls.start("visible");
  }, [textInView, controls]);

  const textClassName = useMemo(() => {
    return `flex flex-col justify-center h-full text-center md:text-left md:w-2/3 
    ${textInView ? "slide-in-left" : "opacity-0"}`;
  }, [textInView]);

  const buttonClassName = useMemo(() => {
    return `group text-white px-6 py-3 sm:px-10 sm:py-4 font-semibold flex items-center rounded-full 
    bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 
    shadow-lg hover:shadow-2xl hover:scale-105 transform 
    transition-all duration-300 ease-in-out cursor-pointer 
    hover:bg-gradient-to-l hover:from-pink-600 hover:via-purple-700 hover:to-blue-600 
    relative overflow-hidden`;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row gap-8 md:gap-12">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          className={textClassName}
          variants={itemVariants}
          animate={controls}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700">
            {greeting}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 mt-4 leading-relaxed">
            {HERO_TEXT.description}
          </p>
          <div className="mt-8">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className={buttonClassName}
            >
              <span className="relative z-10">View Projects</span>
              <MdOutlineKeyboardArrowRight
                size={25}
                className="ml-2 group-hover:translate-x-1 transition-transform z-10"
              />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          className={`md:w-1/3 ${imageInView ? "slide-in-right" : "opacity-0"}`}
          variants={itemVariants}
          animate={controls}
        >
          <LazyLoadImage
            src={require("../assets/heroImage.png")}
            alt="Hero"
            effect="blur"
            className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-purple-500 hover:border-pink-500"
            placeholderSrc={require("../assets/heroImage.png")}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default React.memo(Home);