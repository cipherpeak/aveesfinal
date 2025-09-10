import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import user from "../../assets/pngwing.com.png";

export default function Testimonials() {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [showAllText, setShowAllText] = useState({});

  // Refs and controls for animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const toggleReadMore = (id) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleShowAllText = (id) => {
    setShowAllText(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const testimonials = [
    {
      id: 1,
      quote: "The meals was quite big with lots of side dishes. Rice you can add more according to needs. Overall really well done. Everything was prepared really well. Natholy fry was crispy, was nice. Nice air conditioning, and nice seating areas. Can accommodate lots of people. Lots of parking.",
      author: "Denzil Varghese",
      role: "Customer",
      location: "Kerala, India",
      image: user,
      rating: 5,
    },
    {
      id: 2,
      quote: "Good place and location. The banana fry had got some essence flavour. Coffee is just ok. Service was slow. This was felt by at least 4-5 families there. Probably they were tired after much service. The staff are not experienced. They keep forgetting orders and lacked continuity. This made the dining experience less than what we hoped.",
      author: "Rev T",
      role: "Customer",
      location: "India",
      image: user,
      rating: 5,
    },
    {
      id: 3,
      quote: "Good food and good atmosphere... It's like very good ambiance... We tried appam and curry... Food was very tasty and delicious.. good parking spaces and good toilet facilities.. And kids friendly.. Available good buffet area... Recommend for to all",
      author: "Creative Pirates",
      role: "Customer",
      location: "India",
      image: user,
      rating: 5,
    },
  ];

  const impactStats = [
    { number: "500+", label: "Distributors" },
    { number: "3", label: "Restaurants" },
    { number: "50+", label: "Farmers" },
    { number: "10,000+", label: "Happy Guests" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.5, ease: "easeIn" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.4 }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 md:mb-12 lg:mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3 md:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base md:text-lg">
            Hear from our valued customers about their experiences with our products and services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-3xl p-5 md:p-6 border border-red-100 transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24 bg-red-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-red-100 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-red-100 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-red-600 rounded-full p-1">
                      <FaQuoteLeft className="text-white text-xs" />
                    </div>
                  </motion.div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-red-600 text-xs md:text-sm">{testimonial.role}</p>
                    <p className="text-red-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                <div className="mb-3 md:mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <FaStar className="w-3 h-3 md:w-4 md:h-4" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <blockquote className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {testimonial.quote.length > 120 && !showAllText[testimonial.id] 
                      ? `${testimonial.quote.substring(0, 120)}...` 
                      : testimonial.quote
                    }
                  </blockquote>
                  
                  {testimonial.quote.length > 120 && (
                    <motion.button 
                      onClick={() => toggleShowAllText(testimonial.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 flex items-center"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {showAllText[testimonial.id] ? (
                        <>
                          Read Less <FaChevronUp className="ml-1" />
                        </>
                      ) : (
                        <>
                          Read More <FaChevronDown className="ml-1" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

                {expandedTestimonials[testimonial.id] && (
                  <motion.div 
                    className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-black text-sm md:text-base">
                        Detailed Review
                      </h5>
                      <motion.button 
                        onClick={() => toggleReadMore(testimonial.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                    <p className="text-sm text-red-600">{testimonial.quote}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-8 border border-red-100"
          variants={titleVariants}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black mb-6 md:mb-8">
            Our Impact
          </h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
          >
            {impactStats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statItemVariants}
                className="text-center p-4 md:p-5 bg-red-50 rounded-2xl border border-red-100"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-black font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}