import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="w-full  bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-5">
          <div className="space-y-4 ">
            <h3 className="text-lg font-semibold text-rose-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/About"
                  className="text-gray-500 hover:text-rose-900">
                  About Us
                </Link>
              </li>
               <li>
                <Link
                  to="/Blogs"
                  className="text-gray-500 hover:text-rose-900">
                  Blogs
                </Link>
              </li>
              <li>
              <Link
                  to="/Cancel"
                  className="text-gray-500 hover:text-rose-900">
                  Cancellation Policy
                </Link>
              </li>
              <li>
               
                <Link
                  to="/Host&Agreements"
                  className="text-gray-500 hover:text-rose-900">
                  Host Agreement
                </Link>
              </li>
              <li>
                {/* <a href="#" className="text-gray-500 hover:text-rose-900">
                  Privacy
                </a> */}
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-rose-900">
                  Privacy
                </Link>
                <br></br>
              </li>
              <li>
                <Link
                  to="/T&C"
                  className="text-gray-500 hover:text-rose-900 mt-3">
                  T&C
                </Link>
              </li>
            </ul>
          </div>
    
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rose-900">aajao</h3>
            <p className="text-gray-500">
              Find your perfect stay with aajao, the world's leading
              accommodation booking platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-900 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 "
          >
            
            <Link to="/403">404 Error</Link>
          </motion.button>
        </div>
      

        <div className="mt-10  pt-7 text-center">
          <p className="text-gray-500">© 2025 aajao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
