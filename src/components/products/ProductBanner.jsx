import React from 'react'

function ProductBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:m-5 m-2 ">
      <div 
        className="absolute inset-0 w-full lg:h-[50rem] h-[28rem] bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(https://res.cloudinary.com/dkzvu1c4j/image/upload/v1757493083/1640X922.63_icz2vn.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
    </section>  )
}

export default ProductBanner