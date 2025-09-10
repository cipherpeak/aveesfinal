import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Onnamkara",
    tagline: "Our flagship home by the highway",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg",
    address: "NH 66, Onnamkara, Palakkad",
    phone: "+91 98765 43210",
    hours: "6:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Perumthuruthy", 
    tagline: "Where tradition meets tranquility",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg",
    address: "Perumthuruthy, Malappuram",
    phone: "+91 98765 43211",
    hours: "6:30 AM - 9:30 PM"
  },
  {
    id: 3,
    name: "NH Paravoor",
    tagline: "A taste of heritage",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg",
    address: "NH Bypass, Paravoor, Ernakulam",
    phone: "+91 98765 43212", 
    hours: "6:00 AM - 10:00 PM"
  }
];

const BranchCards = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-medium tracking-wide uppercase text-sm block mb-3">
            Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Find Your
            <span className="block text-red-600">Slice of Home</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Each location tells its own story while serving the same love-filled dishes you remember.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={`${branch.name} interior`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {branch.name}
                  </h3>
                  <p className="text-red-600 text-sm">
                    {branch.tagline}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>

                <button className="w-full py-3 px-4 bg-white border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
                  <Navigation size={16} />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchCards;