import React from 'react';

function ProductBanner() {
  // Image URLs for different devices
  const desktopImage = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1757493083/1640X922.63_icz2vn.webp";
  const mobileImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"; // Example mobile image

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:m-5 m-2">
      {/* Desktop Background Image */}
      <div 
        className="hidden md:block absolute inset-0 w-full lg:h-[50rem] h-[28rem] bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(${desktopImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Mobile Background Image */}
      <div 
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
    </section>
  );
}

export default ProductBanner;