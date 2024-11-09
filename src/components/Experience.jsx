import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

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
  const techs = [
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
    { id: 12, src: redux, title: "Redux", style: "shadow-purple-500" },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-transparent text-white"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <motion.p
            className="text-3xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My Development Experience
          </motion.p>
          <motion.p
            className="text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I have 2.9 years of experience working with a wide range of frontend technologies.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="py-12">
          <p className="text-2xl font-semibold text-center mb-4">Timeline</p>
          <div className="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-16">
            {/* Intern */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <div className="text-xl font-bold">Dec 2021 - Jun 2022</div>
              <div className="text-sm text-gray-200">Intern</div>
            </div>
            <div className="w-1 h-20 bg-gray-300 rounded-full hidden sm:block"></div>

            {/* Assistant Software Developer */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <div className="text-xl font-bold">Jun 2022 - Jun 2023</div>
              <div className="text-sm text-gray-200">Assistant Software Developer</div>
            </div>
            <div className="w-1 h-20 bg-gray-300 rounded-full hidden sm:block"></div>

            {/* Associate Software Developer */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <div className="text-xl font-bold">Jun 2023 - Jun 2024</div>
              <div className="text-sm text-gray-200">Associate Software Developer</div>
            </div>
            <div className="w-1 h-20 bg-gray-300 rounded-full hidden sm:block"></div>

            {/* Software Developer */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Jun 2024 - Present</div>
              <div className="text-sm text-gray-200">Software Developer</div>
            </div>
          </div>
        </div>

        {/* Animated Experience Progress */}
        <div className="py-8 text-center">
          <p className="text-2xl sm:text-3xl font-semibold">2.6 Years of Frontend Development</p>
          <div className="mt-6 relative w-full h-4 bg-gray-300 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Tech Stack Grid with Hover Effects */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-lg hover:scale-105 duration-300 py-4 rounded-lg ${style}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: id * 0.1 }}
            >
              <img src={src} alt={title} className="w-20 mx-auto mb-4 transform transition duration-300 hover:rotate-12" />
              <p className="mt-2 text-lg sm:text-xl font-semibold">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
