import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Tech stack images
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";

const Experience = () => {
  const techs = useMemo(() => [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 10, src: express, title: "Express", style: "shadow-white" },
    { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 12, src: redux, title: "Redux", style: "shadow-purple-500" }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black py-16">
      <motion.div 
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.header className="mb-12">
          <motion.h2 
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="py-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Over the past 3 years, I have honed my skills in frontend development, working with a variety of technologies to build dynamic and responsive web applications.
          </motion.p>
        </motion.header>

        {/* Experience Progress */}
        <motion.div 
          className="py-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">3 Years of Experience in Frontend Development</h3>
          <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8"
          variants={containerVariants}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-lg hover:scale-105 duration-300 py-4 rounded-lg ${style} bg-gray-800`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LazyLoadImage
                src={src}
                alt={title}
                effect="blur"
                className="w-20 mx-auto mb-4 transform transition duration-300 hover:rotate-12"
              />
              <p className="mt-2 text-lg sm:text-xl font-semibold">{title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Experience */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Professional Timeline</h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <p className="text-lg font-bold">2021 - 2022</p>
              <p className="text-gray-400">Intern Developer</p>
              <p className="text-gray-300 mt-2">Worked on building responsive web pages using HTML, CSS, and JavaScript. Gained experience in version control with Git and GitHub.</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">2022 - 2023</p>
              <p className="text-gray-400">Assistant Software Developer</p>
              <p className="text-gray-300 mt-2">Developed dynamic web applications using React and Redux. Collaborated with backend developers to integrate APIs and enhance user experience.</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">2023 - Present</p>
              <p className="text-gray-400">Software Developer</p>
              <p className="text-gray-300 mt-2">Leading frontend development projects, implementing best practices, and mentoring junior developers. Focused on performance optimization and modern web technologies.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
