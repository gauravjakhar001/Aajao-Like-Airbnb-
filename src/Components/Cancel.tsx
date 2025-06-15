import { motion } from 'framer-motion';
import { FaTimesCircle, FaUserFriends, FaExclamationTriangle, FaQuestionCircle, FaHeadset } from 'react-icons/fa';

const Cancel = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      icon: <FaUserFriends className="text-3xl text-rose-900" />,
      title: "For Guests",
      content: (
        <>
          <p className="text-gray-700 mb-4">When you make a reservation on our platform, you agree to the cancellation terms set by the host. These terms are clearly stated before booking and may fall under the following categories:</p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-rose-900 mb-2">Flexible</h3>
              <p className="text-gray-600">Full refund for cancellations made up to 24 hours before check-in.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-rose-900 mb-2">Moderate</h3>
              <p className="text-gray-600">Full refund for cancellations made up to 5 days before check-in.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-rose-900 mb-2">Strict</h3>
              <p className="text-gray-600">50% refund for cancellations made at least 7 days before check-in. No refund after that.</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">Refunds, if applicable, will be processed back to the original payment method within 7–10 business days, per Indian banking regulations.</p>
        </>
      )
    },
    {
      icon: <FaTimesCircle className="text-3xl text-rose-900" />,
      title: "For Hosts",
      content: (
        <>
          <p className="text-gray-700 mb-4">Hosts are encouraged to clearly define their cancellation policies to set guest expectations. Repeated last-minute cancellations by hosts may result in penalties, including temporary suspension or removal from the platform.</p>
          <p className="text-gray-700">Hosts in India are required to comply with the guidelines issued by local authorities and regulatory bodies regarding consumer protection.</p>
        </>
      )
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-rose-900" />,
      title: "Extenuating Circumstances",
      content: (
        <p className="text-gray-700">In the event of unavoidable emergencies (such as natural disasters, government-imposed lockdowns, or public health emergencies), we may waive cancellation penalties. Documentation may be required to support the claim.</p>
      )
    },
    {
      icon: <FaQuestionCircle className="text-3xl text-rose-900" />,
      title: "How to Cancel",
      content: (
        <p className="text-gray-700">To cancel a reservation, go to your account dashboard and select the reservation you want to cancel. The refund amount and any applicable penalties will be shown based on the host's policy and the time of cancellation.</p>
      )
    },
    {
      icon: <FaHeadset className="text-3xl text-rose-900" />,
      title: "Support for Indian Users",
      content: (
        <>
          <p className="text-gray-700 mb-4">If you face any issues while cancelling or have questions about your refund, you can contact our India Support Team via the app, website, or by emailing <a href="mailto:support@aajao.in" className="text-rose-900 hover:text-rose-900 underline">support@ourplatform.in</a>.</p>
          <p className="text-gray-700">Our team is available 24/7 and support is provided in multiple Indian languages including Hindi, Tamil, Bengali, and Telugu.</p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...fadeIn}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation Policy – India</h1>
          <p className="text-gray-600">Effective as of September 2025</p>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            This Cancellation Policy outlines the terms under which guests and hosts in India may cancel reservations and receive refunds. It is designed to protect both parties and ensure fairness and transparency.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-gray-500">
            For more details on host-specific terms, refer to our{' '}
            <a href="/terms" className="text-rose-600 hover:text-rose-900 underline">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cancel;
