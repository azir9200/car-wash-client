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
    setIsMobileMenuOpen(false); // Close menu on logout
  };

  return (
    <nav className="bg-slate-500 p-5 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-black">
          Car Wash
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          {loggedUser ? (
            <>
              <Link to="/cart" className="nav-link">
                Bookings: <span className="font-bold">{services.length}</span>
              </Link>
              <Link to="/dashboard" className="dashboard-btn">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="nav-link">
                {myself?.name} Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-lg z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes size={30} />
          </button>

          {/* Links */}
          <Link
            to="/"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          {loggedUser ? (
            <>
              <Link
                to="/cart"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bookings: <span className="font-bold">{services.length}</span>
              </Link>
              <Link
                to="/dashboard"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="mobile-nav-link">
                {myself?.name} Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="mobile-nav-link"
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
