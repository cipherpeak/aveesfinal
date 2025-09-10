import logo from "../../assets/logo/Avees logo red.png";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PlaceholdersAndVanishInputDemo } from "../../components/header/Search";
import { motion, AnimatePresence } from "framer-motion";
import { GiShoppingBag } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import ourstorybannerMobile from "../../assets/ourstory/PHONE BANNER 07.webp";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Our Businesses",
      dropdown: [
        { 
          name: "Puttu House", 
          link: "/puttu-house", 
          image: ourstorybannerMobile,
          description: "Explore our retail operations and stores"
        },
        { 
          name: "Avees Resort", 
          link: "/avees-resort", 
          image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295582/resort_eibvny.webp",
          description: "Explore our resorts"
        },
      ],
    },
    {
      name: "Opportunities",
    },
    {
      name: "Gallery",
    },
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileDropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3
      }
    }
  };

  // Function to handle closing the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Avees Logo"
            className="md:h-16 h-11 w-auto rounded-full scale-150"
          />
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="flex-1 hidden md:flex justify-center">
          <PlaceholdersAndVanishInputDemo />
        </div>

        {/* Right side icons - Mobile menu and shopping cart */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.amazon.in/stores/ArayacherrilVarkeySonsPrivateLimited/page/845DC96C-907A-4AD1-AC9D-AA2AF5129460?is_byline_deeplink=true&deeplink=CB166B1D-3A54-48AA-B41E-03CBD177798D&redirect_store_id=845DC96C-907A-4AD1-AC9D-AA2AF5129460&lp_asin=B09R7WRRT2&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2.5 rounded-full text-sm font-medium transition"
          >
            <GiShoppingBag className="text-red-500 text-xl" />
            <span className="hidden sm:inline">Order Now</span>
          </a>
          
          {/* Mobile Menu Button - Now on the right side */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block relative">
        <nav className="w-full">
          <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <div className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer text-sm">
                    {item.name}
                    {activeDropdown === index ? (
                      <IoIosArrowUp className="text-xs" />
                    ) : (
                      <IoIosArrowDown className="text-xs" />
                    )}
                  </div>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="fixed left-0 w-full bg-white shadow-lg z-50 border-t border-gray-100 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        <div className="max-w-7xl mx-auto px-4 py-6">
                          <div className="grid grid-cols-2 gap-8">
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href={subItem.link}
                                className="group relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                              >
                                {/* Background image with dark overlay */}
                                <div 
                                  className="absolute inset-0 bg-cover bg-bottom transition-transform duration-500 group-hover:scale-110"
                                  style={{ backgroundImage: `url(${subItem.image})` }}
                                >
                                </div>
                                
                                {/* Text content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                  <h3 className="font-bold text-lg mb-1 transition-colors text-red-600">
                                    {subItem.name}
                                  </h3>
                                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                                    {subItem.description}
                                  </p>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white w-full border-t"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="px-4 py-2">
              <PlaceholdersAndVanishInputDemo />
            </div>
            <nav className="w-full">
              <ul className="py-2 text-gray-700 font-medium">
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="block px-4 py-3 hover:text-red-600 transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <div className="relative">
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 hover:text-red-600 transition-colors"
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        >
                          {item.name}
                          {activeDropdown === index ? (
                            <IoIosArrowUp className="text-xs" />
                          ) : (
                            <IoIosArrowDown className="text-xs" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === index && item.dropdown && (
                            <motion.div
                              className="overflow-hidden"
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={mobileDropdownVariants}
                            >
                              <ul className="pl-6 bg-gray-50">
                                {item.dropdown.map((subItem, subIndex) => (
                                  <motion.li 
                                    key={subIndex}
                                    variants={itemVariants}
                                    className="border-b border-gray-200 last:border-b-0"
                                  >
                                    <a
                                      href={subItem.link}
                                      className="flex items-center gap-4 px-4 py-3 text-sm"
                                      onClick={handleLinkClick}
                                    >
                                      <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">
                                          {subItem.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                          {subItem.description}
                                        </p>
                                      </div>
                                      <div className="w-16 h-12 rounded-md overflow-hidden">
                                        <img 
                                          src={subItem.image} 
                                          alt={subItem.name}
                                          className="w-full h-full object-cover" 
                                        />
                                      </div>
                                    </a>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;