import React, { useState, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import TeamSection from "./TeamSection";
const videos = [
  {
    id: 1,
    src: video1,
    title: "Transform Your Business with Cutting-Edge Technology",
    desc: "We deliver innovative digital solutions that drive growth and efficiency for your business.",
  },
  {
    id: 2,
    src: video2,
    title: "Custom Software Development Tailored to Your Needs",
    desc: "From web applications to enterprise solutions, we build software that works for you. ",
  },
  {
    id: 3,
    src: video3,
    title: "Beautiful Designs That Deliver Results",
    desc: "User-centered design that enhances engagement and drives conversions. ",
  },
  {
    id: 4,
    src: video4,
    title: "Build Scalable & Secure Solutions",
    desc: "From startups to enterprises, we create systems that grow with you.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Slides */}
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            {/* Video */}
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 lg:w-4xl">
                {video.title}
              </h1>
              <p className="text-lg md:text-xl max-w-xl mb-6 py-3">
                {video.desc}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg transition">
                Get Started
              </button>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* other pages */}
      <About />
      <Services />
      <TeamSection />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
