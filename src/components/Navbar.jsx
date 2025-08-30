import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { FaQuoteLeft, FaWindowClose } from "react-icons/fa";
import {
  FaHome,
  FaServicestack,
  FaAddressBook,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const navMenu = [
  { name: "Home", path: "/coreTech", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaAddressBook /> },
  { name: "Services", path: "/services", icon: <FaServicestack /> },
  { name: "Portfolio", path: "/portfolio", icon: <FaBriefcase /> },
  { name: "testimonials", path: "/testimonials", icon: <FaQuoteLeft /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 mt-5">
      {/* ye parent navbar ko center align karega */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white max-w-4xl w-full rounded-full shadow-xl mx-3">
        {/* Logo */}
        <NavLink to="/coreTech" onClick={toggleMenu}>
          <img src={logo} alt="logo" className="w-28 h-auto" loading="lazy" />
        </NavLink>

        {/* Menu Button Mobile */}
        <button
          className="md:hidden text-3xl font-bold text-blue-600 cursor-pointer"
          onClick={toggleMenu}
        >
          <CgMenuRight />
        </button>

        {/* Nav Links */}
        <ul
          className={`flex gap-6 max-md:fixed bg-white max-md:flex-col max-md:h-screen max-md:w-full inset-0 items-center justify-center duration-300 ${
            isOpen ? "max-md:scale-100" : "max-md:scale-0"
          }`}
        >
          <button
            className="md:hidden text-3xl font-bold text-blue-600 absolute right-5 top-5 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaWindowClose />
          </button>
          {navMenu.map((menu, index) => (
            <li key={index}>
              <NavLink
                to={menu.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {menu.icon}
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
