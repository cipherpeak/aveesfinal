import React from "react";
import { motion } from "framer-motion";
import one from "../../assets/107302170.webp";
import two from "../../assets/Swiggy-Instamart-Photoroom.avif";
import three from "../../assets/logo/Avees logo red.png";
import four from "../../assets/swiggy_instamart-Photoroom_1.avif";

function WhereItBuy() {
  const retailers = [
    {
      name: "Zepto",
      logo: three,
      url: "#",
    },
    {
      name: "Flipkart",
      logo: two,
      url: "#",
    },
    {
      name: "Amazon",
      logo: one,
      url: "#",
    },
    {
      name: "Swiggy Instamart",
      logo: four,
      url: "#",
    },
    {
      name: "Zepto",
      logo: three,
      url: "#",
    },
    {
      name: "Flipkart",
      logo: two,
      url: "#",
    },
    {
      name: "Amazon",
      logo: one,
      url: "#",
    },
    {
      name: "Swiggy Instamart",
      logo: four,
      url: "#",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for each retailer item
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full py-8 md:py-20 bg-background flex items-center justify-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Where To Buy
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Available at these trusted retailers. Click to shop directly.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Infinite scrolling container */}
          <motion.div 
            className="flex animate-infinite-scroll space-x-6 md:space-x-12"
            variants={containerVariants}
          >
            {retailers.map((retailer, index) => (
              <motion.a
                key={index}
                href={retailer.url}
                className="flex-shrink-0 transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 rounded-xl p-4 md:p-6 bg-white"
                aria-label={`Buy from ${retailer.name}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={retailer.logo || "/placeholder.svg"}
                  alt={`${retailer.name} logo`}
                  className="h-20 w-32 sm:h-16 sm:w-24 md:h-24 md:w-40 lg:h-32 lg:w-48 object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          display: flex;
          animation: infinite-scroll 30s linear infinite;
          width: max-content;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-infinite-scroll {
            animation-duration: 20s;
          }
        }
        
        @media (max-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default WhereItBuy;