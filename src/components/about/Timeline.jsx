import React from "react";
import { Timeline } from "../../components/ui/timeline"

export function TimelineDemo() {
const data = [
    {
      title: "2024",
      subtitle: "Mission 1000 Recognition",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Recognition under Mission 1000 with enhanced focus on innovation and sustainability.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="startup template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2023",
      subtitle: "Retail Expansion",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Significant expansion of retail network across Kerala.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2022",
      subtitle: "Third Restaurant Opening",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Third restaurant opens on NH Paravoor, reaching more travelers.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2018",
      subtitle: "Rapid Growth Period",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Period of rapid growth with enhanced production, automation, and market expansion.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2017",
      subtitle: "Product Innovation",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Launch of Ready to Eat and Instant Mix products, transforming convenience.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2016",
      subtitle: "Next Generation Leadership",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Second generation joins the business, bringing fresh perspectives.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2015",
      subtitle: "Expansion to Perumthuruthy",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Second outlet opens in Perumthuruthy, expanding our reach.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2009",
      subtitle: "First Avees Puttu House",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Opening of the first Avees Puttu House in Onnamkara.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "2008",
      subtitle: "Avees Resort Launch",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Launch of Avees Resort, expanding into the hospitality sector.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
    {
      title: "1994",
      subtitle: "Company Founding",
      content: (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end pb-8 px-6">
            <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
              <p className="text-white font-bold text-balance leading-relaxed
                           text-2xl sm:text-3xl md:text-2xl lg:text-3xl
                           drop-shadow-md">
                Founding of the rice flour company in Pulincunnoo, Kuttanad.
              </p>
              <div className="h-1 w-16 bg-amber-400 mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294717/image5_a7cknq.png"
            alt="hero template"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}