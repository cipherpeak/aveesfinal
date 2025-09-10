import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const branches = [
  {
    id: 1,
    city: "Punnapra, Alappuzha",
    subtitle: "",
    address: "Avees Puttuhouse Punnapra, Alappuzha, 688003",
    phone: "+91 98765 43210",
    email: "",
    mapUrl: "https://maps.app.goo.gl/N8NJiEYzcSCYEtVk9",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/punnapra_ngpgmb.jpg",
    description: "Our Punnapra outlet brings you the authentic taste of Alappuzha's famous puttu in the heart of this coastal town. Known for our traditional preparation methods, we serve the fluffiest puttu paired with local delicacies, capturing the true essence of Punnapra's culinary heritage.",
    step: "1 of 3",
  },
  {
    id: 2,
    city: "Onnamkara, Kuttanad",
    subtitle: "",
    address: "Avees Puttuhouse Onnamkara, Pulincunnoo, Alappuzha, 688504",
    phone: "+91 94950 41234",
    email: "",
    mapUrl: "https://maps.app.goo.gl/N8NJiEYzcSCYEtVk9",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/onnakara_srf4e6.jpg",
    description: "In the unique below-sea-level farmlands of Kuttanad, our Onnamkara outlet offers puttu made from rice grown in these very fields. Experience the authentic taste of Kerala's rice bowl, where each serving connects you directly to Kuttanad's agricultural traditions and farming culture.",
    step: "2 of 3",
  },
  {
    id: 3,
    city: "Thiruvalla, Pathanamthitta",
    subtitle: "",
    address: "Avees Puttuhouse Perumthuruthy, Thiruvalla, 689107",
    phone: "+91 90723 93690",
    email: "",
    mapUrl: "https://maps.app.goo.gl/Ptwfon6ctabJDF3K7",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294756/thiruvalla_eqpscv.jpg",
    description: "At our Thiruvalla outlet, we blend traditional puttu-making with the Christian cultural influences of this historic town. Enjoy our special puttu varieties that reflect Pathanamthitta's diverse culinary traditions, served in an ambiance that honors Thiruvalla's rich heritage as a center of culture and education.",
    step: "3 of 3",
  }
];

const BranchCards = () => {
  return (
    <section className="py-16 md:py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Find Your
            <span className="block text-black">Slice of Home</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Each location tells its own story while serving the same love-filled dishes you remember.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image - Full width */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={branch.image}
                  alt={`${branch.city} branch`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {branch.step}
                </div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {branch.city}
                  </h3>
                  <p className="text-red-600 text-sm">
                    {branch.subtitle}
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
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                </div>
{/* 
                <div className="pt-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {branch.description}
                  </p>
                </div> */}

                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-white border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 mt-4"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchCards;