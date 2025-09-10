import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Took my Bangalore friends here. They finally understand why I've been romanticizing about Puttu my whole life! The authenticity is unmatched.",
    author: "Anagha S.",
    location: "Kochi",
    rating: 5
  },
  {
    id: 2,
    text: "The duck mappas reminded me of my grandfather's house in Thalassery. Every bite was absolute perfection. This is what comfort food should taste like.",
    author: "Rahim K.",
    location: "Kozhikode", 
    rating: 5
  },
  {
    id: 3,
    text: "As someone who grew up eating puttu every morning, I can say this is as close to home as it gets. The kadala curry is phenomenal!",
    author: "Priya M.",
    location: "Thrissur",
    rating: 5
  },
  {
    id: 4,
    text: "My kids were hesitant to try traditional food, but now they ask for Puttu House every weekend. The palappam is their new favorite!",
    author: "Suresh R.",
    location: "Ernakulam",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-7 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Stories from
            <span className="block text-black">Our Table</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Every review tells a story of tradition, taste, and memories made around our table.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-4xl mx-auto">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600 mx-0.5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-gray-800 font-light italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="text-red-600 font-medium">
                <div className="text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;