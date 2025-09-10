import { Card, CardBody } from "@heroui/card";

const FamilyLeadership = () => {
  const leaders = [
    {
      name: "A.V. George",
      role: "Founder",
      description: "The visionary who started it all, A.V. George established Avees with deep respect for Kerala's culinary culture and an unwavering commitment to preserving the authentic taste of Kuttanad for future generations.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294755/DSC02479_svynxq.jpg"
    },
    {
      name: "Suja George",
      role: "Director",
      description: "The nurturing pillar of our family business, Suja George connects our brand to the community and tradition, ensuring that every product carries the warmth and authenticity of our Kerala heritage.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294755/DSC02479_svynxq.jpg"
    },
    {
      name: "George Varkey",
      role: "Managing Director",
      description: "The modern leader steering our growth journey, George Varkey expertly balances innovation with tradition, ensuring we embrace the future while preserving the authentic essence that defines Avees.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294755/DSC02479_svynxq.jpg"
    },
    {
      name: "Jacob Varkey",
      role: "Director",
      description: "The operational excellence expert, Jacob Varkey ensures that every aspect of our production maintains the highest standards of quality, bringing precision and dedication to our traditional processes.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294755/DSC02479_svynxq.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Family Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four generations united by a shared vision, each bringing unique strengths 
            to preserve our heritage while building our future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {leaders.map((leader, index) => (
            <Card key={leader.name} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 group overflow-hidden">
              <CardBody className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 p-6 flex items-center justify-center bg-white">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-1 border-red-600 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-heritage-brown font-semibold mb-4 text-lg">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyLeadership;