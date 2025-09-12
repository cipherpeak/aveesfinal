const AboutIntro = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-heritage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-heritage-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Heading Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-wide relative">
              Our Story
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-heritage-green rounded-full"></span>
            </h2>

          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 font-light">
            From the heart of Kuttanad to your home—a journey of tradition, taste, and innovation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 text-muted-foreground">
              <div className="relative pl-8 border-l-2 border-heritage-green/30">
                <div className="absolute left-0 top-0 w-2 h-2 bg-heritage-green rounded-full mt-2"></div>
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  From the lush backwaters of Pulincunnoo, Kuttanad. Where rice
                  fields thrive below sea level. Avees began in 1994 with a simple
                  mission: to preserve the authentic taste of Kerala. Founded by
                  A.V. George, we started as a rice flour mill and gradually
                  expanded into high quality traditional food products such as
                  puttu podi, palappam podi, instant batters, and ready to cook
                  mixes.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-heritage-gold/30">
                <div className="absolute left-0 top-0 w-2 h-2 bg-heritage-gold rounded-full mt-2"></div>
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  To bring our passion to life, we also launched Avees
                  Puttu House, where authentic Kerala dishes are prepared with
                  care and served in a warm, traditional setting. Today, we blend
                  tradition and innovation to deliver the genuine flavors of
                  Kuttanad to homes and tables across the world.
                </p>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-heritage-green">1994</div>
                <div className="text-sm text-muted-foreground mt-1">Established</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-heritage-gold">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Products</div>
              </div>
            </div>
          </div>

          {/* Image Container - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png"
                  alt="Avees traditional Kuttanad cuisine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;