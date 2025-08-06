import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setMenuOpen(!menuOpen);

  const stagger = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  return (
    <nav className="z-10 sticky top-0 bg-black text-white font-serif shadow-xl">
      <div className="flex md:block  justify-between item-center px-5 py-4 md:text-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold hover:text-blue-200 transition">
          SHEKHAR DIXIT
        </Link>

        {/* Desktop Menu */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="hidden md:flex gap-6 text-sm text-center justify-center pt-2"
        >
          <motion.div variants={stagger}><Link to="/" className="hover:text-blue-200 transition text-center">Home</Link></motion.div>
          <motion.div variants={stagger}><Link to="/about" className="hover:text-blue-200 transition">About</Link></motion.div>
          <motion.div variants={stagger}><Link to="/updates" className="hover:text-blue-200 transition text-yellow-400">Updates</Link></motion.div>
          <motion.div variants={stagger}><Link to="/gallery" className="hover:text-blue-200 transition">Gallery</Link></motion.div>
          <motion.div variants={stagger}><Link to="/volunteer" className="hover:text-blue-200 transition">Volunteer</Link></motion.div>
          <motion.div variants={stagger}><Link to="/schedule" className="hover:text-blue-200 transition">Schedule</Link></motion.div>
          <motion.div variants={stagger}><Link to="/contactus" className="hover:text-blue-200 transition">Contact Us</Link></motion.div>
        </motion.div>

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
            <li><Link onClick={toggleDropdown} to="/" className="block px-4 py-2 hover:bg-slate-600">Home</Link></li>
            <li><Link onClick={toggleDropdown} to="/about" className="block px-4 py-2 hover:bg-slate-600">About</Link></li>
            <li><Link onClick={toggleDropdown} to="/progress" className="block px-4 py-2 hover:bg-slate-600">Progress</Link></li>
            <li><Link onClick={toggleDropdown} to="/gallery" className="block px-4 py-2 hover:bg-slate-600">Gallery</Link></li>
            <li><Link onClick={toggleDropdown} to="/invoced" className="block px-4 py-2 hover:bg-slate-600">Get Involved</Link></li>
            <li><Link onClick={toggleDropdown} to="/schedule" className="block px-4 py-2 hover:bg-slate-600">Schedule</Link></li>
            <li><Link onClick={toggleDropdown} to="/contactus" className="block px-4 py-2 hover:bg-slate-600">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
