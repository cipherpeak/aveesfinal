import { useRef, useState } from "react";
import { 
  Leaf, 
  Apple, 
  Carrot, 
  Flower2, 
  Droplets, 
  Recycle, 
  Shield, 
  RotateCcw,
  GraduationCap,
  Briefcase,
  Users,
  X
} from "lucide-react";
import { Button } from "@heroui/button";
import { motion, useInView } from "framer-motion";

const Agriculture = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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

  const crops = [
    {
      title: "Mango",
      description: "Traditional Kuttanad mango orchards producing sweet, aromatic fruits using time-tested cultivation methods.",
      icon: <Apple className="w-8 h-8" />
    },
    {
      title: "Papaya",
      description: "Grown sustainably and organically, our papayas are rich in nutrients and free from harmful chemicals.",
      icon: <Carrot className="w-8 h-8" />
    },
    {
      title: "Mushrooms",
      description: "Locally cultivated specialty varieties grown in controlled environments for optimal quality and flavor.",
      icon: <Flower2 className="w-8 h-8" />
    },
    {
      title: "Hydroponics",
      description: "Modern farming technique producing chemical-free vegetables using water-based nutrient solutions.",
      icon: <Droplets className="w-8 h-8" />
    }
  ];

  const practices = [
    {
      title: "Reuse of Resources",
      description: "Water and organic waste are recycled back into farming, creating a closed-loop system that minimizes environmental impact.",
      icon: <Recycle className="w-full h-full" />
    },
    {
      title: "Clean Processing",
      description: "Minimal chemical use combined with advanced processing techniques ensures the highest quality produce.",
      icon: <Shield className="w-full h-full" />
    },
    {
      title: "Circular Farming",
      description: "Waste becomes resource in our sustainable approach, promoting environmental health and long-term viability.",
      icon: <RotateCcw className="w-full h-full" />
    }
  ];

  const youthPrograms = [
    {
      title: "Training Programs",
      description: "Comprehensive courses on sustainable farming practices and modern agricultural technologies.",
      icon: <GraduationCap className="w-full h-full" />
    },
    {
      title: "Internship Opportunities",
      description: "Hands-on experience working alongside experts in real farming environments.",
      icon: <Briefcase className="w-full h-full" />
    },
    {
      title: "Workshops",
      description: "Interactive sessions on hydroponics, sustainability, and the future of agriculture.",
      icon: <Users className="w-full h-full" />
    }
  ];


  // CropCard component
  const CropCard = ({ title, description, icon, className = "" }) => {
    return (
      <div className={`bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
        <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto text-red-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  };

  // PracticeCard component
  const PracticeCard = ({ title, description, icon, className = "" }) => {
    return (
      <div className={`bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
        <div className="w-16 h-16 mx-auto border border-red-600 mb-6 text-red-600 rounded-full flex items-center justify-center p-4">
          {icon}
        </div>        

        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  };

  // ContactModal component
  const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center">
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" onClick={onClose}></div>
          
          <div className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-xl transform transition-all">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-6">Get in touch to learn more about our agricultural initiatives</p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section  
        className="relative h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] flex items-center justify-center bg-cover bg-center m-2 md:m-5 bg-no-repeat rounded-3xl overflow-hidden"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294715/image4_hkhrwo.png)` }}
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
                Where Kuttanad's Soil
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-white to-white bg-clip-text text-transparent">
                Meets Tomorrow's Food
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Sustainable farming practices rooted in tradition, powered by innovation
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Leaf className="w-5 h-5 mr-2 inline" />
                Discover Our Future
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Crops Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Crops
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From traditional cultivation to modern hydroponics, we grow quality produce with care and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crops.map((crop, index) => (
              <CropCard
                key={crop.title}
                title={crop.title}
                description={crop.description}
                icon={crop.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Practices Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Innovation Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sustainable methods that protect our environment while maximizing productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <PracticeCard
                key={practice.title}
                title={practice.title}
                description={practice.description}
                icon={practice.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Youth Empowerment Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Youth Empowerment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engaging the next generation in sustainable agriculture and modern farming technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youthPrograms.map((program, index) => (
              <div 
                key={program.title}
                className="bg-red-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 text-red-600">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Shape the Future?
              </h3>
              <p className="text-xl text-red-100 italic mb-8 leading-relaxed">
                Join us in creating a sustainable agricultural ecosystem that benefits both our community and the environment
              </p>

              <motion.div 
                ref={buttonRef}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  size="lg"
                  className="px-8 py-4 border-2 border-white bg-transparent rounded-md text-white font-semibold hover:bg-white hover:text-red-700 transition-all text-lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Join Our Agri-Future
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
          </div>
        </div>
      </section>



      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Agriculture;