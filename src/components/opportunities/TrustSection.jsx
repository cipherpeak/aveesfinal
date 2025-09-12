import { Shield, Lock, Award, Users } from 'lucide-react';

export const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Confidential Process',
      description: 'Your information is protected with industry-standard security measures'
    },
    {
      icon: Lock,
      title: 'Secure Data Handling',
      description: 'All personal and business data is encrypted and stored securely'
    },
    {
      icon: Award,
      title: 'Professional Review',
      description: 'Our expert partnership team carefully evaluates each application'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal guidance throughout the entire partnership process'
    }
  ];

  // Custom Card component
  const Card = ({ children, className = "" }) => (
    <div className={`rounded-xl border bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={className}>
      {children}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Inquiry is Confidential
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We value your interest and assure you that all information shared will be treated 
            with the strictest confidentiality and used solely to evaluate a potential partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="text-center border-none shadow-md bg-white backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full border border-red-600 mb-4">
                    <IconComponent className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};