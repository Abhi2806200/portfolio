import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import digital from "../assets/portfolio/digitalram.png";
import raging from "../assets/portfolio/ragingbull.jpeg";
import nested from "../assets/portfolio/nestedform.png";

const Portfolio = () => {
  const portfolios = useMemo(() => [
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
    <section name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 py-16">
      <motion.div 
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header className="mb-12">
          <motion.h2 
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="py-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out some of my work right here
          </motion.p>
        </motion.header>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {portfolios.map(({ id, src, link, repo }) => (
            <motion.div
              key={id}
              className="shadow-lg rounded-lg overflow-hidden bg-gray-900 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-48 flex items-center justify-center bg-gray-800 overflow-hidden">
                <LazyLoadImage
                  src={src}
                  alt=""
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 w-full text-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-teal-400 hover:underline">
                  View Project
                </a>
                {repo && (
                  <a href={repo} target="_blank" rel="noopener noreferrer" className="ml-4 text-lg font-semibold text-teal-400 hover:underline">
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;