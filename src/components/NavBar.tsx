/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, type JSX } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./ui/Button";

// Type definitions
interface NavSection {
  title: string;
  items: string[];
  nested?: {
    title: string;
    items: string[];
  };
}

interface StructuredNavItem {
  structured: true;
  sections: NavSection[];
}

interface SimpleNavItem {
  items: string[];
  columns: 2 | 3;
}

type NavKey = keyof typeof navItemsConfig;

// Animation variants with proper typing
const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 } as Transition,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.15,
    } as Transition,
  }),
};

const mobileDropdownVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2 } as Transition,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    } as Transition,
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

// Navigation configuration
const navItemsConfig = {
  "WHY CLIENTS HIRE US": {
    items: [
      "Use Cases & Sectors",
      "Retail",
      "ESG as a Service",
      "Finance as a Service",
      "Government / NGO",
      "Energy",
      "Technology",
      "Venture Design Lab",
    ],
    columns: 3,
  } as SimpleNavItem,
  "EXPERIENCE AS A PLATFORM": {
    items: [
      "Total Experience API",
      "Platform",
      "TPASS",
      "HEMS Modules",
      "TerraOne",
      "e-Mobility",
      "Digital Twin",
      "Virtual Gas Plan",
      "OneXperience",
    ],
    columns: 3,
  } as SimpleNavItem,
  RESOURCES: {
    structured: true,
    sections: [
      {
        items: [
          "Blog",
          "Market Trend",
          "Webinar",
          "Third Party Articles",
          "Press Release",
        ],
      },
      {
        title: "Why Clients Hire Us",
        items: [
          "ESG + CSR + SGS",
          "Efficiency to Zero",
          "(Re)finance the Future",
        ],
        columns: 1,
      },
      {
        title: "",
        items: [
          "Our Thinking",
          "Vision",
          "Goal",
          "Value",
          "Impact",
          "Career",
          "Mission",
          "Philosophy",
        ],
      },
    ],
  } as StructuredNavItem,
  "VENTURE DESIGN LAB": {
    items: [
      "Overview",
      "Case Studies",
      "Collaborations",
      "Frameworks",
      "Innovation Approach",
      "Contact",
    ],
    columns: 2,
  } as SimpleNavItem,
} as const;

const InfinityBleuNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const renderDropdown = (key: string): JSX.Element => {
    const item = navItemsConfig[key as NavKey];

    // Resources dropdown with structured sections
    if ("structured" in item && item.structured) {
      return (
        <div className="grid grid-cols-3 gap-8 p-8">
          {item.sections.map((section: NavSection, sectionIdx: number) => (
            <div key={section.title}>
              <h3 className="text-[#0B1223] text-xs font-semibold uppercase tracking-wider mb-4 opacity-50">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((subItem: string, idx: number) => (
                  <motion.a
                    key={subItem}
                    href="#"
                    custom={sectionIdx * 3 + idx}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="block px-3 py-2 text-[#0B1223] hover:text-[#245CFF] font-medium text-sm border border-transparent hover:border-[#245CFF] rounded transition-all duration-200"
                  >
                    {subItem}
                  </motion.a>
                ))}
                {section.nested && (
                  <div className="mt-4 pl-3 border-l-2 border-[#E7ECF6]">
                    {section.nested.items.map(
                      (nestedItem: string, idx: number) => (
                        <motion.a
                          key={nestedItem}
                          href="#"
                          custom={sectionIdx * 3 + section.items.length + idx}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          className="block px-3 py-2 text-[#0B1223] hover:text-[#245CFF] font-medium text-sm border border-transparent hover:border-[#245CFF] rounded transition-all duration-200"
                        >
                          {nestedItem}
                        </motion.a>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Simple grid dropdowns for other items
    const columns = "columns" in item ? item.columns : 3;
    const gridClass = columns === 2 ? "grid-cols-2" : "grid-cols-3";

    return (
      <div className={`grid ${gridClass} gap-8 p-8`}>
        {("items" in item ? item.items : []).map(
          (subItem: string, idx: number) => (
            <motion.a
              key={subItem}
              href="#"
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="block px-3 py-2 text-[#0B1223] hover:text-[#245CFF] font-medium text-sm border border-transparent hover:border-[#245CFF] rounded transition-all duration-200"
            >
              {subItem}
            </motion.a>
          )
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E7ECF6]">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a className="flex-shrink-0" href="/">
              <img
                src="/logo.jpg"
                alt="Infinity Bleu Logo"
                className="w-30 h-14"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {Object.keys(navItemsConfig).map((item: string) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-[#0B1223] hover:text-[#245CFF] font-medium text-sm tracking-tight flex items-center gap-1 transition-colors duration-200">
                    {item}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#E7ECF6] rounded shadow-lg overflow-hidden"
                        style={{
                          width:
                            "columns" in navItemsConfig[item as NavKey] &&
                            (navItemsConfig[item as NavKey] as any).columns ===
                              2
                              ? "480px"
                              : "680px",
                        }}
                      >
                        {renderDropdown(item)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Button className="text-black">LET'S TALK</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex flex-col gap-1.5 w-6 h-6 justify-center"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-[#0B1223] transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#0B1223] transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#0B1223] transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={
                { duration: 0.25, ease: [0.16, 1, 0.3, 1] } as Transition
              }
              className="lg:hidden overflow-hidden bg-white border-t border-[#E7ECF6]"
            >
              <div className="px-6 py-4 space-y-2">
                {Object.keys(navItemsConfig).map((item: string) => {
                  const navItem = navItemsConfig[item as NavKey];
                  const itemsList: string[] =
                    "structured" in navItem && navItem.structured
                      ? navItem.sections.flatMap((s: NavSection) => [
                          ...s.items,
                          ...(s.nested?.items || []),
                        ])
                      : (navItem as SimpleNavItem).items;

                  return (
                    <div
                      key={item}
                      className="border-b border-[#E7ECF6] last:border-0 pb-2"
                    >
                      <button
                        onClick={() =>
                          setMobileActiveDropdown(
                            mobileActiveDropdown === item ? null : item
                          )
                        }
                        className="w-full flex items-center justify-between py-3 text-[#0B1223] font-semibold text-sm"
                      >
                        {item}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileActiveDropdown === item ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileActiveDropdown === item && (
                          <motion.div
                            variants={mobileDropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 pb-3 space-y-1">
                              {itemsList.map((subItem: string, idx: number) => (
                                <motion.a
                                  key={subItem}
                                  href="#"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={
                                    { delay: idx * 0.03 } as Transition
                                  }
                                  className="block py-2 px-3 text-[#0B1223] hover:text-[#245CFF] font-medium text-sm border border-transparent hover:border-[#245CFF] rounded transition-all duration-200"
                                >
                                  {subItem}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Button className="text-black">LET'S TALK</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default InfinityBleuNavbar;
