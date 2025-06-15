import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";


interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [active, setActive] = useState('host');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for renter credentials
    if (email === "renter@gmail.com" && password === "newone@012") {
      // Redirect to map view
      navigate("/renter-map");
      onClose();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1300] flex items-center justify-center backdrop-blur-sm bg-black/30"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl min-h-[600px] flex overflow-hidden"
      >
        {/* Left Image with Overlay */}
        <div className="w-1/2 hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-700/50 to-rose-600/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Luxury Stay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-center text-white/90">
              Start your journey with us and discover amazing stays
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="relative w-full md:w-1/2 p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-rose-900">
              Create Your Account
            </h2>
            <p className="text-sm mb-6 text-rose-700">
              Sign up to explore the best homes and experiences.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosMail className="text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <FaEye className="text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full px-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <FaEye className="text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </div>
              </div>
              {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-rose-900 to-rose-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 mt-6 mb-6"
              >
                Create Account
              </motion.button>
            </form>

            

            <ToggleButton active={active} setActive={setActive} />

            {/* Login link as a button in a flex row */}
            <div className="flex items-center justify-between text-gray-600 mt-4 space-x-2">
              <span>Already have an account?</span>
              <button
                className="px-4 py-1 rounded-full w-100 md:w-30 text-white font-medium bg-gradient-to-r from-rose-900 to-rose-600 hover:from-rose-800 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  onClose();
                  // Instead of showing login modal, we'll let the parent handle it
                  const loginEvent = new CustomEvent('showLogin');
                  window.dispatchEvent(loginEvent);
                }}
              >
                Login
              </button>

              <button
                onClick={() => {
                  navigate("/renter-map");
                  onClose();
                }}
                className=" text-rose-600 hover:text-rose-800 text-sm font-medium transition-colors mt-4 mb-4"
            >
                Skip
            </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
