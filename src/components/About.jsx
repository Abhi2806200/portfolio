import React, { useState, useEffect } from "react";

const About = () => {
  // State to track scroll direction
  const [scrollDirection, setScrollDirection] = useState("up");

  // Track the scroll position to detect direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      name="about"
      className="w-full h-100 bg-transparent text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4 border-gray-500 transition-transform duration-700 ${scrollDirection === "down" ? "translate-y-8" : "translate-y-0"
              }`}
          >
            About
          </p>
        </div>

        <p
          className={`text-xl mt-5 transition-transform duration-700 ${scrollDirection === "down" ? "translate-y-8" : "translate-y-0"
            }`}
        >
          Oh hey there! I'm a frontend developer, and I make the web come alive
          with some serious React, Next.js, and Redux magic. While I’m the{" "}
          <strong>king</strong> of frontend, I’ve got the backend chops too,
          giving me that full-stack flair! <br /> <br />
          I'm all about perfecting my skills, tackling new tech, and staying on top of the latest trends.
          Let's make your website the hottest thing on the internet, shall we?
        </p>

        <br />

        <p
          className={`text-xl transition-transform duration-700 ${scrollDirection === "down" ? "translate-y-8" : "translate-y-0"
            }`}
        >
          Let’s make your brand unforgettable and give your customers an experience that’ll keep them coming back. Because let’s be honest—who doesn’t love a flawless design? Let's get your project to go viral and stand out from the crowd! <br /> <br />
          I'm here to transform your product’s identity and help you drive more traffic with a design that people can't stop talking abo
        </p>
      </div>
    </div>
  );
};

export default About;
