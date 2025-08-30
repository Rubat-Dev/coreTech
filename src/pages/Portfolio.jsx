import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#",
    github: "#",
    description: "A fully responsive e-commerce platform with payment integration and real-time inventory management.",
  },
  {
    id: 2,
    title: "Portfolio Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#",
    github: "#",
    description: "A sleek portfolio design with a focus on minimalism and user experience.",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "App Development",
    image: "https://plus.unsplash.com/premium_photo-1721080250995-5a83519eb2a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    link: "#",
    github: "#",
    description: "A secure mobile banking app with biometric authentication and transaction tracking.",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#",
    github: "#",
    description: "A powerful SaaS dashboard with real-time analytics and customizable widgets.",
  },
  {
    id: 5,
    title: "Travel App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#",
    github: "#",
    description: "A travel planning app with itinerary management and offline maps.",
  },
  {
    id: 6,
    title: "Branding Project",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#",
    github: "#",
    description: "A complete branding solution with logo design and style guidelines.",
  },
];

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulated 2-second load
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white px-6 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-center py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 mt-15"
        >
          Our <span className="text-orange-400">Premium</span> Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Discover our premium portfolio showcasing innovative, scalable, and user-centric solutions crafted for global clients.
        </motion.p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700  hover:bg-blue-100 "
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {isLoading
            ? Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-gray-200 rounded-2xl h-64"
                  ></div>
                ))
            : filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.category}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        aria-label={`Visit ${project.title} live site`}
                        className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.github}
                        aria-label={`View ${project.title} GitHub repository`}
                        className="p-2 bg-white rounded-full hover:bg-gray-900 hover:text-white transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Category: {selectedProject.category}
              </p>
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Visit Live
                </a>
                <a
                  href={selectedProject.github}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
                >
                  View GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;