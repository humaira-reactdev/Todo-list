import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full bg-transparent text-black p-4 flex justify-between items-center z-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">MyToDoList</a>
        </div>

        {/* Hamburger Icon (visible only on small screens) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-6 sm:items-center sm:static absolute top-16 left-0 w-full bg-gray-800 sm:bg-transparent sm:w-auto`}
        >
          <NavLink
            to="/tasks"
            className="block px-4 py-2 text-black hover:text-white transition"
            activeClassName="text-white"
            onClick={() => setIsOpen(false)}
          >
            Tasks
          </NavLink>
          
          <button
            onClick={handleLogout}
            className="block px-4 py-2 bg-[#E78F81] rounded hover:bg-[#c96c61] transition sm:px-4 sm:py-2"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
