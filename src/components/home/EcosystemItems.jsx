import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

export default function EcosystemItems() {
  const ecosystemItems = [
    {
      title: "Puttu House Restaurant",
      description:
        "Where the flour meets the plate. Experience authentic Kerala cuisine made from our own products.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/DSC02099_nk5car.jpg",
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
    {
      title: "Avees Resort",
      description:
        "Stay where tradition breathes. A heritage riverside retreat in the heart of Kuttanad.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png",
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
    {
      title: "Sustainable Farming",
      description:
        "Innovation meets tradition. From hydroponics to youth empowerment in agriculture.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/a555c96c-45d2-4408-8300-8ba430eab197_skpjxr.jpg",
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
  ]

  // Refs and controls for animation
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.5, ease: "easeIn" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="h-full bg-background py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h1 className="text-5xl font-bold text-primary mb-6">
            The Avees Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just food products - we're building a complete Kerala
            experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden group h-80"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {item.description}
                </p>
                <motion.button
                  className={`inline-flex items-center gap-2 font-semibold ${item.ctaColor} hover:underline transition-all duration-200 group-hover:gap-3`}
                  whileHover={{ x: 5 }}
                >
                  {item.ctaText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}