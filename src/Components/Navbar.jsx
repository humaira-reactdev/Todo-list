import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // const currentUserData = useSelector((state) => state.counter.userSlice);


  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full bg-transparent text-black p-4 flex justify-between items-center z-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#3B1E54]">
          <h1>MyToDoList</h1>
        </div>

        {/* Hamburger Icon (visible only on small screens) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
             <HiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-6 sm:items-center p-[10px] sm:static absolute top-16 left-0 w-full bg-[#E78F81] sm:bg-transparent sm:w-auto`}
        >
          {/* <NavLink
            to="/tasks"
            className="block px-4 py-2 text-black hover:text-white transition"
            activeClassName="text-white"
            onClick={() => setIsOpen(false)}
          >
            Tasks
          </NavLink> */}
          <div className="user">
            <p>Name</p>
          </div>
          
          <button
              onClick={handleLogout}
              className="block px-4 py-2 bg-white text-black rounded hover:bg-[#3B1E54] hover:text-white transition sm:px-4 sm:py-2"
            >
            Logout
          </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
