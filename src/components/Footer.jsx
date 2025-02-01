import React, { useState, useEffect } from "react";
import "./css/footer.css"; // Importing the CSS for animation

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Function to update the time in 12-hour format
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      const hourIn12Format = hours % 12 || 12; // Convert to 12-hour format
      const formattedTime = `${hourIn12Format}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    // Update the clock every second
    const timeInterval = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    // Update the year when the year changes
    const yearInterval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Check every second in case the year changes at midnight

    // Cleanup the interval on component unmount
    return () => clearInterval(yearInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition = document.getElementById("footer").getBoundingClientRect().top;
      if (footerPosition < window.innerHeight) {
        setIsVisible(true); // Footer is within the viewport
      } else {
        setIsVisible(false); // Footer is out of viewport
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="footer"
      className={`text-center p-8 bg-gray-900 footer ${
        isVisible ? "footer-visible" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-white text-sm md:text-base mb-4">
          &copy; {currentYear} Copyright -{" "}
          <a
            className="link-underline text-black-500 font-bold hover:text-black-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/abhishek-agnihotri-b46039165/"
          >
            Abhishek Agnihotri
          </a>
        </div>
        <div className="text-white text-sm md:text-base">
          Local Time:{" "}
          <span className="font-mono bg-gray-800 px-3 py-1 rounded-full">
            {currentTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;