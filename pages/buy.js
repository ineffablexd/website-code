import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] } },
};

export default function Buy() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center justify-center py-24 px-6"> {/* Changed py-16 to py-24 */}
      
      <style jsx global>{`
        @keyframes gradient-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .wavy-gradient-bg {
            background: linear-gradient(270deg, #6a11cb, #2575fc, #cb11ab, #25fc9e);
            background-size: 400% 400%;
            animation: gradient-animation 20s ease infinite;
        }

        /* Gradient Text Specific Styles (if any, keeping for consistency) */
        .gradient-text {
            background: linear-gradient(to right, #a770ef, #cf8bf3, #f5d020); /* Example gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent; /* Fallback for non-webkit browsers */
        }
      `}</style>

      <div className="wavy-gradient-bg absolute inset-0 z-0 opacity-80"></div>

      <motion.div
        className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl relative z-10 text-center max-w-xl w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          🚀 Get Ineffable HUB <span className="gradient-text">Plus</span>
        </motion.h1>

        <motion.div
          className="space-y-6 text-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            className="text-base sm:text-lg leading-relaxed" variants={itemVariants}>
            Unlock the full potential of Ineffable HUB with the **Plus** version! Get access to all features, exclusive content, and continued updates.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl font-bold" variants={itemVariants}>
          
            <span className="block mb-2">Original Price: <span className="line-through">$4.99</span> / <span className="line-through">₹400</span></span>
            <span className="block text-green-400">Sale Price: $2.99 / ₹250</span>
            <span className="block text-sm sm:text-base font-normal mt-1">Sale ends on August 1st!</span>
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed" variants={itemVariants}>
            **For International Users:** Payments accepted via **PayPal**.
            <br />
            **For Indian Users:** Payments accepted via **Google Pay, PhonePe,** or any **UPI App**.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg font-semibold" variants={itemVariants}>
            To purchase, please contact the developer:
          </motion.p>

          <motion.div className="mt-8" variants={itemVariants}>
            <motion.a
              href="https://t.me/ineffabletg" 
              target="_blank"
              rel="noopener noreferrer"
            
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform-gpu"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Contact Developer to Buy
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}