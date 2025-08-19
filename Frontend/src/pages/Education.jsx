import React from "react";
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20 px-4">
      <div className="text-center space-y-6">
        <BookOpen size={48} className="mx-auto text-teal-500" />
        <h1 className="text-3xl sm:text-4xl font-bold">
          Education Page Coming Soon
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          We’re working hard to bring you valuable educational content about
          posture, vision health, and smart wearables. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Education;
