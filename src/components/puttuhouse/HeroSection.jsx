import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2, duration: 0.6 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden md:m-5 m-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.01 : 0.05 }}
      variants={containerVariants}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile Background */}
        <motion.div 
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url("https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/DSC02099_nk5car.jpg")` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-warm-wood/40 rounded-3xl"></div>
        </motion.div>
        
        {/* Desktop Background */}
        <motion.div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url("https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/DSC02099_nk5car.jpg")` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-warm-wood/40 rounded-3xl"></div>
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center text-center px-4 w-full"
        variants={textVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-white font-bold tracking-tight text-balance leading-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       drop-shadow-2xl mb-4 md:mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent block">
              Where the Flour
            </span>
            <span className="bg-gradient-to-r from-red-600 via-white to-white bg-clip-text text-transparent block mt-2 md:mt-4">
              Meets the Plate
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-2 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Discover the beauty and heritage of Kerala's backwaters, where tradition meets innovation
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 md:mt-10"
            variants={buttonVariants}
          >
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-base sm:text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Explore Our Products
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative steam effect - Hidden on mobile */}
      <motion.div 
        className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-30"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-2 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="w-1 h-16 bg-white/30 rounded-full ml-3 -mt-16 animate-pulse delay-300"></div>
        <div className="w-1.5 h-12 bg-white/25 rounded-full ml-6 -mt-12 animate-pulse delay-700"></div>
      </motion.div>

      {/* Floating elements - Reduced on mobile */}
      <motion.div
        className="hidden md:block absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="hidden md:block absolute top-1/3 right-10 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
    </motion.section>
  );
};

export default HeroSection;