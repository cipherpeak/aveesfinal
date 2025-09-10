const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:m-5 m-2">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile Image */}
        <div 
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
        
        {/* Desktop Image */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
          Arayacherril Varkey & Sons
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90 font-light">
          Pvt. Ltd. (Avees)
        </p>
        <div className="bg-heritage-gold/20 backdrop-blur-sm border border-heritage-gold/30 rounded-lg p-4 md:p-6 inline-block max-w-full mx-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-heritage-gold leading-snug">
            "Below sea level. Above expectations."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;