import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { TreePine, Heart, Calendar, Star, ChevronRight } from "lucide-react";
import BookingModal from "../../components/resort/BookingModal";

const Resort = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true, amount: 0.5 });


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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section  
        className="relative h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] flex items-center justify-center bg-cover bg-center m-2 md:m-5 bg-no-repeat rounded-3xl overflow-hidden"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="absolute lg:mt-0 mt-28 inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8"
          variants={textVariants}
        >
          <div className="max-w-4xl">
            <motion.h1
              className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Where the Flour
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-white to-white bg-clip-text text-transparent">
                Meets the Plate
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Discover the beauty and heritage of Kerala's backwaters, where tradition meets innovation
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Explore Our Products
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Welcome to Avees Resort
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Nestled in the heart of Kuttanad, Avees Resort offers the perfect getaway where 
          guests can experience authentic heritage, pristine nature, and warm Kerala hospitality. 
          Discover the timeless beauty of God's Own Country while enjoying modern comfort 
          in our traditional riverside retreat.
        </p>
      </section>

      {/* Resort Highlights */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Experience Avees Resort
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heritage Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Heritage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Experience traditional Kerala architecture and immerse yourself in the rich 
                  local culture that has been preserved for generations.
                </p>
              </CardBody>
            </Card>

            {/* Nature Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto">
                  <TreePine className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nature</h3>
                <p className="text-gray-700 leading-relaxed">
                  Relax by the serene riverside, enjoy lush landscapes, and discover 
                  the incredible bird life in this pristine natural paradise.
                </p>
              </CardBody>
            </Card>

            {/* Events Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Events</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfect venue for weddings, corporate retreats, and special gatherings 
                  with our traditional ambiance and modern facilities.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp" 
                alt="Heritage Room Interior" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp"
                alt="Riverside Nature View" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp"
                alt="Wedding Events" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp" 
                alt="Kuttanad Landscape" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 md:col-span-2">
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp"
                alt="Resort Facilities" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Updated Call to Action */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="mb-6 flex justify-center">
                <Star className="w-12 h-12 text-white" fill="currentColor" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready for your heritage getaway?
              </h3>
              <p className="text-xl text-red-100 italic mb-8 leading-relaxed">
                Book your stay at Avees Resort and create unforgettable memories in the heart of Kuttanad.
              </p>

              <motion.div 
                ref={buttonRef}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="xl"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full shadow-md"
                >
                  Book Now <ChevronRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Resort;