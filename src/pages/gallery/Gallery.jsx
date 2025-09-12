
import { useState } from "react";
import {
  FiImage,
  FiVideo,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("photos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295349/food14_yttmld.jpg",
      alt: "",
      caption: "",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295348/food11_nbdufe.jpg",
      alt: "",
      caption: "",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295348/food13_aiylmj.jpg",
      alt: "",
      caption: "",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
        {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
        {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
        {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
            {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
            {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
            {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },
            {
      id: 4,
      src: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295353/food17_i3p2bf.jpg",
      alt: "",
      caption: "",
    },

  ];

  // Sample video gallery data
const videos = [
  {
    id: 1,
    embedId: "EuGhA2QS4xA?si=b2oyOwLMfDCTGLoZ",
    aspect: "aspect-[4/3]" 
  },
  {
    id: 2,
    embedId: "R2iGXWg-1cY?si=b5WV_BY_VwZXvapZ",
    aspect: "aspect-[3/4]" 
  },
  {
    id: 3,
    embedId: "WW_EAt8Fdjc?si=VY3zijjMPZ9IIn3b",
    aspect: "aspect-square" 
  },
  {
    id: 4,
    embedId: "SeiqoFX3nhU",
    aspect: "aspect-square" 
  },
    {
    id: 5,
    embedId: "ROq7qXzrynk",
    aspect: "aspect-square" 
  },
      {
    id: 6,
    embedId: "aZWHHd2JBSA",
    aspect: "aspect-square" 
  },
        {
    id: 7,
    embedId: "WtIBFJ2aLoc",
    aspect: "aspect-square" 
  },
          {
    id: 7,
    embedId: "mj98XOtpr_s",
    aspect: "aspect-square" 
  },
            {
    id: 8,
    embedId: "iXZO91xUfBI",
    aspect: "aspect-square" 
  },
              {
    id: 9,
    embedId: "5EMoMXfF43c",
    aspect: "aspect-square" 
  },
                {
    id: 10,
    embedId: "GRNEE5RnkqE",
    aspect: "aspect-square" 
  },
                  {
    id: 11,
    embedId: "jxsnlfJr1wA",
    aspect: "aspect-square" 
  },
                    {
    id: 12,
    embedId: "TP_3I27H4Ng",
    aspect: "aspect-square" 
  },
                      {
    id: 13,
    embedId: "b_qrZ1i5ECU",
    aspect: "aspect-square" 
  },
                        {
    id: 13,
    embedId: "7_jsU0-t7CE",
    aspect: "aspect-square" 
  },

];
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <section
      className="py-36 px-4 bg-white"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of photos and videos showcasing our products
            and services
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === "photos"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FiImage className="mr-2" />
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === "videos"
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FiVideo className="mr-2" />
              Video Gallery
            </button>
          </div>
        </div>
        {activeTab === "photos" && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group ${photo.aspect}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="font-medium text-white">{photo.alt}</h3>
                    <p className="text-sm text-gray-200">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

{/* Video Gallery */}
{activeTab === "videos" && (
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
    {videos.map((video) => (
      <div
        key={video.id}
        className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-6"
      >
        {/* Video container with varied aspect ratios */}
        <div className={`relative ${video.aspect || 'aspect-video'} w-full`}>
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

      </div>
    ))}
  </div>
)}
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close lightbox"
            >
              <FiX className="w-6 h-6" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>
            <img
              src={photos[currentImage].src || "/placeholder.svg"}
              alt={photos[currentImage].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium text-lg">{photos[currentImage].alt}</p>
              <p className="text-sm text-gray-300">
                {photos[currentImage].caption}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {currentImage + 1} / {photos.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}