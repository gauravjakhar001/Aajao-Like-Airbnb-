// import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaLanguage, FaClock, FaHandshake } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 min-h-screen py-16 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-rose-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About AAJAO
        </motion.h1>

        {/* Hero Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-rose-600/90 z-10" />
          <img
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donaldtong94-189296.jpg&fm=jpg"
            alt="Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover India's Hidden Gems</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Connecting travelers with authentic local experiences across the vibrant landscapes of India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-rose-900">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Born out of the vibrant diversity and warmth of India, our platform was created to connect travelers with authentic local stays. Whether it's a heritage haveli in Rajasthan, a peaceful homestay in the Western Ghats, or a cozy studio in Delhi, we help you explore the true spirit of India.
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Our Story"
              className="rounded-2xl shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="https://media.istockphoto.com/photos/hand-passing-keys-to-new-owner-picture-id929215648?k=20&m=929215648&s=170667a&w=0&h=QOS1MXyteGVPW6q2WCnkIF7n4Gtu00WAK5S3DjZmP6U="
              alt="What We Do"
              className="rounded-2xl shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-rose-900">What We Do</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We empower local hosts across India to share their homes and stories. Our platform is built for all travelers—from solo backpackers to family vacationers—seeking culturally rich, affordable, and safe stays.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're on a mission to make Indian travel personal, immersive, and community-driven.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="bg-gradient-to-r from-rose-900 to-rose-600 rounded-3xl p-10 mb-20 shadow-2xl"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaHome className="text-4xl" />, text: "Deep focus on Indian culture and hospitality" },
              { icon: <FaShieldAlt className="text-4xl" />, text: "Secure and verified property listings" },
              { icon: <FaLanguage className="text-4xl" />, text: "Support in multiple Indian languages" },
              { icon: <FaClock className="text-4xl" />, text: "Simple booking and easy cancellation policies" },
              { icon: <FaHandshake className="text-4xl" />, text: "Round-the-clock support for travelers and hosts" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <p className="text-lg">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-rose-900">Join Our Community</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're an explorer seeking soulful getaways or a host eager to share your world, join us in creating India's most trusted travel community. Together, let's make India more discoverable — one stay at a time.
            </p>
            <motion.button
              className="mt-8 px-8 py-3 bg-gradient-to-r from-rose-900 to-rose-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.bu1QTp48A6U-8Gex589CJAHaEo&pid=Api&P=0&h=180"
              alt="Join Us"
              className="rounded-2xl shadow-xl w-full transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
