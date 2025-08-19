import React from "react";
import { Atom } from "lucide-react";

const Science = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20 px-4">
      <div className="text-center space-y-6">
        <Atom size={48} className="mx-auto text-teal-500" />
        <h1 className="text-3xl sm:text-4xl font-bold">
          Science Behind AlignEye
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          We're preparing an in-depth look at the research, technology, and
          innovation that powers AlignEye. Stay tuned for the science.
        </p>
      </div>
    </div>
  );
};

export default Science;
