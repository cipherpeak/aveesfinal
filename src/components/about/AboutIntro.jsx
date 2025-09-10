
import ourstorybanner from "../../assets/ourstory/1640X922.63 (02) (1).webp";
import ourstorybannerMobile from "../../assets/ourstory/PHONE BANNER 07.webp"; 


const AboutIntro = () => {
  return (
    <section className="py-16 md:py-2 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10 lg:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-heritage-green"></div>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed">
                From the enchanting backwaters of <span className="font-semibold text-heritage-green">Pulincunnoo, Kuttanad</span> — 
                where rice fields flourish below sea level — began a remarkable journey of tradition, 
                innovation, and unwavering commitment to authentic Kerala cuisine.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                In <span className="font-semibold text-heritage-brown">1994</span>, visionary entrepreneur <span className="font-semibold text-heritage-brown">A.V. George</span> 
                established our humble rice flour mill, driven by a passionate desire to preserve the 
                traditional culinary authenticity of Kuttanad.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Today, we stand proud as custodians of Kerala's rich gastronomic heritage while 
                embracing modern innovation to bring the authentic taste of Kuttanad to families 
                across the world.
              </p>
            </div>
          </div>
          
          {/* Image Container - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={ourstorybannerMobile} 
                  alt="Avees traditional Kuttanad cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-2xl bg-heritage-green/20"></div>
            </div>
            
            {/* Image caption */}
            <p className="text-sm text-muted-foreground italic mt-4 text-center lg:text-right">
              Our beginnings in the beautiful backwaters of Kuttanad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;