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

export default function SupportGroup() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center justify-center py-24 px-6"> 
      
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

        /* Gradient Text Specific Styles */
        .gradient-text {
            background: linear-gradient(to right, #a770ef, #cf8bf3, #f5d020); /* A nice vibrant gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent; /* Fallback for non-webkit browsers */
        }
      `}</style>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <div className="wavy-gradient-bg absolute inset-0 z-0 opacity-80"></div>

      <motion.div
        className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl relative z-10 text-center max-w-2xl w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg gradient-text"
        >
          🤝 Support & Community
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
            Welcome to the Ineffable HUB community! Connect with fellow enthusiasts, get support, share your setups, and stay updated with the latest news and features.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl font-semibold mt-8" variants={itemVariants}>
            Join us on Telegram:
          </motion.p>

          <motion.div
            className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-5 rounded-2xl p-6 shadow-inner mx-auto max-w-md"
            variants={itemVariants}
          >
            <motion.ul className="space-y-4 list-none p-0">
              <motion.li variants={itemVariants}>
                <motion.a
                  href="https://t.me/ineffablehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-650 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95" // Changed rounded-lg to rounded-full
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  Official Channel (@ineffablehub)
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="https://t.me/flexify_discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-650 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95" // Changed rounded-lg to rounded-full
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  Discussion Group (@flexify_discussion)
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="https://t.me/ineffabletg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-650 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95" // Changed rounded-lg to rounded-full
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Developer Profile (@ineffabletg)
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base mt-6" variants={itemVariants}>
            We're here to help you get the most out of Ineffable HUB!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}