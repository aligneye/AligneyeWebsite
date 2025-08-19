import React from "react";
import { Pencil } from "lucide-react";

const Blogs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20 px-4">
      <div className="text-center space-y-6">
        <Pencil size={48} className="mx-auto text-teal-500" />
        <h1 className="text-3xl sm:text-4xl font-bold">Blogs Coming Soon</h1>
        <p className="text-gray-400 max-w-md mx-auto">
          We're preparing insightful blog posts around ergonomics, tech updates,
          and lifestyle hacks. Check back soon!
        </p>
      </div>
    </div>
  );
};

export default Blogs;
