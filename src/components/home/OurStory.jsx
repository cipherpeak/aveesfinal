import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ourstorybanner from "../../assets/ourstory/1640X922.63 (02) (1).webp";
import ourstorybannerMobile from "../../assets/ourstory/PHONE BANNER 07.webp"; 

function OurStory() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 1.1 },
    visible: {
      opacity: 1, x: 0, scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: {
      opacity: 0, x: -100,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0,
      transition: { delay: 0.5, duration: 0.7, ease: "easeOut" }
    },
    exit: {
      opacity: 0, x: -100,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      opacity: 0, y: 30,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  if (!isLoaded) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-3">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </section>
    );
  }

  return (
    <motion.section 
      className="relative w-full md:p-5 p-2 h-screen flex items-center justify-center overflow-hidden group mt-3"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.05 }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div className="w-full h-full" variants={imageVariants}>
        <img
          src={isMobile ? ourstorybannerMobile : ourstorybanner}
          alt="Our Story Banner"
          className="object-cover w-full h-full rounded-3xl"
          loading="lazy"
        />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="absolute flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white"
        variants={contentVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block relative">
            Our Story
            <motion.span 
              className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 bg-red-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ amount: 0.05 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </h1>
        </motion.div>

        <motion.div 
          className={`flex flex-col items-start w-full ${
            isMobile ? 'max-w-full' : 'max-w-[90%] md:max-w-[80%] lg:max-w-[50%]'
          } mt-9 bg-black/30 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:backdrop-blur-lg border border-white/20 shadow-2xl`}
          variants={itemVariants}
          whileHover={{ 
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-left leading-relaxed">
            Founded in 1994 in the lush backwaters of Kuttanad as a small rice flour mill in Pulincunnoo, Avees has grown into a brand that spans premium food products, Puttu House restaurants, and serene resort experiences—each rooted in Kerala's rich culinary heritage and guided by a commitment to authenticity, sustainable farming, and the timeless traditions that connect land, people, and community.
          </p>

          <motion.button 
            className="relative px-6 py-2 sm:px-8 sm:py-3 bg-red-600 text-white font-semibold rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              backgroundColor: "#b91c1c",
              boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-sm sm:text-base">Know More</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default OurStory;