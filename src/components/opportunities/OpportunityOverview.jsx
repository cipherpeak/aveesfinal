import { Building2, Truck, Globe, Handshake, CheckCircle, TrendingUp, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const OpportunityOverview = () => {
  const opportunities = [
    {
      icon: Building2,
      title: 'Franchise',
      description: 'Operate a proven business model with our brand power and comprehensive support system.',
      color: 'text-red-600'
    },
    {
      icon: Truck,
      title: 'Distribution',
      description: 'Become a certified distributor and bring Avees products to your market with exclusive benefits.',
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'Export',
      description: 'Partner with us to supply Avees quality to international markets.',
      color: 'text-red-600'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with us on innovative projects and mutual growth initiatives.',
      color: 'text-red-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      text: 'Proven Business Model'
    },
    {
      icon: TrendingUp,
      text: 'Comprehensive Training & Marketing Support'
    },
    {
      icon: Award,
      text: 'High-Quality Products/Services'
    },
    {
      icon: Users,
      text: 'Strong Brand Recognition'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="overview" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Partnership for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the opportunity that aligns with your vision and expertise
          </p>
        </div>

        {/* Opportunities Grid with Framer Motion animations */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full border border-red-600 mb-4">
                    <IconComponent className={`h-8 w-8 ${opportunity.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Avees Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Avees?
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 p-2 rounded-full border border-red-600 transition-colors duration-200">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295652/Brainstorming_of_Diverse_Team_Corporate_Coworkers_Collaborating_on_a_Project_in_a_Modern_Office___Premium_AI-generated_image_mdn9mj.jpg"
              alt="Professional team collaboration"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-200/30 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};