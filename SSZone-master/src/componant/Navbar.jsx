import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/image/logo.png";
import { useCart } from "../context/CartContext";

function Navbaar() {
  const { cartCount, wishlistCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary";

  return (
    <nav className="bg-white shadow-sm mx-auto px-4">
      <div className="py-4 flex items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Site Logo" />
        </NavLink>

        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About us
          </NavLink>
          <NavLink to="/courses" className={getNavLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/blogs" className={getNavLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact us
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <div className="flex gap-5">
            <NavLink
              to="/wishlist"
              className="w-8 h-8 rounded-full border flex items-center justify-center transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative cursor-pointer">
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    <span>{wishlistCount}</span>
                  </div>
                )}
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              className="w-8 h-8 rounded-full border flex items-center justify-center transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative cursor-pointer">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    <span>{cartCount}</span>
                  </div>
                )}
              </div>
            </NavLink>
          </div>

          <div className="lg:flex items-center gap-5">
            <NavLink
              to="/signup"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50 transition duration-300 ease-in-out hover:scale-105"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/login"
              className="px-5 py-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out hover:scale-105"
            >
              Log in
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 text-gray-700" />
          ) : (
            <FaBars className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={toggleMenu} className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={getNavLinkClass}>
              About us
            </NavLink>
            <NavLink to="/courses" onClick={toggleMenu} className={getNavLinkClass}>
              Courses
            </NavLink>
            <NavLink to="/blogs" onClick={toggleMenu} className={getNavLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={getNavLinkClass}>
              Contact us
            </NavLink>
            <div className="flex gap-4 pt-2">
              <NavLink
                to="/signup"
                onClick={toggleMenu}
                className="flex-1 py-2 text-center border border-primary text-primary rounded-md hover:bg-blue-50"
              >
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="flex-1 py-2 text-center bg-blue-600 text-white rounded-md"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbaar;
