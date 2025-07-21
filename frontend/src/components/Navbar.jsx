import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setMenuOpen(!menuOpen);

  return (
    <nav className="z-10 sticky top-0 bg-black text-white font-serif shadow-xl">
      <div className="flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold hover:text-blue-200 transition">
          SHEKHAR DIXIT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/progress" className="hover:text-blue-200 transition">Progress</Link>
          <Link to="/gallery" className="hover:text-blue-200 transition">Gallery</Link>
          <Link to="/invoced" className="hover:text-blue-200 transition">Get Involved</Link>
          <Link to="/schedule" className="hover:text-blue-200 transition">Schedule</Link>
          <Link to="/contactus" className="hover:text-blue-200 transition">Contact Us</Link>
        </div>

        {/* Mobile Dropdown Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg text-sm px-4 py-2"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4">
          <ul className="bg-slate-700 rounded-lg divide-y divide-slate-600 shadow">
            <li><Link to="/" className="block px-4 py-2 hover:bg-slate-600">Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 hover:bg-slate-600">About</Link></li>
            <li><Link to="/progress" className="block px-4 py-2 hover:bg-slate-600">Progress</Link></li>
            <li><Link to="/gallery" className="block px-4 py-2 hover:bg-slate-600">Gallery</Link></li>
            <li><Link to="/invoced" className="block px-4 py-2 hover:bg-slate-600">Get Involved</Link></li>
            <li><Link to="/schedule" className="block px-4 py-2 hover:bg-slate-600">Schedule</Link></li>
            <li><Link to="/contactus" className="block px-4 py-2 hover:bg-slate-600">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
