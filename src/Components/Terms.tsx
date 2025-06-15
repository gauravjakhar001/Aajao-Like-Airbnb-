import { FaRegHandshake, FaUserPlus, FaGlobeAsia, FaRupeeSign, FaUndo, FaGavel, FaUserSecret, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-5xl w-full"
      >
        <div className="flex items-center gap-3 mb-2 justify-center">
          <FaRegHandshake className="text-3xl text-rose-900" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-rose-600">Terms of Service – India</h1>
        </div>
        <p className="text-center text-gray-500 mb-8">Please read these terms carefully before using our platform.</p>

      
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaRegHandshake className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Acceptance of Terms</h2>
          </div>
          <p>By using AAJOO you agree to comply with
            these lerms and conditions. I you do no agree, please refrain from using the platforn</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUserPlus className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Account Registration</h2>
          </div>
          <p>Eligibility: You must be at least 10 years old to create an account. By registering, you confirm that you meet this age requirement.</p> <br />
          <p>Account Information: You agree to provide accurate and comolete information during the registration process and to keep your account information updated.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaGlobeAsia className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Booking Process</h2>
          </div>
          <p>Booking confirmation: Upon completing booking, you will receive a confirmation email. Its your responsiomly to review the bookin detalls and ensure they are accurate.</p> <br />
          <p>Payment: You agree to pay the total booking amount, Including any applicable service fees and taxes, at the time or booking</p>
        </section>

        

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUndo className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Cancellation Policy</h2>
          </div>
          <p>Cancellation Rights: Your ability to cancel a booking and any associated fees will depend on the cancellation policy set by the host. It is your responsibility to review the host's cancellation policy before booking. </p>
            <br />
          <p>Refunds: Refunds will be processed according to the host's cancellation policy. You inderstand that certain cancellation fees may apply.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaRupeeSign className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">User Conduct</h2>
          </div>
          <p>Respectful Behavior: You agree to treat hosts and their properties with respect and courtesy. Any abusive or Inappropriate behavior may result in account suspension or termination.</p> <br />
          <p>Compliance with House Rules: You agree to abide by any house rules established by the host. Failure to do so may result in cancellation of your booking without refund.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaGavel className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Liability and Indemnification</h2>
          </div>
          <p>Personal Property: You acknowledge that you are responsible for your belongings during your stay. The platform is not liable for any loss,theft ,or damage to your property.</p><br />
          <p>Indemnification: You agree to indemnify and hold harmless [Your Platform Name] from any claims,damages, losses, or expenses arising from your use of the platorm or any issues encountered during your stay.</p>
        </section>

       

       <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaEdit className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Feedback and Reviews</h2>
          </div>
          <p>Review Policy: You may leave reviews and ratings for hosts and properties after your stay. You agree that your reviews will be honest and based on your actual experiences.</p> <br />
          <p>Moderation: The platform reserves the right to moderate, edit, or remove any reviews that violate these Terms and Conditions.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaEdit className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Dispute Resolution</h2>
          </div>
          <p>Dispute Process: In the event of a dispute with a host, you agree to attempt to resolve the issue directly with the host before escalating it to Aajoo.</p> <br />
          <p>Governing Law: Any disputes arising from these terms and Conditions will be governened by the laws of [Your State/Region].</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaEdit className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Modifications to the Terms</h2>
          </div>
          <p>Right to Modify: [Your Platform Name] reserves the right to modity these Terms an Conditions at any time. You will be notified o any significant changes via email or through the platform.</p> <br />
          <p>Effective Date: The effective date of the current version of these Terms and Conditions will be provided.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUndo className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Termination of Services</h2>
          </div>
          <p>Termination Rights: [Your Platform Name] reserves the right to suspend or terminate your account for violations of these Terms and Conditions or for any fraudulent or illegal activities. </p>
            
        </section>

         <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUserSecret className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Privacy Policy</h2>
          </div>
          <p>Data Usage: By using the platrorm, you agree to the collection and use of your personal information as outlined in our Privacy Policy.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaUserSecret className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Contact Information</h2>
          </div>
          <p>For any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Information].</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FaGlobeAsia className="text-2xl text-rose-900" />
            <h2 className="text-2xl font-semibold text-rose-900">Conclusion</h2>
          </div>
          <p>These Terms and Conditions should be customised to fit the specific needs and policies of your platform. It's advisable to consult with a legal proressional to ensure complilance with local Laws and regulations.Clear and comprehensive terms will help establish trust and clarity between users and your platform, contributing to a positive user.</p>
         
        </section>

        <p className="text-sm text-gray-400 mt-8 text-center">If you have questions about these Terms, please contact us at <a href="mailto:support@aajao.in" className="text-rose-900 underline">support@aajao.in</a>.</p>
      </motion.div>
      {/* new changes */}
    </div>
  );
};

export default Terms;
