import { Eye, Zap, Heart, Lightbulb, Leaf, Users } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center text-3xl transition-all duration-300">
                <Eye className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To shape the future of authentic Kerala cuisine by bringing the
                  timeless taste of Kuttanad to the world, while serving as a model
                  of sustainable agri-business that honors tradition and embraces
                  innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center text-3xl transition-all duration-300">
                <Zap className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To blend traditional culinary wisdom with modern innovation,
                  creating authentic and convenient food experiences while
                  empowering our community, supporting local farmers, and nurturing
                  the land that sustains us all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Our Core Values
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center mx-auto mb-4 text-3xl transition-all duration-300 group-hover:scale-110">
              <Heart className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Authenticity
            </h4>
            <p className="text-muted-foreground">
              Rooted in Kuttanad's heritage
            </p>
          </div>

          <div className="text-center group">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center mx-auto mb-4 text-3xl transition-all duration-300 group-hover:scale-110">
              <Lightbulb className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Innovation
            </h4>
            <p className="text-muted-foreground">Tradition meets technology</p>
          </div>

          <div className="text-center group">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center mx-auto mb-4 text-3xl transition-all duration-300 group-hover:scale-110">
              <Leaf className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Sustainability
            </h4>
            <p className="text-muted-foreground">
              Sustainably grown, thoughtfully made
            </p>
          </div>

          <div className="text-center group">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-red-600 text-red-600 flex items-center justify-center mx-auto mb-4 text-3xl transition-all duration-300 group-hover:scale-110">
              <Users className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Community
            </h4>
            <p className="text-muted-foreground">
              Empowering youth and local economies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;