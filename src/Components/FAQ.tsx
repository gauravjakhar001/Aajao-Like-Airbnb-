import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a hotel on the app?",
      answer: "Booking a property on AAJOO is simple! Just search for your desired location, select your dates, browse through available properties, and click 'Book Now'. Follow the prompts to complete your booking and payment."
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Our cancellation policy varies by property. Most properties offer free cancellation up to 24 hours before check-in. You can find the specific cancellation policy for each property on its listing page."
    },
    {
      question: "How are we safe?",
      answer: "To become a host, click on 'Become a Host' in the top navigation. You'll need to create an account, provide property details, upload photos, set your pricing, and complete the verification process."
    },
    {
      question: "How are our payment methods safe?",
      answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and digital wallets. All payments are secure and encrypted for your safety."
    },
    {
      question: "How do we work?",
      answer: "You can reach our customer support team 24/7 through the 'Help' section in your account, email us at support@aajoo.com, or call our toll-free number 1800-XXX-XXXX."
    },
    {
      question: "Do we have host facilities?",
      answer: "Yes, all properties listed on AAJOO go through a thorough verification process. We verify property details, amenities, and host credentials to ensure a safe and comfortable stay for our guests."
    }
  ];

  return (
    <section className="py-16  px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about booking, hosting, and using AAJOO
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rose-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="text-rose-900" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-rose-50/50 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-900 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Link to="/contact">Contact Support</Link>
          </motion.button>
        </motion.div>

        
      </div>
    </section>


  );
};

export default FAQ; 


