import { motion } from 'framer-motion';

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// Utility function to darken a hex color for hover effect
const darkenColor = (hex, percent) => {
  let f = parseInt(hex.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00FF,
    B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};

export default function App() {
  // Define social media links with their respective brand colors (excluding Ko-fi)
  const socialMediaLinks = [
    { name: 'Instagram', url: 'https://instagram.com/ineffable0xd', icon: 'fab fa-instagram', color: '#E1306C' }, // Instagram Red/Pink
    { name: 'Telegram', url: 'https://t.me/ineffabletg', icon: 'fab fa-telegram-plane', color: '#0088CC' }, // Telegram Blue
    { name: 'Twitter', url: 'https://twitter.com/ineffable0xd', icon: 'fab fa-twitter', color: '#1DA1F2' }, // Twitter Blue
    { name: 'Threads', url: 'https://www.threads.net/@ineffable0xd', icon: 'fab fa-threads', color: '#333333' }, // Dark grey for Threads
  ];

  // Ko-fi specific link data
  const kofiLink = { name: 'Support Me on Ko-fi', url: 'https://ko-fi.com/ineffablexd', icon: 'fas fa-mug-hot', color: '#FF5E5B' };

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center pt-32 px-6 pb-16">
      {/* --- Gradient Background Styles --- */}
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
      `}</style>
      {/* Font Awesome for icons (updated to v6 for Threads) */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <div className="wavy-gradient-bg absolute inset-0 z-0 opacity-80"></div>

      {/* --- Main Blur Card (About Me) --- */}
      <motion.div
        className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl relative z-10 text-center max-w-2xl w-full mb-12"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        About Me
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto space-y-4 text-center text-gray-100 font-sans"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.img
            src="/images/dev.jpg"
            alt="Developer Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white border-opacity-20 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://placehold.co/128x128/333333/FFFFFF?text=Dev+Image';
            }}
          />

          <motion.p className="text-lg sm:text-xl font-bold" variants={itemVariants}>
            Greetings! I’m **Ineffable**.
          </motion.p>

          <motion.p className="text-base sm:text-lg leading-relaxed" variants={itemVariants}>
            An **Electrical Engineer** from 🇮🇳 **India**, I am deeply passionate about customization, custom ROM development, and creating innovative solutions. While my academic background is in engineering, I excel in design, software development, and automation.
          </motion.p>

          <motion.div className="text-sm sm:text-base leading-relaxed space-y-2" variants={itemVariants}>
            <p><strong>Age:</strong> 24 years old</p>
            <p><strong>Languages:</strong> Hindi, English</p>
            <p>🖤 Technophile &nbsp;&nbsp; 📱 ROM Enthusiast &nbsp;&nbsp; ✍️ Designer &nbsp;&nbsp; 🤡 Memer</p>
          </motion.div>

          <motion.p className="text-base sm:text-lg" variants={itemVariants}>
            **Connect with me!**
          </motion.p>
        </motion.div>
      </motion.div>

      {/* --- New Blur Card (Follow Me) --- */}
      <motion.div
        className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl relative z-10 text-center max-w-2xl w-full mb-12"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Follow Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {socialMediaLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{ backgroundColor: link.color }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)", backgroundColor: darkenColor(link.color, -0.1) }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon && <i className={`${link.icon} mr-3 text-xl`}></i>}
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* --- New Blur Card (Support on Ko-fi) --- */}
      <motion.div
        className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 shadow-2xl relative z-10 text-center max-w-2xl w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Support on Ko-fi
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-100 mb-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          "Your support helps fuel my passion for customization, development, and creating more innovative solutions!"
        </motion.p>

        <motion.a
          href={kofiLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          style={{ backgroundColor: kofiLink.color }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)", backgroundColor: darkenColor(kofiLink.color, -0.1) }}
          whileTap={{ scale: 0.95 }}
        >
          {kofiLink.icon && <i className={`${kofiLink.icon} mr-3 text-2xl`}></i>}
          {kofiLink.name}
        </motion.a>
      </motion.div>
    </div>
  );
}
