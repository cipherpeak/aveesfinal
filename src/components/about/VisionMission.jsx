import { Eye, Zap, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionMission = () => {
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true, amount: 0.5 });
  
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <Eye className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To shape the future of authentic Kerala cuisine by bringing the
                  timeless taste of Kuttanad to the world, while serving as a model
                  of sustainable agri business that honors tradition and embraces
                  innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <Zap className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To blend traditional culinary wisdom with modern innovation,
                  creating authentic and convenient food experiences while
                  empowering our community, supporting local farmers, and nurturing
                  the land that sustains us all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* See Level Above Expectation Section */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-800  rounded-3xl p-10 md:p-16 overflow-hidden">
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
              Below sea level. Above expectation
            </h3>
            <p className="text-xl text-red-100 italic mb-8 leading-relaxed">
              From the heart of Kuttanad’s backwaters, we craft authentic Kerala flavors rooted in tradition and elevated by passion, delivering quality that goes beyond expectations
            </p>

            <motion.div 
              ref={buttonRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition-all">
                Explore Products
              </button>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;