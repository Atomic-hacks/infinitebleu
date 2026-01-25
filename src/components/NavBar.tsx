/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, type JSX } from "react";
import {
  ChevronDown,
  Building2,
  Heart,
  Cpu,
  ShoppingCart,
  DollarSign,
  Code,
  Zap,
  Leaf,
  Landmark,
  Apple,
  Home,
  Monitor,
  Globe,
  Car,
  Fuel,
  Eye,
  Handshake,
  Lightbulb,
  FileText,
  TrendingUp,
  Video,
  Newspaper,
  Target,
  Gauge,
  Users,
  Info,
  BarChart3,
  Briefcase,
} from "lucide-react";

import Button from "./ui/Button";

interface MenuItem {
  name: string;
  description?: string;
  icon?: any;
}

interface MenuColumn {
  title?: string;
  items: MenuItem[];
}

interface MenuData {
  showHeading?: boolean;
  columns: MenuColumn[];
}

const menuData: Record<string, MenuData> = {
  "Why Hire Us": {
    columns: [
      {
        title: "USE CASES",
        items: [
          {
            name: "Sustainable Buildings",
            icon: Building2,
            description: "Eco-friendly solutions",
          },
          {
            name: "Healthy Buildings",
            icon: Heart,
            description: "Wellness-focused design",
          },
          {
            name: "Digital buildings",
            icon: Cpu,
            description: "Smart infrastructure",
          },
        ],
      },
      {
        title: "SECTORS",
        items: [
          {
            name: "Retails",
            icon: ShoppingCart,
            description: "Commerce innovation",
          },
          {
            name: "Finance as a service",
            icon: DollarSign,
            description: "Financial solutions",
          },
          {
            name: "Technology as aservice",
            icon: Code,
            description: "Tech integration",
          },
          {
            name: "Energy as a service",
            icon: Zap,
            description: "Power management",
          },
          {
            name: "ESG as a service",
            icon: Leaf,
            description: "Sustainable growth",
          },
          {
            name: "Government/NGO",
            icon: Landmark,
            description: "Public sector",
          },
        ],
      },
    ],
  },
  Platform: {
    columns: [
      {
        title: "INFINITEBLEU PLATFORM",
        items: [
          {
            name: "Total experience API",
            icon: Apple,
            description: "Unified interface",
          },
          {
            name: "HEMS Modules",
            icon: Home,
            description: "Home energy systems",
          },
          {
            name: "Digital Twin",
            icon: Monitor,
            description: "Virtual modeling",
          },
          {
            name: "OmniXperience",
            icon: Globe,
            description: "Global solutions",
          },
          { name: "TerraOne", icon: Leaf, description: "Earth-first platform" },
        ],
      },
      {
        title: "THIRD-PARTY PLATFORM",
        items: [
          { name: "TPASS", icon: Target, description: "Access management" },
          { name: "e-mobility", icon: Car, description: "Electric transport" },
          {
            name: "VirtualGas Plan",
            icon: Fuel,
            description: "Energy optimization",
          },
        ],
      },
    ],
  },
  "Venture Design lab": {
    columns: [
      {
        items: [
          { name: "Overview", icon: Eye, description: "Lab introduction" },
          {
            name: "Collaborations",
            icon: Handshake,
            description: "Partner network",
          },
          {
            name: "Innovation Approach",
            icon: Lightbulb,
            description: "Our methodology",
          },
        ],
      },
      {
        items: [
          {
            name: "Case-studies",
            icon: FileText,
            description: "Success stories",
          },
          { name: "Framework", icon: Monitor, description: "Design systems" },
          { name: "Contact", icon: Users, description: "Get in touch" },
        ],
      },
    ],
  },
  Resources: {
    showHeading: true,
    columns: [
      {
        items: [
          { name: "Blog", icon: FileText, description: "Insights & articles" },
          {
            name: "Market Trend",
            icon: TrendingUp,
            description: "Industry analysis",
          },
          { name: "Webinar", icon: Video, description: "Live sessions" },
          {
            name: "Third Party Articles",
            icon: Newspaper,
            description: "External content",
          },
          {
            name: "Press Release",
            icon: Newspaper,
            description: "Latest news",
          },
        ],
      },
      {
        items: [
          { name: "ESG+ CSR +SGS", icon: Leaf, description: "Impact metrics" },
          {
            name: "Efficiency to zero",
            icon: Gauge,
            description: "Net-zero goals",
          },
          {
            name: "(Re)Finance the Future",
            icon: DollarSign,
            description: "Funding models",
          },
        ],
      },
      {
        items: [
          { name: "Our thinking", icon: Lightbulb, description: "Philosophy" },
          { name: "Mission", icon: Target, description: "Our purpose" },
          { name: "Goal", icon: Target, description: "Objectives" },
          { name: "Value", icon: Heart, description: "Core beliefs" },
          { name: "Vision", icon: Eye, description: "Future outlook" },
          { name: "Career", icon: Briefcase, description: "Join our team" },
          {
            name: "Philosophy",
            icon: Lightbulb,
            description: "Guiding principles",
          },
        ],
      },
    ],
  },
  "Why Us": {
    columns: [
      {
        items: [
          { name: "About Us", icon: Info, description: "Our story" },
          {
            name: "Impact",
            icon: BarChart3,
            description: "Measurable results",
          },
        ],
      },
      {
        items: [
          { name: "NewsRoom", icon: Newspaper, description: "Media center" },
          { name: "Careers", icon: Briefcase, description: "Open positions" },
        ],
      },
    ],
  },
};

