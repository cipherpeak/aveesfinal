import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Classic Puttu ",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295359/food2_kbqhpe.jpg",
    description: "Our signature steamed rice cake served with perfectly spiced black chickpea curry—a breakfast that feels like home.",
    badge: "Best Seller",
    price: "₹80"
  },
  {
    id: 2,
    name: "Palappam",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295346/appam_qcwg9f.jpg",
    description: "Soft, fermented rice hoppers with delicate lacy edges, perfect for scooping up rich stews and curries.",
    price: "₹60"
  },
  {
    id: 3,
    name: "Duck Mappas",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295348/food13_aiylmj.jpg",
    description: "Tender duck pieces in aromatic coconut curry, rich with traditional spices that tell stories of coastal kitchens.",
    badge: "Chef's Pick",
    price: "₹280"
  },
  {
    id: 4,
    name: "Beef Fry",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295362/food7_xmup1n.jpg",
    description: "Dark, well-spiced beef pieces cooked to perfection, a beloved favorite that brings warmth to every bite.",
    price: "₹220"
  }
];

const MenuHighlights = () => {
  const [hoveredDish, setHoveredDish] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-medium tracking-wide uppercase text-sm block mb-3">
            Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            From Our Home
            <span className="block text-red-600">to Your Plate</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Each dish carries the essence of our grandmother's recipes, prepared with love and served with pride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
                    {dish.price && (
                      <span className="text-red-600 font-bold text-lg whitespace-nowrap pl-2">
                        {dish.price}
                      </span>
                    )}
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
      </div>
    </section>
  );
};

export default MenuHighlights;