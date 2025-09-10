import { ArrowRight } from "lucide-react";

const RetailIntegration = () => {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Love the Taste?
            <span className="block text-black">Bring it Home!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Try Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg"
                  alt="Happy customers enjoying meal"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Badge Heading */}
              <div className="flex justify-center mb-4">
                <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  Try - Puttu House
                </div>
              </div>
              <div className="text-center space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Experience the authentic flavors at our restaurant, where every meal is prepared with the same love and tradition as in our family kitchen.
                </p>
              </div>
            </div>
          </div>

          {/* Buy Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295129/Screenshot_2025-08-01_at_6.16.19_PM_rgg2q3.png"
                  alt="Avees retail products"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Badge Heading */}
              <div className="flex justify-center mb-4">
                <div className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                  Buy - Retail Outlets
                </div>
              </div>
              <div className="text-center space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Take home the same authentic flavors with our premium puttu flour, curry mixes, and chutney powders—available at all Avees retail outlets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Content */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            The same authentic taste that you loved in our restaurant is now available in our retail stores. 
            Recreate the magic in your own kitchen with our carefully crafted spice blends and ingredients.
          </p>
          {/* Centered button container */}
          <div className="flex justify-center">
            <button className="group bg-red-600 flex items-center justify-center gap-2 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:bg-red-700 shadow-md hover:shadow-lg">
              Explore Our Retail Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailIntegration;