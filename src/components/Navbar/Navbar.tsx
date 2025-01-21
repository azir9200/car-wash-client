import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/userSlice";
import { useGetMeQuery } from "../../redux/Api/getMeApi";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const services = useAppSelector((store) => store.bookings.services) || [];
  const loggedUser = useAppSelector((store) => store.user.user);
  const { data } = useGetMeQuery(undefined);

  const myself = data?.data;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-slate-500 p-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            className="text-white text-base font-medium hover:text-black"
          >
            About
          </Link>
        </div>

        {/* Dashboard and User Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          {loggedUser ? (
            <>
              <Link
                to="/cart"
                className="text-white text-base font-medium hover:text-black pr-4"
              >
                Bookings: <span className="font-bold">{services.length}</span>
              </Link>
              <Link
                to="/dashboard"
                className="bg-white text-black p-2 rounded-md hover:bg-slate-700 text-base font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-white text-base font-medium hover:text-black"
              >
                {myself?.name} Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white text-base font-medium hover:text-black"
            >
              Login
            </Link>
          )}
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
          {loggedUser ? (
            <>
              <Link
                to="/cart"
                className="block text-white text-center hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bookings: <span className="font-bold">{services.length}</span>
              </Link>
              <Link
                to="/dashboard"
                className="block text-white text-center hover:text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block text-white text-center hover:text-gray-700"
              >
                {myself?.name} Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block text-white text-center hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
