import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { debounce } from "lodash";

const About = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  // Handle scroll direction with debouncing
  const handleScroll = useCallback(
    () => {
      const currentScrollY = window.scrollY;
      setScrollDirection((prevDirection) => {
        const direction = currentScrollY > (window.lastScrollY || 0) ? "down" : "up";
        window.lastScrollY = currentScrollY;
        return direction;
      });
    },
    []
  );

  // Debounced version of handleScroll
  const debouncedHandleScroll = useCallback(
    debounce(handleScroll, 100),
    [handleScroll] // Explicitly declare handleScroll as a dependency
  );

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  // Animation variants for Framer Motion
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    []
  );

  // Scroll-based transform styles
  const scrollTransform = useMemo(
    () => ({
      transform: scrollDirection === "down" ? "translateY(8px)" : "translateY(0)",
      transition: "transform 700ms",
    }),
    [scrollDirection]
  );

  return (
    <motion.div
      name="about"
      className="w-full h-auto flex items-center justify-center bg-gradient-to-b from-transparent to-black text-white py-12"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4 w-full">
        {/* About Section Header */}
        <motion.div className="pb-8" variants={variants}>
          <h2
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            style={scrollTransform}
          >
            About
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Introduction Text */}
          <motion.div
            variants={variants}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl leading-relaxed" style={scrollTransform}>
              Oh hey there! I'm a frontend developer, and I make the web come alive
              with some serious React, Next.js, and Redux magic.
            </p>
            <p
              className="text-xl leading-relaxed text-gray-300"
              style={scrollTransform}
            >
              I specialize in building responsive and performant web applications
              using modern technologies and best practices.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={variants}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-teal-400">Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>React & Next.js Development</li>
              <li>State Management with Redux</li>
              <li>Responsive Web Design</li>
              <li>Performance Optimization</li>
              <li>UI/UX Implementation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;