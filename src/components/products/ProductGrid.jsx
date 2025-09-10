import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Stagger the appearance of each card
    }
  }
};

// Animation variants for individual cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function ProductGrid({ categories, activeCategory, filteredProducts, setActiveCategory }) {
  return (
    <section>
      <div
        id="products-title"
        className="transition-all duration-1000 text-center mb-10 opacity-100 translate-y-0"
      >
        <h2 className="text-3xl font-bold mb-2">Our Products</h2>
        <p className="text-gray-600">
          Explore our coconut-forward, clean-label range—from authentic rice flours and instant
          batters to ready-to-cook staples and snacks.
        </p>
      </div>

      <div
        id="products-tabs"
        className="flex gap-3 mb-10 flex-wrap justify-center transition-all duration-1000 opacity-100 translate-y-0"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "border border-red-600 text-red-600 hover:bg-red-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid with Framer Motion animations */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="border-t border-gray-100 pt-4">
                  <button className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                    Where to Buy
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}

export default ProductGrid;