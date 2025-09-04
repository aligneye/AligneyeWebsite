import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (isLogin) {
      // Login
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) setMessage(error.message);
      else navigate("/");
    } else {
      // Signup
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { platform: "web" },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        // Profile will be created automatically by DB trigger
        navigate("/");
      }
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
      data: { platform: "web" },
    });
    if (error) setMessage(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {message && (
          <p className="mb-4 text-sm text-center text-red-500">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-2 rounded-full font-semibold hover:bg-teal-500 transition-colors hover:cursor-pointer"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="my-4 text-center text-gray-400">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-full font-semibold hover:bg-red-400 transition-colors hover:cursor-pointer"
        >
          Continue with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-teal-400 font-semibold hover:underline hover:cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
