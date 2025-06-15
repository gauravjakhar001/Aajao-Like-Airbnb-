import { FaUserSecret, FaFileContract, FaCookieBite, FaGlobeAsia, FaBuilding, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Privacy = () => {
  const articles = [
    {
      icon: <FaFileContract className="text-xl text-rose-900" />,
      category: "Legal terms",
      title: "Privacy Policy",
      description: "Please review our Privacy Policy.",
      link: "/privacy"
    },
    {
      icon: <FaShieldAlt className="text-xl text-rose-900" />,
      category: "How-to",
      title: "Verifying your identity on Aajao",
      description: "At Aajao, trust is the cornerstone of our community – where millions of people across the world place trust in each other as they travel or host services, experiences or homes.",
      link: "#"
    },
    {
      icon: <FaFileContract className="text-xl text-rose-900" />,
      category: "Legal terms",
      title: "Terms of Service",
      description: "Please review our Terms of Service.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-5xl w-full"
      >
        <div className="flex items-center gap-3 mb-2 justify-center">
          <FaUserSecret className="text-3xl text-rose-900" />
          <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-rose-600">Aajao Privacy</h1>
        </div>
        <p className="text-center text-gray-500 mb-6">Our Privacy Policy explains what personal information we collect, how we use personal information, how personal information is shared, and privacy rights.</p>
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FaFileContract className="text-xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-800 underline">Privacy Policy</h2>
          </div>
          <p className="mb-2">Please review the supplemental privacy policies linked within the privacy policy documents, such as for certain Aajao services, that may be applicable to you.</p>
          <div className="flex items-center gap-2 mb-2">
            <FaFileContract className="text-xl text-rose-900" />
            <h3 className="text-lg font-semibold underline ">Supplemental Privacy Policy Documents</h3>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li className="flex items-center gap-2"><FaGlobeAsia className="text-rose-900" />Outside the United States Supplement</li>
            <li className="flex items-center gap-2"><FaGlobeAsia className="text-rose-900" />United States Privacy Supplement</li>
            <li className="flex items-center gap-2"><FaCookieBite className="text-rose-900" />Cookie Policy</li>
            <li className="flex items-center gap-2"><FaBuilding className="text-rose-900" />Enterprise Customers and Aajao for Work</li>
            <li className="flex items-center gap-2"><FaGlobeAsia className="text-rose-900" />Privacy Supplement for China Users</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 mt-3 text-rose-900 flex items-center gap-2"><FaShieldAlt className="text-xl" />Related articles</h2>
          <div className="space-y-6">
            {articles.map((article, idx) => (
              <div key={idx} className="border-t pt-6 flex gap-4 items-start">
                <div>{article.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{article.category}</p>
                  <a
                    href={article.link}
                    className="text-lg font-medium text-black hover:underline block"
                  >
                    {article.title}
                  </a>
                  <p className="text-gray-600 mt-1">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Privacy;