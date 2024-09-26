import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const bookings = useSelector(
    (state: RootState) => state.bookings.bookingArray
  );

  return (
    <nav className="bg-slate-500 p-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex  items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold hover:text-black">
          Car Wash
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-white text-base font-medium hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/bookings"
            className="text-white text-base font-medium hover:text-black"
          >
            Bookings: <span className="font-bold">{bookings.length}</span>
          </Link>
          <Link
            to="/services"
            className="text-white text-base font-medium hover:text-black"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-white text-base font-medium hover:text-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white  text-base font-medium hover:text-black"
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-white text-black p-2 rounded-r-md hover:bg-slate-700 text-base font-medium">
            Book Now
          </button>
        </div>

        {/* Cart and User Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* copy */}

          <Link to="/login" className="text-white hover:text-black">
            <FaUser size={24} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            to="/"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/bookings"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bookings
          </Link>
          <Link
            to="/contact"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart
            {/* Cart ({products}) */}
          </Link>
          <Link
            to="/login"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
