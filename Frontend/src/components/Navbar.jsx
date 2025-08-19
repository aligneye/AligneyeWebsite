import React, { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/aligneyeFinalLogo.webp";
import CartSidebar from "./CartSidebar";
import { useCart } from "../context/CartContext";

const navLinks = ["Product", "Science", "Education", "Blogs"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const isProductPage = currentPath === "/product";

  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCTA = () => {
    if (currentPath === "/product") {
      return null;
    }
    return (
      <Link to="/product" className="w-full sm:w-auto">
        <button className="bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 hover:cursor-pointer transition-all duration-300 w-full sm:w-auto hover:bg-teal-500">
          Shop Now
        </button>
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 py-3 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="AlignEye Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {currentPath !== "/" && (
            <Link
              to="/"
              className={`font-medium relative group transition-colors duration-200 ${
                isScrolled ? "text-black hover:text-teal-600" : "text-white hover:text-teal-400"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 h-0.5 bg-teal-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          {navLinks.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = currentPath === path;
            const textColor = isScrolled
              ? isActive
                ? "text-teal-600"
                : "text-black hover:text-teal-600"
              : isActive
              ? "text-teal-400"
              : "text-white hover:text-teal-400";

            return (
              <Link
                key={item}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium relative group transition-colors duration-200 ${textColor}`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Icons & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className={`relative p-2 hover:text-teal-600 hover:cursor-pointer rounded-full ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <ShoppingCart className="w-5 h-5 hover:scale-115 hover:text-teal-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          {renderCTA()}
        </div>

        {/* Mobile Cart + Menu */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className={`relative p-2 rounded-full ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? "text-black" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 px-4 sm:px-6 py-4 z-40">
          <nav className="flex flex-col space-y-4">
            {currentPath !== "/" && (
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg font-medium hover:text-teal-400"
              >
                Home
              </Link>
            )}
            {navLinks.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg font-medium hover:text-teal-400"
              >
                {item}
              </Link>
            ))}
            <div className="pt-4">{renderCTA()}</div>
          </nav>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;