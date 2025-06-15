import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaHome, FaArrowLeft } from 'react-icons/fa';

const Error403 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="mb-8"
        >
          <FaLock className="text-6xl text-rose-900 mx-auto" />
        </motion.div>

        <h1 className="text-6xl font-bold text-rose-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Access Forbidden</h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-8 max-w-md mx-auto"
        >
          Sorry, you don't have permission to access this page. This could be because:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-left max-w-md mx-auto mb-8 space-y-2 text-gray-600"
        >
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-900 rounded-full"></span>
            You're not logged in or your session has expired
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-900 rounded-full"></span>
            You don't have the required permissions
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-900 rounded-full"></span>
            The page requires authentication
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-900 to-rose-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaHome />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-rose-900 border border-rose-200 rounded-lg hover:bg-rose-50 transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error403; 