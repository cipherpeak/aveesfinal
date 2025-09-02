import React from 'react';
import { motion } from 'framer-motion';
import products from "../../assets/productsBanner/BANNER 1640X923.23.jpg";

function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 300, // Start from right
      scale: 1.2 
    },
    visible: {
      opacity: 1,
      x: 0, // Move to center
      scale: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -300, 
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  return (
      <motion.section 
        className="relative  flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.05 }} 
        variants={containerVariants}
      >
        <motion.div
          className="w-full h-full"
          variants={imageVariants}
        >
          <img 
            src={products} 
            alt="Products Banner" 
            className="object-cover w-full h-full"
            loading="lazy" 
          />
        </motion.div>
      </motion.section>
  );
}

export default Products;