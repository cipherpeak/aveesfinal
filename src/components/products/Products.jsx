import { useState, useRef, useEffect } from "react";
import { ChevronDown, Leaf, ShieldCheck, Wheat } from "lucide-react";
import { GiCoconuts } from "react-icons/gi";
import ProductGrid from "./ProductGrid";
import ProductFeatures from "./ProductFeatures";
import ProductFaq from "./ProductFaq";
import { motion } from "framer-motion";
import ProductBanner from "./ProductBanner";

// Categories
const categories = ["All", "Rice Flours", "Instant Batters", "Ready-to-Cook", "Snacks"];

// Products
const products = [
  {
    id: 1,
    name: "Premium Rice Flour",
    description: "Finely milled rice flour for everyday cooking and light, crisp batters.",
    category: "Rice Flours",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295766/steamed_pttupodi_1kg_gm6lpi.png",
  },
  {
    id: 2,
    name: "Idiyappam Rice Flour",
    description: "Smooth-texture rice flour ideal for soft, non-sticky idiyappam and puttu.",
    category: "Rice Flours",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295725/Idiyappam_mockup_z1ejju.png",
  },
  {
    id: 3,
    name: "Instant Dosa Batter Mix",
    description: "Just add water for golden, lacy dosas—no soaking or grinding needed.",
    category: "Instant Batters",
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/IDLI_DOSA_BATTER_jt1fun.webp",
  },
];

// Features (with Lucide + React-icons)
const features = [
  {
    title: "Clean-label Ingredients",
    description: "No artificial colors or flavors—just simple, honest staples.",
    icon: <Leaf className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Coconut-forward Nutrition",
    description: "Naturally aromatic, wholesome and delicious coconut-based recipes.",
    icon: <GiCoconuts className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Quality You Can Trust",
    description: "Sourced responsibly and processed with rigorous quality checks.",
    icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Gluten-free Options",
    description: "Many products are naturally gluten-free for everyday cooking.",
    icon: <Wheat className="h-8 w-8 text-red-600" />,
  },
];

// FAQs
const faqs = [
  { question: "What is the typical shelf life?", answer: "Most products have a shelf life of 6–12 months depending on storage conditions." },
  { question: "Are your ingredients clean-label?", answer: "Yes, we use no artificial colors, preservatives, or flavors." },
  { question: "How should I store the products?", answer: "Store in a cool, dry place. Refrigeration is recommended for batters." },
  { question: "Do your products contain allergens?", answer: "Some products may contain traces of nuts or gluten. Please check the packaging." },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = {
    products: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Animation variants for fade-in-up entrance only (no exit animation)
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Use a single Intersection Observer for all sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // Adjust trigger point
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <ProductBanner/>
      <div className="max-w-7xl mx-auto py-16 px-4 space-y-20">
        {/* PRODUCTS */}
        <motion.section
          id="products"
          ref={sectionRefs.products}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        >
          <ProductGrid 
            categories={categories} 
            activeCategory={activeCategory} 
            filteredProducts={filteredProducts} 
            setActiveCategory={setActiveCategory}
          />
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="features"
          ref={sectionRefs.features}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        >
          <ProductFeatures features={features}/>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          ref={sectionRefs.faq}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        >
          <ProductFaq 
            faqs={faqs} 
            ChevronDown={ChevronDown} 
            openFAQ={openFAQ} 
            setOpenFAQ={setOpenFAQ}
          />
        </motion.section>

        {/* CTA */}
        <motion.section
          id="cta"
          ref={sectionRefs.cta}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="border border-red-100 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50"
        >
          <div>
            <h3 className="font-semibold text-lg">Interested in Retail or Distribution?</h3>
            <p className="text-gray-600 text-sm">
              Partner with us to bring clean-label, coconut-forward products to more customers.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Enquire for Retail
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Enquire for Distribution
            </motion.button>
          </div>
        </motion.section>
      </div>
    </>
  );
}