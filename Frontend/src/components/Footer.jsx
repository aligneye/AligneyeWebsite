import React, { useState } from "react";
import logo from "../assets/aligneyeFinalLogo.webp";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-neutral-950 text-white pt-12 sm:pt-16 pb-10 relative overflow-hidden">
      {/* Background Gradient (desktop only) */}
      <div className="hidden lg:block absolute inset-0 opacity-5 bg-gradient-to-br from-teal-500 via-transparent to-purple-600 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Top: Logo + Intro + CTA */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12 gap-8 sm:gap-12">
          {/* Left: Logo + Intro + Socials */}
          <div className="text-center lg:text-left lg:w-full lg:max-w-md">
            <img
              src={logo}
              alt="Aligneye Logo"
              className="w-32 sm:w-36 mx-auto lg:mx-0 mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Innovative wearable technology for perfect posture and pain-free
              living.
            </p>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start mt-6 space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/aligneye/"
                target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-teal-600 transition"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/aligneye/"
                target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-teal-600 transition"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@AlignEye"
                target="_blank"
                className="bg-neutral-800 p-2 rounded-full hover:bg-teal-600 transition"
              >
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right: Community CTA */}
          {/* <div className="mt-10 lg:mt-0 lg:w-full lg:max-w-md">
            <h3 className="text-lg font-semibold text-white mb-3 text-center lg:text-left">
              Join the Aligneye Community
            </h3>
            <p className="text-gray-400 mb-4 text-sm text-center lg:text-left">
              Be part of a growing movement. Get early access, tips, and
              community-only perks.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-grow px-4 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-500 hover:cursor-pointer hover:scale-105 text-white font-medium transition text-sm sm:text-base whitespace-nowrap"
              >
                Join Now
              </button>
            </form>
          </div> */}
        </div>

        {/* Main Links Section -mobile version */}
        <div className="lg:hidden">
          {/* Mobile Collapsible Sections */}
          {["products", "company", "contact"].map((section) => (
            <div key={section} className="mb-6">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center text-white font-semibold text-base sm:text-lg mb-2 text-left"
              >
                {section === "products"
                  ? "Products"
                  : section === "company"
                  ? "Company"
                  : "Contact Us"}
                {openSection === section ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openSection === section && (
                <ul className="text-gray-400 space-y-2 mt-2 text-sm">
                  {section === "products" && (
                    <li>
                      <a href="#" className="hover:text-white transition">
                        Posture Corrector Neckband
                      </a>
                    </li>
                  )}
                  {section === "company" && (
                    <>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="/blogs" className="hover:text-white transition">
                          Blog
                        </a>
                      </li>
                    </>
                  )}
                  {section === "contact" && (
                    <>
                      <li className="flex items-center">
                        <Mail className="mr-2 text-teal-400" size={16} />
                        <a href="mailto:aligneye@gmail.com" className="text-sm">
                          aligneye@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="mr-2 text-teal-400" size={16} />
                        <a href="tel:+916207730209" className="text-sm">
                          +91 62077 30209
                        </a>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="mr-2 mt-1 text-teal-400" size={16} />
                        <span className="text-sm">Delhi NCR, India</span>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/product" className="hover:text-teal-400 transition">
                  Posture Corrector Neckband
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-teal-400 transition">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400" size={16} />
                <a href="mailto:aligneye@gmail.com" className="hover:text-gray-300">aligneye@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400" size={16} />
                <a href="tel:+916207730209" className="hover:text-gray-300">+91 9955165091</a>
              </li>
              <li className="flex items-start hover:cursor-pointer">
                <MapPin className="mr-2 mt-1 text-teal-400" size={16} />
                <span className="hover:text-gray-300">Technology Business Incubator, Block 3, UIET, Panjab University, Chandigarh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links & Copyright */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500">
          <p className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Aligneye Vision Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
