// pages/index.js (Modified for improved mobile title wrapping)
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Import your new Navbar component

// --- Framer Motion Animation Variants ---
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

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center">
      {/* --- Global Styles for Wavy Gradient Background --- */}
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

        /* Styles for the new buttons - removed hardcoded font-size */
        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 30px;
          margin: 10px;
          font-weight: bold;
          text-decoration: none;
          color: #ffffff;
          border-radius: 8px;
          transition: background-color 0.3s ease, transform 0.2s ease;
          cursor: pointer;
          border: none;
          text-align: center;
        }
        .action-button.download {
          background-color: #007bff; /* Blue */
        }
        .action-button.download:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }
        .action-button.buy {
          background-color: #28a745; /* Green */
        }
        .action-button.buy:hover {
          background-color: #1e7e34;
          transform: translateY(-2px);
        }
      `}</style>

      {/* --- Wavy Gradient Background Element --- */}
      <div className="wavy-gradient-bg absolute inset-0 z-0 opacity-80"></div>

      {/* --- Include the Navbar component here --- */}
      <Navbar />

      {/* --- Main Content Container (relative to the background) --- */}
      <motion.div
          className="relative z-10 w-full max-w-5xl space-y-16 flex flex-col items-center py-16 px-6 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* --- Welcome Section (Blur Card) --- */}
        <motion.div
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full"
          variants={cardVariants}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            // Adjusted font sizes for very small screens (text-xl)
            // Added whitespace-nowrap to prevent "HUB" from splitting, forcing it to stay with "Ineffable"
            // You might need to adjust text-xl further down to text-lg or text-base for extremely small screens
            // or if the line still overflows on smallest phones.
            className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            ✨ Welcome to Ineffable&nbsp;HUB ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed"
          >
            The Ultimate Android Personalization Suite<br />Built with <span className="text-red-400">❤️</span> using Flutter – Make your device truly yours.
          </motion.p>
        </motion.div>

        {/* --- What is Ineffable Hub? Section (Blur Card) --- */}
        <motion.section
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-5" variants={itemVariants}>
            📱 What is Ineffable Hub?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-100 leading-relaxed" variants={itemVariants}>
            Ineffable Hub is an all-in-one Android personalization toolkit designed for both casual users and deep customizers.
            Crafted with Flutter, it blends aesthetic design, powerful features, and a fluid UI to give you complete control over your Android experience.
          </motion.p>
        </motion.section>

        {/* --- Features at a Glance Section (Blur Card with staggered list items) --- */}
        <motion.section
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl max-w-4xl w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center" variants={itemVariants}>
            🌟 Features at a Glance
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-left max-w-2xl mx-auto text-gray-100 space-y-3 pl-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>✨ A Visual Feast:</strong> Explore **4100+ stunning wallpapers** and **250+ captivating live wallpapers**. You can even turn your own videos or GIFs into dynamic lockscreen and homescreen masterpieces!
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🌀 Depth Wallpapers:</strong> Inspired by iOS & HyperOS – get **107 unique depth wallpapers** to add a cool, layered clock right to your Home screen.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🖼️ PFP Paradise:</strong> Discover **1100 delightful profile pictures** across every aesthetic imaginable. Find the perfect avatar to express yourself online!
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🔤 Font Freedom:</strong> Elevate your text game with **685 fabulous fonts**. Our **Font Engine (Android 10–16)** makes it a breeze to generate flashable font modules, and our **Font Repo** is a treasure trove of awesome typefaces.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>📈 Widget Wonders:</strong> Access **100+ customizable widgets** to keep your most important info stylishly at your fingertips.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🧊 Icon Perfection:</strong> Choose from **5 exquisite icon packs** – a handpicked collection of aesthetic, minimal, and material designs for every mood and theme.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>📦 Themes & Home Setups:</strong> Complete KWGT-based layouts including widgets, Home setups – ready to apply. It's instant style!
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🧰 KWGT Extractor:</strong> Unlock even more creativity by easily extracting and reusing widgets from any free or paid KWGT pack.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🎨 Iconify:</strong> Go beyond just icons! Explore pre-customized configurations with QS headers, icon theming, QS layouts, and other delightful UI refinements.
            </motion.li>
            <motion.li
              className="text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              <strong>🖌️ Beautiful UI:</strong> Navigating all these amazing features is a dream thanks to our **Material You (M3) design**, featuring smooth, intuitive transitions that feel just right.
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* --- Built With Section (Blur Card) --- */}
        <motion.section
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-5" variants={itemVariants}>
            ⚙️ Built With
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-100" variants={itemVariants}>
            <span className="font-semibold text-blue-300">🧩 Flutter</span> · <span className="font-semibold text-green-300">💡 Dart</span> · <span className="font-semibold text-purple-300">🎨 Material 3 (Material You)</span>
          </motion.p>
        </motion.section>

        {/* --- Download Options Section (Replaced Download Now Section) --- */}
        <motion.section
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-5" variants={itemVariants}>
            Get Ineffable Hub
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="https://github.com/ineffablexd/Ineffable-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button download text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Free Version
            </motion.a>
            <motion.a
              href="https://t.me/ineffabletg"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button buy text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Paid Version
            </motion.a>
          </div>
        </motion.section>

        {/* --- Join the Community Section (Blur Card with animated links) --- */}
        <motion.section
          className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-5" variants={itemVariants}>
            🌍 Join the Community
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-100 space-y-2" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.span
              className="block text-sm sm:text-base" variants={itemVariants}>
              📢 Telegram Update Channel – <motion.a
                href="https://t.me/ineffablehub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >@ineffablehub</motion.a>
            </motion.span>
            <motion.span
              className="block text-sm sm:text-base" variants={itemVariants}>
              💬 Discussion Group – <motion.a
                href="https://t.me/flexify_discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >@flexify_discussion</motion.a>
            </motion.span>
            <motion.span
              className="block text-sm sm:text-base" variants={itemVariants}>
              👨‍💻 Created By – <motion.a
                href="https://t.me/ineffabletg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >@ineffabletg</motion.a>
            </motion.span>
          </motion.p>
        </motion.section>
      </motion.div>
    </div>
  );
}