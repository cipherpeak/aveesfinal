import { useState, useEffect } from "react";
import { ChevronDown, Leaf, ShieldCheck, Wheat } from "lucide-react";
import { GiCoconuts } from "react-icons/gi";
import ProductGrid from "./ProductGrid";
import { map } from "framer-motion/client";
import ProductFeatures from "./ProductFeatures";
import ProductFaq from "./ProductFaq";
import { motion } from "framer-motion";

// Categories
const categories = ["All", "Rice Flours", "Instant Batters", "Ready-to-Cook", "Snacks"];

// Products
const products = [
  {
    id: 1,
    name: "Premium Rice Flour",
    description: "Finely milled rice flour for everyday cooking and light, crisp batters.",
    category: "Rice Flours",
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "Idiyappam Rice Flour",
    description: "Smooth-texture rice flour ideal for soft, non-sticky idiyappam and puttu.",
    category: "Rice Flours",
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "Instant Dosa Batter Mix",
    description: "Just add water for golden, lacy dosas—no soaking or grinding needed.",
    category: "Instant Batters",
    image: "/images/product3.png",
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
    description: "Naturally aromatic, wholesome, and delicious coconut-based recipes.",
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
  const [isVisible, setIsVisible] = useState({
    products: false,
    features: false,
    faq: false,
    cta: false
  });

  // Animation variants for left-to-right entrance and exit
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: 100,
      transition: { duration: 0.5 }
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Intersection Observer to detect when sections are in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        } else {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: false }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* PRODUCTS */}
      <motion.section
        id="products"
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible.products ? "visible" : "exit"}
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
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible.features ? "visible" : "exit"}
      >
        <ProductFeatures features={features}/>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible.faq ? "visible" : "exit"}
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
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible.cta ? "visible" : "exit"}
        className="border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50"
      >
        <div>
          <h3 className="font-semibold text-lg">Interested in Retail or Distribution?</h3>
          <p className="text-gray-600 text-sm">
            Partner with us to bring clean-label, coconut-forward products to more customers.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Enquire for Retail
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Enquire for Distribution
          </button>
        </div>
      </motion.section>
    </div>
  );
}