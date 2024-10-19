
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navigation links array
let links = [
  { name: "HOME", Link: "./" }, // Currently only the "HOME" link is defined
];

const BookStoreNav = ({ input, setInput }) => {
  // State for toggling mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle search input changes
  const searchBook = (e) => {
    setInput(e.target.value); // Update the parent component's state with the input value
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with link to the homepage */}
        <Link to="/" className="text-5xl font-bold">
          IBRAHIM's Bookstore
        </Link>
        <div className="flex items-center space-x-4">
          {/* Desktop search input, hidden on smaller screens */}
          <input
            className="hidden md:block py-2 px-4 rounded-lg focus:outline-none bg-white text-black"
            type="text"
            placeholder="Search for books..."
            value={input}
            onChange={searchBook} // Calls the searchBook function when input changes
          />
          {/* Hamburger menu button for mobile view */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu} // Toggles the mobile menu visibility
          >
            {/* SVG icon for the hamburger menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation links (displayed on larger screens) */}
        <ul
          className={`md:flex md:items-center space-x-4 font-bold ${
            isOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0`}
        >
          {links.map((link, index) => (
            <li key={index} className="hover:text-yellow-400">
              <a href={link.Link}>{link.name}</a>{" "}
              {/* Renders each navigation link */}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile search input (visible when the menu is open) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-2 border-t border-gray-600 pt-2`}
      >
        <input
          className="py-2 px-4 focus:outline-none bg-transparent"
          type="text"
          placeholder="Search for books..."
          value={input}
          onChange={searchBook} // Calls the searchBook function when input changes
        />
      </div>
    </nav>
  );
};

export default BookStoreNav;




