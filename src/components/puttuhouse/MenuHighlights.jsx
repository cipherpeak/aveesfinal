import { useState } from "react";
import puttuimage from "../../assets/foods/RAH03819-min.JPG"
import biriyani from "../../assets/foods/RAH03836-min.JPG"
import duckMappas from "../../assets/foods/RAH03857-min.JPG"
const dishes = [
  {
    id: 1,
    name: "Classic Puttu",
    image: puttuimage,
    description: "Our signature steamed rice cake served with perfectly spiced black chickpea curry—a breakfast that feels like home.",
    badge: "Best Seller",
    type: "veg"
  },
  {
    id: 2,
    name: "Palappam",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295346/appam_qcwg9f.jpg",
    description: "Soft, fermented rice hoppers with delicate lacy edges, perfect for scooping up rich stews and curries.",
    type: "non-veg"
  },
  {
    id: 3,
    name: "Duck Mappas",
    image: duckMappas,
    description: "Tender duck pieces in aromatic coconut curry, rich with traditional spices that tell stories of coastal kitchens.",
    badge: "Chef's Pick",
    type: "non-veg"
  },
  {
    id: 4,
    name: "Beef Fry",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295362/food7_xmup1n.jpg",
    description: "Dark, well-spiced beef pieces cooked to perfection, a beloved favorite that brings warmth to every bite.",
    type: "non-veg"
  }
];

const MenuHighlights = () => {
  const [hoveredDish, setHoveredDish] = useState(null);

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            From Our Home
            <span className="block text-black">to Your Plate</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Each dish carries the essence of our grandmother's recipes, prepared with love and served with pride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative mb-5 overflow-hidden rounded-lg">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Veg/Non-Veg Badge */}
                  <div className={`absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center ${
                    dish.type === "veg" ? "bg-green-500" : "bg-red-600"
                  }`}>
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                  </div>
                  
                  {dish.badge && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {dish.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-black leading-tight">
                      {dish.name}
                    </h3>
                    {/* Veg/Non-Veg Text Indicator */}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      dish.type === "veg" 
                        ? "text-green-700 bg-green-100" 
                        : "text-red-700 bg-red-100"
                    }`}>
                      {dish.type === "veg" ? "VEG" : "NON-VEG"}
                    </span>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    hoveredDish === dish.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-red-600  text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;