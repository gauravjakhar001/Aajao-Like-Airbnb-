import { FaUserPlus, FaClipboardCheck, FaBalanceScale, FaShieldAlt, FaBan, FaGavel } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Agreements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-5xl w-full"
      >
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-rose-600">
          Host Responsibilities and Agreements – India
        </h1>
        <p className="text-center text-gray-500 mb-8">Effective as of September 2025</p>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUserPlus className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">1. Becoming a Host</h2>
          </div>
          <p>To become a host, you must be at least 18 years old and provide valid identification. You agree to provide accurate information about your listing, availability, pricing, and policies.</p>
          <p className="mt-2 text-sm text-gray-600">All properties listed must comply with Indian local zoning regulations, safety standards, and applicable licenses (e.g., homestay approvals, GST registration if applicable).</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaClipboardCheck className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">2. Host Responsibilities</h2>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ensure the space or service is safe, clean, and accurately described.</li>
            <li>Communicate promptly with guests and address their concerns.</li>
            <li>Comply with cancellation policies and respect booking commitments.</li>
            <li>Do not discriminate against guests on the basis of religion, caste, gender, or ethnicity in accordance with Indian anti-discrimination laws.</li>
            <li>Ensure check-in and check-out experiences are smooth and professional.</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaBalanceScale className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">3. Taxes and Legal Compliance</h2>
          </div>
          <p>As a host in India, you are solely responsible for determining and fulfilling your tax obligations, including GST if your earnings exceed the threshold set by the Indian government. We may issue tax statements or collect applicable taxes as required by Indian law.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaShieldAlt className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">4. Insurance and Liability</h2>
          </div>
          <p>We strongly encourage hosts to obtain appropriate insurance coverage for their property and activities. You are liable for any injuries, damages, or legal issues that arise during a guest's stay or participation in your experience unless explicitly covered by a separate agreement or platform protection policy.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaBan className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">5. Removal or Suspension</h2>
          </div>
          <p>We reserve the right to suspend or permanently remove a host listing if it violates our community guidelines, receives repeated complaints, or fails to meet minimum standards of hospitality or safety.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaGavel className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">6. Governing Law and Jurisdiction</h2>
          </div>
          <p>These agreements are governed by the laws of the Republic of India. Any disputes will be handled by courts in New Delhi unless otherwise agreed in writing.</p>
        </section>

        <p className="text-sm text-gray-400 mt-8 text-center">
          For any questions or legal clarifications, contact us at
          <a href="mailto:legal@aajao.in" className="text-rose-900 underline ml-1">legal@aajao.in</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default Agreements;
