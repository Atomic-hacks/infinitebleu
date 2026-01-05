import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./ui/Button";

const navItems: Record<string, string[]> = {
  "Why Clients Hire US": [
    "total experience api",
    "platform",
    "tpass",
    "hems modules",
    "terraone",
    "e-mobility",
    "digital twin",
    "virtual gas plan",
    "onexperience",
  ],
  Platform: [
    "total experience api",
    "platform",
    "tpass",
    "hems modules",
    "terraone",
    "e-mobility",
    "digital twin",
    "virtual gas plan",
    "onexperience",
  ],
  "venture design lab": [
    "overview",
    "case studies",
    "collaborations",
    "frameworks",
    "innovation approach",
    "contact",
  ],
  designlab: [
    "design systems",
    "prototyping",
    "user research",
    "workshops",
    "sprint methods",
  ],
  resources: [
    "blog",
    "market trend",
    "webinar",
    "third party articles",
    "press release",
    "our thinking",
    "vision",
    "goal",
    "value",
    "impact",
    "career",
  ],
  "why us": [
    "use cases & sectors",
    "retail",
    "esg as a service",
    "finance as a service",
    "government / ngo",
    "energy",
    "technology",
  ],
};

export default function Navigation() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/logo.jpg" alt="Infinity Bleu" className="w-28 h-12" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {Object.entries(navItems).map(([label, items]) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setActive(label)}
                onMouseLeave={() => setActive(null)}
              >
                <button className="text-gray-900 hover:text-blue-600 text-sm font-medium flex items-center gap-1 transition-colors py-2">
                  {label}
                  <ChevronDown className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {active === label && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64"
                    >
                      <div className="space-y-1">
                        {items.map((item, i) => (
                          <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.02 }}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                          >
                            {item}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          <Button className="text-neutral-800 px-4! py-2! text-sm">Let's Talk</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-gray-900 transition-transform ${
                  mobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-gray-900 transition-transform ${
                  mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-2">
              {Object.entries(navItems).map(([label, items]) => (
                <div
                  key={label}
                  className="border-b border-gray-100 pb-2 last:border-0"
                >
                  <button
                    onClick={() =>
                      setMobileActive(mobileActive === label ? null : label)
                    }
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-900"
                  >
                    {label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        mobileActive === label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileActive === label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pt-1 pb-2 space-y-1">
                          {items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block py-2 px-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
