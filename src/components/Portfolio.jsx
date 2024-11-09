import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import digital from "../assets/portfolio/digitalram.png";
import raging from "../assets/portfolio/ragingbull.jpeg";
import nested from "../assets/portfolio/nestedform.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: digital,
      link: 'https://www.digitalrammandir.com/',
      repo: ''
    },
    {
      id: 2,
      src: raging,
      link: 'https://t.me/raging_bull_ant_dev_bot?start=',
      repo: ''
    },
    {
      id: 3,
      src: nested,
      link: 'https://deeply-nested-form.vercel.app/',
      repo: ''
    },
  ];

  return (
    <div
      name="project"
      className="w-full text-white md:h-screen portfolio"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <motion.div
              key={id}
              className="relative shadow-lg shadow-gray-600 rounded-lg bg-transparent transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-opacity-40"
              initial={{ opacity: 0, y: 100 }}  // Initial position for sliding effect (from bottom)
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
              viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is visible
              transition={{ duration: 0.7, delay: id * 0.2 }} // Stagger the animation
            >
               
              <img
                src={src}
                alt="project"
                className="rounded-md w-full h-72 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent rounded-md"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center flex justify-center gap-4 px-6 py-3">
                <motion.button
                  className="relative  bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white px-6 py-3 rounded-md shadow-lg overflow-hidden transform transition duration-200 hover:scale-105"
                  onClick={() => window.open(link, '_blank')}
                  initial={{ x: -100 }}  // Initial position to the left
                  whileInView={{ x: 0 }}  // Animate to the original position
                  transition={{ duration: 0.5, delay: id * 0.2 }} // Staggered effect
                >
                  <span className="relative z-10">Click here</span>
                  <div className="absolute inset-0 bg-white opacity-20 transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
