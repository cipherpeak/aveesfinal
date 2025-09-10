import { MapPin, ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <span className="text-white font-medium tracking-wide uppercase text-sm block mb-3">
          Visit Us Today
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          A Table is Waiting.
          <span className="block text-red-400">Your Story is Next.</span>
        </h2>
        
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Come, experience the tradition. Let us serve you memories that will last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 inline-flex items-center group">
            <MapPin className="w-5 h-5 mr-2" />
            Find a Location
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Call Us Now
          </button>
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 text-gray-200 text-sm">
          <p>For reservations and inquiries:</p>
          <p className="text-white font-medium text-lg mt-1">+91 98765 43210</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default FinalCTA;