import React, { useState } from "react";
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const supportedBy = [
  "https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/PU.png",
  "https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/startupBihar.png",
  "https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/PUIC.png",
];

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
        {/* Top: Logo + Socials */}
        <div className="lg:flex lg:justify-between lg:items-start mb-12 gap-8 sm:gap-12">
          <div className="text-center lg:text-left lg:w-full lg:max-w-md">
            <img
              src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/aligneyeFinalLogo.webp"
              alt="Aligneye Logo"
              className="w-32 sm:w-36 mx-auto lg:mx-0 mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Innovative wearable technology for perfect posture and pain-free
              living.
            </p>

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
        </div>

        {/* Main Links Section - mobile */}
        <div className="lg:hidden">
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
                      <a
                        href="/product"
                        className="hover:text-white transition"
                      >
                        Posture Corrector Neckband
                      </a>
                    </li>
                  )}
                  {section === "company" && (
                    <>
                      <li>
                        <Link
                          to="/aboutUs"
                          className="hover:text-white transition"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ourStory"
                          className="hover:text-white transition"
                        >
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/blogs"
                          className="hover:text-white transition"
                        >
                          Blog
                        </a>
                      </li>
                    </>
                  )}
                  {section === "contact" && (
                    <>
                      <li className="flex items-center">
                        <Mail className="mr-2 text-teal-400" size={16} />
                        <a
                          href="mailto:support@aligneye.com"
                          className="text-sm"
                        >
                          support@aligneye.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="mr-2 text-teal-400" size={16} />
                        <a href="tel:+917717465091" className="text-sm">
                          +91 7717465091
                        </a>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="mr-2 mt-1 text-teal-400" size={45} />
                        <span className="text-sm">
                          Technology Business Incubator, Mechanical Workshop,
                          UIET, Panjab University, Chandigarh, India, Pin Code:
                          160014
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/aboutUs" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ourStory" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="/blogs" className="hover:text-teal-400 transition">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400" size={16} />
                <a
                  href="mailto:support@aligneye.com"
                  className="hover:text-gray-300"
                >
                  support@aligneye.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400" size={16} />
                <a href="tel:+917717465091" className="hover:text-gray-300">
                  +91 7717465091
                </a>
              </li>
              <li className="flex items-start hover:cursor-pointer">
                <MapPin className="mr-2 mt-1 text-teal-400" size={40} />
                <span className="hover:text-gray-300">
                  Technology Business Incubator, Mechanical Workshop, UIET,
                  Panjab University, Chandigarh, India, Pin Code: 160014
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* App Supported By Section */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-4">
          <h4 className="text-white font-semibold text-lg">Supported By</h4>
          <div className="flex flex-wrap justify-center gap-6 mt-2">
            {supportedBy.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Supported By ${index + 1}`}
                className="h-18 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Bottom Links & Copyright */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500">
          <p className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Aligneye Vision Private Limited.
            All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm">
            <Link to="/privacyPolicy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
