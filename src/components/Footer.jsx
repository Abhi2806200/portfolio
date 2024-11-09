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
      className={`text-center p-6 bg-transparent footer ${isVisible ? "footer-visible" : ""}`}
    >
      <span className="text-white">
        &copy; {currentYear} Copyright - 
      </span>
      <a className="link-underline text-white font-bold" href="https://#">
        Abhishek Agnihotri
      </a>
      <div className="text-white mt-2">
        Local Time: {currentTime}
      </div>
    </div>
  );
}

export default Footer;
