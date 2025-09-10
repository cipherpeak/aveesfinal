import ourstorybannerMobile from "../../assets/ourstory/PHONE BANNER 07.webp";

const AboutIntro = () => {
  return (
    <section className="py-6  px-4 bg-background mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-wide">
                Our Story
              </h2>
              <div className="w-16 h-0.5 bg-heritage-green"></div>
            </div>

            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                From the lush backwaters of Pulincunnoo, Kuttanad. Where rice
                fields thrive below sea level. Avees began in 1994 with a simple
                mission: to preserve the authentic taste of Kerala. Founded by
                A.V. George, we started as a rice flour mill and gradually
                expanded into high quality traditional food products such as
                puttu podi, palappam podi, instant batters, and ready to cook
                mixes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                To bring our passion to life, we also launched Avees
                Puttu House, where authentic Kerala dishes are prepared with
                care and served in a warm, traditional setting. Today, we blend
                tradition and innovation to deliver the genuine flavors of
                Kuttanad to homes and tables across the world.
              </p>
            </div>
          </div>

          {/* Image Container - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] lg:aspect-square rounded-lg overflow-hidden shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet={ourstorybannerMobile} />
                  <img
                    src={ourstorybannerMobile}
                    alt="Avees traditional Kuttanad cuisine"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -z-10 top-3 -right-3 w-full h-full rounded-lg bg-heritage-green/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;