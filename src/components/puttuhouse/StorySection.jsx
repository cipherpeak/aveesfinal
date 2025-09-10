const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="mb-2">
              <span className="text-red-600 font-medium tracking-wide uppercase text-sm">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              More Than a Meal,
              <span className="block text-red-600">It's a Memory</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Puttu House was born from a simple desire to share the authentic breakfasts of our childhoods—the taste of puttu and kadala that our grandmothers made with love and tradition. Every grain tells a story, every spice carries the soul of a Malabar home kitchen. We're not just serving food; we're serving memories, one steaming plate at a time.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span>Est. 2020</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span>Family Recipe</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span>Authentic Taste</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-red-600 rounded-xl z-0"></div>
              <img 
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg"
                alt="Traditional Malabar kitchen scene" 
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;