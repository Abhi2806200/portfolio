import React from "react";
import east from "../assets/portfolio/East.png";
import east2 from "../assets/portfolio/east2.png";
import east3 from "../assets/portfolio/east3.png";
import stump from "../assets/portfolio/stump1.png";
import admin from "../assets/portfolio/aaaa.png";
// import nftportal from "../assets/portfolio/nftportal.jpg";
// import webpostman from "../assets/portfolio/webpostman.jpg";
// import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: east,
      link: 'https://www.eastnft.com/',
      repo: ''
    },
    {
      id: 2,
      src: east2,
      link: 'https://www.eastnft.com/featurednft/all',
      repo: ''
    },
    {
      id: 3,
      src: east3,
      link: '',
      repo: ''
    },
    {
      id: 4,
      src: stump,
      link: '',
      repo: ''
    },
    {
      id: 5,
      src: admin,
      link: '',
      repo: ''
    },
    // {
    //   id: 6,
    //   //src: iptracker,
    //   link: '',
    //   repo: ''
    // },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
