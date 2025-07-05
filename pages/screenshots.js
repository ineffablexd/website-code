import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] } },
};

const viewMoreVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

// Variants for the full-screen modal
const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const imageModalVariants = {
  hidden: { scale: 0.8, opacity: 0.8 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { scale: 0.8, opacity: 0.8, transition: { duration: 0.2 } },
};

// --- Data for Screenshot Sections ---
const sections = [
  {
    title: "📱 App UI Screenshots",
    folder: "/images/App",
    count: 19,
    prefix: "preview",
  },
  {
    title: "🌀 Depth Wallpapers",
    folder: "/images/depth",
    count: 52,
    prefix: "depth",
  },
  {
    title: "🎞️ Wallpaper Previews",
    folder: "/images/wall",
    count: 8,
    prefix: "walls",
  },
];

export default function Screenshots() {
  const [showAllState, setShowAllState] = useState(() => {
    const initialState = {};
    sections.forEach(section => {
      initialState[section.title] = false;
    });
    return initialState;
  });

  // State for the full-screen image viewer
  const [fullScreenImage, setFullScreenImage] = useState(null); // { src: string, alt: string }

  // Effect to handle body scroll lock when modal is open
  useEffect(() => {
    if (fullScreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [fullScreenImage]);

  const handleViewMore = (sectionTitle) => {
    setShowAllState(prevState => ({
      ...prevState,
      [sectionTitle]: true,
    }));
  };

  const handleImageClick = (src, alt) => {
    setFullScreenImage({ src, alt });
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    // Increased pt-24 to pt-32 for more distance from the top
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center py-16 px-6 pt-32">
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
      `}</style>

      {/* --- Wavy Gradient Background Element --- */}
      <div className="wavy-gradient-bg absolute inset-0 z-0 opacity-80"></div>

      {/* --- Main Content Container (relative to the background) --- */}
      <motion.div
        // Changed space-y-16 to space-y-8 to reduce vertical spacing between sections
        className="relative z-10 w-full max-w-6xl space-y-8 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* --- Page Title --- */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg text-center"
        >
          📸 Screenshots & Previews
        </motion.h1>

        {/* --- Sections Mapping: Iterate through each screenshot category --- */}
        {sections.map(({ title, folder, count, prefix }) => {
          const isShowingAll = showAllState[title];
          const initialDisplayCount = 4;

          let imagesToRender = [];
          if (isShowingAll || count <= initialDisplayCount) {
            for (let i = 1; i <= count; i++) {
              imagesToRender.push(i);
            }
          } else {
            for (let i = 1; i <= initialDisplayCount; i++) {
              imagesToRender.push(i);
            }
          }

          const gridClassName = isShowingAll || count <= initialDisplayCount
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
            : "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center mx-auto max-w-4xl";

          return (
            <motion.div
              key={title}
              className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-4 sm:p-8 shadow-2xl w-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center"
                variants={itemVariants}
              >
                {title}
              </motion.h2>

              {/* --- Grid of Images --- */}
              <motion.div
                className={gridClassName}
                variants={containerVariants}
                initial="hidden"
                animate={isShowingAll ? "show" : undefined}
                whileInView={!isShowingAll ? "show" : undefined}
                viewport={{ once: true, amount: 0.3 }}
              >
                <AnimatePresence>
                  {imagesToRender.map((originalIndex) => {
                    const padded = originalIndex.toString().padStart(2, '0');
                    const src = `${folder}/${prefix}${originalIndex}.png`;
                    const altText = `${prefix} ${padded}`;
                    const errorSrc = `https://placehold.co/${prefix.includes('preview') ? '300x600' : prefix.includes('depth') ? '400x800' : '800x450'}/222222/888888?text=Image+${padded}`;

                    return (
                      <motion.div
                        key={src}
                        className="relative group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onClick={() => handleImageClick(src, altText)}
                      >
                        <img
                          src={src}
                          alt={altText}
                          className="rounded-2xl shadow-xl w-full h-auto object-cover transition duration-200 group-hover:shadow-2xl"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = errorSrc; }}
                        />
                        <span className="absolute top-2 right-2 text-xs sm:text-sm bg-black bg-opacity-60 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {padded}/{count.toString().padStart(2, '0')}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              {/* --- "View More" Button/Card (Conditional Rendering) --- */}
              {!isShowingAll && count > initialDisplayCount && (
                <motion.div
                  className="mt-6 sm:mt-8 flex justify-center"
                  variants={viewMoreVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.button
                    onClick={() => handleViewMore(title)}
                    className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All {count} {title.includes('App UI') ? 'Screenshots' : 'Wallpapers'}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- Full-Screen Image Viewer (Modal) --- */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 cursor-pointer"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseFullScreen}
            role="dialog"
            aria-modal="true"
            aria-label="Image full screen view"
          >
            <motion.img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              variants={imageModalVariants}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-50"
              onClick={handleCloseFullScreen}
              variants={itemVariants}
              aria-label="Close image viewer"
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}