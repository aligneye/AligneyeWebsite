import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  CircleUserRound,
  LogOut,
  User,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

const navLinks = ["Product", "Science", "Education", "Blogs"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const { user, signOut } = useAuth();
  const userModalRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { totalItems } = useCart();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch avatar after login/signup
  useEffect(() => {
    const fetchAvatar = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("avatar")
          .eq("user_id", user.id)
          .single();

        if (data?.avatar) setAvatarUrl(data.avatar);
      }
    };
    fetchAvatar();
  }, [user]);

  const handleUserIconClick = () => {
    if (user) setIsUserModalOpen(!isUserModalOpen);
    else navigate("/auth");
  };

  const handleLogout = async () => {
    await signOut();
    setIsUserModalOpen(false);
    navigate("/");
  };

  const renderCTA = () => {
    if (currentPath === "/product") return null;
    return (
      <Link to="/product" className="w-full sm:w-auto">
        <button className="bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 hover:cursor-pointer transition-all duration-300 w-full sm:w-auto hover:bg-teal-500">
          Shop Now
        </button>
      </Link>
    );
  };

  const renderUserIcon = (size = "6") => {
    return avatarUrl ? (
      <img
        src={avatarUrl}
        alt="User Avatar"
        className={`w-${size} h-${size} rounded-full object-cover cursor-pointer`}
      />
    ) : (
      <CircleUserRound
        className={`w-${size} h-${size} hover:scale-115 cursor-pointer transition-transform duration-200 ${
          isScrolled ? "text-gray-700" : "text-white"
        } hover:text-teal-500`}
      />
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 py-3 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/aligneyeFinalLogo.webp"
            alt="AlignEye Logo"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {currentPath !== "/" && (
            <Link
              to="/"
              className={`font-medium relative group transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-teal-600"
                  : "text-white hover:text-teal-400"
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
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* User Icon */}
          <button onClick={handleUserIconClick} className="relative">
            {renderUserIcon("6")}
          </button>

          {/* User Modal Desktop */}
          {isUserModalOpen && (
            <div
              ref={userModalRef}
              className="absolute md:absolute top-full md:mt-2 right-0 w-48 bg-gray-800 shadow-lg rounded-md overflow-hidden z-50"
            >
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsUserModalOpen(false)}
              >
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link
                to="/orders"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsUserModalOpen(false)}
              >
                Orders
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left px-4 py-2 bg-red-600 hover:bg-red-500 hover:cursor-pointer text-white"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className={`relative p-2 hover:text-teal-600 hover:cursor-pointer rounded-full ${
              isScrolled ? "text-gray-700" : "text-white"
            } `}
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

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-3 relative">
          <button onClick={handleUserIconClick}>{renderUserIcon("6")}</button>

          {isUserModalOpen && (
            <div
              ref={userModalRef}
              className="fixed top-16 right-4 w-44 bg-gray-800 shadow-lg rounded-md z-50"
            >
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsUserModalOpen(false)}
              >
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link
                to="/orders"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-white"
                onClick={() => setIsUserModalOpen(false)}
              >
                Orders
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-white bg-red-600"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className={`relative p-2 rounded-full text-white `}
          >
            <ShoppingCart
              className={`w-5 h-5 ${
                isScrolled
                  ? "text-black hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            />
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
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
