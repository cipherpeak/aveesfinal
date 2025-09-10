import { Heart, Lightbulb, Leaf, Users } from "lucide-react";

const WhatSetsUsApart = () => {
  const differentiators = [
    {
      title: "Authenticity",
      subtitle: "The Taste of Home",
      description: "Every product is crafted with locally sourced materials and traditional recipes passed down through generations, ensuring that authentic Kuttanad flavor reaches your table.",
      icon: <Heart className="h-7 w-7 md:h-8 md:w-8" />
    },
    {
      title: "Innovation",
      subtitle: "Tradition Meets Convenience",
      description: "Our state-of-the-art R&D lab and clean-label products represent the perfect marriage of traditional Kerala recipes with modern Ready-to-Cook convenience for today's busy families.",
      icon: <Lightbulb className="h-7 w-7 md:h-8 md:w-8" />
    },
    {
      title: "Sustainability",
      subtitle: "Caring for Tomorrow",
      description: "Our circular farming model featuring hydroponics, comprehensive waste minimization, and advanced water recycling systems ensures we nurture the land while producing exceptional food.",
      icon: <Leaf className="h-7 w-7 md:h-8 md:w-8" />
    },
    {
      title: "Community",
      subtitle: "Growing Together",
      description: "Through local employment opportunities, comprehensive youth training programs, and agri-entrepreneurship initiatives, we actively support and empower our farming community to thrive.",
      icon: <Users className="h-7 w-7 md:h-8 md:w-8" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Sets Avees Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four pillars of excellence that define our commitment to you, 
            our community, and the land we cherish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <div 
              key={diff.title}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110">
                  {diff.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {diff.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-heritage-brown mb-4">
                    {diff.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;