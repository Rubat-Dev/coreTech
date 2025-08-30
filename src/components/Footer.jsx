import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const navMenu = [
  { name: "Home", path: "/coreTech" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "E-commerce Solutions",
  "Digital Marketing",
];
const scrollUp = () => {
  window.scroll(0, 0);
};
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + About */}
        <div>
          <img src={logo} alt="logo" className="w-36 mb-4 invert" />
          <p className="text-sm leading-relaxed">
            Premium IT solutions crafted to elevate your business with modern
            technology and design excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navMenu.map((menu, index) => (
              <li key={index}>
                <NavLink
                  onClick={scrollUp}
                  to={menu.path}
                  className={({ isActive }) =>
                    ` transition-transform duration-300 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-gray-300 hover:text-blue-300 hover:translate-x-1"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li
                key={index}
                className=" text-gray-300 transition-transform duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
              { icon: <FaTwitter />, color: "hover:bg-sky-500" },
              { icon: <FaInstagram />, color: "hover:bg-pink-500" },
              { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`p-3 bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">YourCompany</span>. Made with{" "}
        <FaHeart className="inline text-red-500 animate-pulse" /> by{" "}
        <span className="text-blue-400 font-semibold">Rubat Shaikh</span>.
      </div>
    </footer>
  );
};

export default Footer;
