import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
import ToggleButton from "./ToggleButton";
// import { FaEye } from "react-icons/fa";
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate, Link } from "react-router-dom";

interface LoginProps {
  onClose: () => void;
}

const Loginkaro: React.FC<LoginProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [active, setActive] = useState('host');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('active:', active, 'email:', email, 'password:', password);
    if (active === "host") {
      if (email.trim() === "apurvakix@gmail.com" && password.trim() === "Welcome@123") {
        onClose();
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } else if (active === "renter") {
      if (email.trim() === "renter@gmail.com" && password.trim() === "newone@012") {
        onClose();
        navigate("/renter-map");
      } else {
        setError("Invalid credentials");
      }
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
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Luxury Stay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-center text-white/90">
              Discover the perfect stay for your next adventure
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 relative">
          <Link
            to="/renter-map"
            className="absolute top-4 right-4 text-rose-600 hover:text-rose-800 text-sm font-medium transition-colors"
          >
            Skip
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-rose-900">
              Login to Your Account
            </h2>
            <p className="text-sm mb-6 text-rose-700">
              Welcome back! Please enter your credentials to log in.
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
              {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-rose-900 to-rose-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 mt-6 mb-6"
              >
                Login
              </motion.button>
            </form>

            {/* OR separator */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Continue with Google button */}
            <button
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition text-base font-medium"
              onClick={() => {
                // TODO: Implement Google Sign-In functionality here
                console.log('Continue with Google clicked');
                // Example: firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
              }}
            >
              {/* Google Icon (replace with actual SVG or component if needed) */}
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M20.64 12.203a7.71 7.71 0 0 0-.198-1.215H12v2.31h4.844c-.209.981-.824 1.815-1.724 2.384v3.003h3.866c2.264-2.097 3.574-5.185 3.574-8.782z"></path>
                <path fill="#34A853" d="M12 21.003c3.236 0 5.953-1.072 7.936-2.91l-3.866-3.002c-1.064.711-2.426 1.134-4.07 1.134-3.139 0-5.797-2.113-6.753-4.96h-3.96V13.003c2.036 3.997 6.152 6.999 10.713 6.999z"></path>
                <path fill="#FBBC05" d="M5.247 14.003c-.241-.71-.382-1.46-.382-2.24s-.141-1.53-.382-2.24L.987 6.583v3.003c.769 1.514 1.201 3.23 1.201 5.002s-.432 3.488-1.201 5.002l3.873-3.002z"></path>
                <path fill="#EA4335" d="M12 4.998c2.729 0 5.17.986 7.074 2.82l3.43-3.33c-2.25-2.17-5.234-3.54-8.504-3.54C6.152.998 2.036 3.999.001 7.996l3.866 3.003c.956-2.847 3.614-4.961 6.753-4.961z"></path>
              </svg>
              Continue with Google
            </button>

            {/* Skip and Forgot Password links */}
            <div className="flex justify-end mt-4">
              <Link className="text-sm text-rose-500 hover:text-rose-700 cursor-pointer transition-colors" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <ToggleButton active={active} setActive={setActive} />

            {/* Sign Up link as a button in a flex row */}
            <div className="flex items-center justify-between text-gray-600 mt-4 space-x-2">
              <span>Don't have an account?</span>
              <button
                className="px-4 py-1 rounded-full w-100 md:w-30 text-white font-medium bg-gradient-to-r from-rose-900 to-rose-600 hover:from-rose-800 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  onClose();
                  // Instead of showing signup modal, we'll let the parent handle it
                  const signupEvent = new CustomEvent('showSignup');
                  window.dispatchEvent(signupEvent);
                }}
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loginkaro;
