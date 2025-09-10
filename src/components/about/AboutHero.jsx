
const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:m-5 m-2 ">
      <div 
        className="absolute inset-0 w-full lg:h-[50rem] h-[28rem] bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Arayacherril Varkey & Sons
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          Pvt. Ltd. (Avees)
        </p>
        <div className="bg-heritage-gold/20 backdrop-blur-sm border border-heritage-gold/30 rounded-lg p-6 inline-block">
          <p className="text-2xl md:text-3xl font-semibold text-heritage-gold">
            "Below sea level. Above expectations."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;