const DropdownContent: React.FC<{
  data: MenuData;
  isVisible: boolean;
}> = ({ data, isVisible }) => {
  return (
    <div
      className={`fixed left-0 right-0 top-16 z-30 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-out rounded-bl-full ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {data.showHeading && (
          <div className="max-w-3xl mb-6">
            <h2 className="text-gray-900 text-left font-semibold">RESOURCES</h2>
          </div>
        )}

        <div className="flex gap-8 flex-wrap">
          {data.columns.map((column, idx) => (
            <div
              key={idx}
              className={`flex-1 min-w-[200px] transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 60}ms` : "0ms" }}
            >
              {column.title && (
                <h3 className="text-xs text-gray-500 mb-3 tracking-wide uppercase font-semibold">
                  {column.title}
                </h3>
              )}
              <div className="space-y-2">
                {column.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <a key={itemIdx} href="#" className="block group">
                      <div className="flex items-start gap-2.5 text-sm font-medium text-gray-700 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200">
                        {Icon && (
                          <Icon className="w-5 h-5 mt-0.5 text-gray-600 group-hover:text-blue-600 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div>{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500 mt-0.5 font-normal">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-168px)] p-4">
          {Object.entries(menuData).map(([menu, data]) => (
            <div key={menu} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() =>
                  setExpandedMenu(expandedMenu === menu ? null : menu)
                }
                className="w-full flex items-center justify-between py-3 px-2 text-left text-gray-900 font-medium hover:bg-gray-100 transition-colors rounded-lg"
              >
                <span className="text-sm">{menu}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedMenu === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMenu === menu
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-3 space-y-4">
                  {data.columns.map((column, idx) => (
                    <div key={idx}>
                      {column.title && (
                        <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                          {column.title}
                        </div>
                      )}
                      <div className="space-y-2">
                        {column.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={itemIdx}
                              href="#"
                              className="flex items-center gap-2 py-1 text-xs text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all font-medium"
                            >
                              {Icon && (
                                <Icon className="w-4 h-4 text-gray-600" />
                              )}
                              <span>{item.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <Button className="text-black! w-full">Let's! Talk</Button>
        </div>
      </div>
    </>
  );
};

export default function Navbar(): JSX.Element {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md border-gray-200"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-10 rounded-bl-3xl rounded-tr-3xl md:h-12 w-auto object-contain md:rounded-bl-4xl md:rounded-tr-4xl"
              />

              <div className="hidden lg:flex items-center">
                {Object.entries(menuData).map(([menu, data]) => (
                  <div
                    key={menu}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(menu)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        activeDropdown === menu
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {menu}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === menu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <DropdownContent
                      data={data}
                      isVisible={activeDropdown === menu}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="hidden! text-black! md:flex!">
                Let's Talk
              </Button>

              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
