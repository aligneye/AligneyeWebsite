import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const StickySidebar = () => {
  return (
    <div
      className="
        hidden md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 md:z-50
        md:flex md:flex-col md:items-center md:justify-center
        md:py-3 md:px-1.5 md:bg-transparent md:rounded-r-md md:shadow-md
      "
    >
      <div className="flex flex-col items-center gap-y-2.5">
        <div className="flex flex-col gap-y-4">
          <a
            href="https://www.instagram.com/aligneye/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-600 transition duration-300 hover:scale-110"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/aligneye/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-600 transition duration-300 hover:scale-110"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.youtube.com/@AlignEye"
            target="_blank"
            aria-label="YouTube"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-600 transition duration-300 hover:scale-110"
          >
            <Youtube size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;
