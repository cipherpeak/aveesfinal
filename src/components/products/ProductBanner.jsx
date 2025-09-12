import React from 'react';

function ProductBanner() {
  // Image URLs for different devices
  const desktopImage = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1757493083/1640X922.63_icz2vn.webp";
  const mobileImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"; // Example mobile image

  return (
<section className="relative h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] flex items-center justify-center overflow-hidden md:m-5 m-2">
  {/* Desktop Image */}
  <img
    src={desktopImage}
    alt="Product Banner"
    className="hidden md:block w-full h-full lg:object-cover md:object-contain rounded-3xl"
  />

  {/* Mobile Image */}
  <img
    src={mobileImage}
    alt="Product Banner"
    className="md:hidden w-full h-full object-cover rounded-3xl"
  />

  {/* Optional overlay */}
  <div className="absolute inset-0 bg-gradient-hero opacity-75 rounded-3xl"></div>
</section>




  );
}

export default ProductBanner;