// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   //   const { isAuthenticated, user } = useSelector((state) => state.auth || {} ); // Adjust based on your state structure

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-sky-100  fixed top-0 left-0 w-full z-50 p-4">
//       <div className=" mx-auto lg:flex  ">
//         <div className="flex justify-evenly w-2/6">
//           <div className="text-2xl font-bold">
//             <Link to="/" className="hover:text-gray-400">
//               Car Wash
//             </Link>
//           </div>
//           <div>
//             <button
//               onClick={toggleDropdown}
//               className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md focus:outline-none"
//             >
//               Appointment
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-evenly w-2/6">
//           <button
//             className="lg:hidden px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//           <div
//             className={`lg:flex flex-grow items-center space-x-4 ${
//               isOpen ? "block" : "hidden"
//             }`}
//           >
//             <Link to="/" className="hover:text-gray-400">
//               Home
//             </Link>
//             <Link to="/services" className="hover:text-gray-400">
//               Services
//             </Link>
//             <Link to="/booking" className="hover:text-gray-400">
//               Booking
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-evenly w-2/6">
//           {/* {isAuthenticated ?  */}(
//           <>
//             {/* {user?.role === "ADMIN" && ( "")} */}
//             <Link to="/admin-dashboard" className="hover:text-gray-400">
//               Admin Dashboard
//             </Link>

//             <Link to="/user-dashboard" className="hover:text-gray-400">
//               User Dashboard
//             </Link>
//             <button
//               className="hover:text-gray-400"
//               onClick={() => {
//                 /* Handle logout */
//               }}
//             >
//               Logout
//             </button>
//           </>
//           ) : (
//           <Link to="/login" className="hover:text-gray-400">
//             Login
//           </Link>
//           )
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  // const selectedItems = useAppSelector((store) => store.cart.selectedItems);
  // const products = useAppSelector((store) => store.cart.products);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            to="/services"
            className="text-white text-base font-medium hover:text-black"
          >
            Bookings
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
