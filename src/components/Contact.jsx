import React from "react";
import { motion } from "framer-motion"; // For animation

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-transparent p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can reach me via email or WhatsApp.</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          {/* Email and WhatsApp Section */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* Email Section */}
            <motion.div
              className="text-xl md:text-2xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:abhishekagni2806@gmail.com"
                className="text-pink-500 hover:underline"
              >
                abhishekagni2806@gmail.com
              </a>
            </motion.div>

            {/* WhatsApp Section */}
            <motion.div
              className="text-xl md:text-2xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="font-semibold">WhatsApp:</span>
              <a
                href="https://wa.me/918219071272"
                className="text-green-500 hover:underline"
              >
                +91 8219071272
              </a>
              {/* India Flag */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"
                alt="India Flag"
                className="w-8 h-8 ml-2 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
