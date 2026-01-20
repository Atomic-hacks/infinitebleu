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
          { name: "Sustainable Buildings", icon: Building2 },
          { name: "Healthy Buildings", icon: Heart },
          { name: "Digital buildings", icon: Cpu },
        ],
      },
      {
        title: "SECTORS",
        items: [
          { name: "Retails", icon: ShoppingCart },
          { name: "Finance as a service", icon: DollarSign },
          { name: "Technology as aservice", icon: Code },
          { name: "Energy as a service", icon: Zap },
          { name: "ESG as a service", icon: Leaf },
          { name: "Government/NGO", icon: Landmark },
        ],
      },
    ],
  },
  Platform: {
    columns: [
      {
        title: "INFINITEBLEU PLATFORM",
        items: [
          { name: "Total experience API", icon: Apple },
          { name: "HEMS Modules", icon: Home },
          { name: "Digital Twin", icon: Monitor },
          { name: "OmniXperience", icon: Globe },
          { name: "TerraOne", icon: Leaf },
        ],
      },
      {
        title: "THIRD-PARTY PLATFORM",
        items: [
          { name: "TPASS", icon: Target },
          { name: "e-mobility", icon: Car },
          { name: "VirtualGas Plan", icon: Fuel },
        ],
      },
    ],
  },
  "Venture Design lab": {
    columns: [
      {
        items: [
          { name: "Overview", icon: Eye },
          { name: "Collaborations", icon: Handshake },
          { name: "Innovation Approach", icon: Lightbulb },
        ],
      },
      {
        items: [
          { name: "Case-studies", icon: FileText },
          { name: "Framework", icon: Monitor },
          { name: "Contact", icon: Users },
        ],
      },
    ],
  },
  Resources: {
    showHeading: true,
    columns: [
      {
        items: [
          { name: "Blog", icon: FileText },
          { name: "Market Trend", icon: TrendingUp },
          { name: "Webinar", icon: Video },
          { name: "Third Party Articles", icon: Newspaper },
          { name: "Press Release", icon: Newspaper },
        ],
      },
      {
        items: [
          { name: "ESG+ CSR +SGS", icon: Leaf },
          { name: "Efficiency to zero", icon: Gauge },
          { name: "(Re)Finance the Future", icon: DollarSign },
        ],
      },
      {
        items: [
          { name: "Our thinking", icon: Lightbulb },
          { name: "Mission", icon: Target },
          { name: "Mission", icon: Target },
          { name: "Goal", icon: Target },
          { name: "Value", icon: Heart },
          { name: "Vision", icon: Eye },
          { name: "Career", icon: Briefcase },
          { name: "Philosophy", icon: Lightbulb },
        ],
      },
    ],
  },
  "Why Us": {
    columns: [
      {
        items: [
          { name: "About Us", icon: Info },
          { name: "Impact", icon: BarChart3 },
        ],
      },
      {
        items: [
          { name: "NewsRoom", icon: Newspaper },
          { name: "Careers", icon: Briefcase },
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
      className={`fixed left-0 right-0 top-20 z-30 w-full bg-black/50 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300 ease-out rounded-bl-full ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {data.showHeading && (
          <div className="max-w-3xl">
            <h2 className="mb-6 text-white text-left">RESOURCES</h2>
          </div>
        )}

        <div className="flex gap-10 flex-wrap">
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
                <h3 className="text-xs text-white mb-4 tracking-wide uppercase font-normal">
                  {column.title}
                </h3>
              )}
              <div className="space-y-3">
                {column.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <a key={itemIdx} href="#" className="block group">
                      <div className="flex items-center gap-2 text-sm font-normal text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                        {Icon && (
                          <Icon className="w-4 h-4 text-white group-hover:text-white/90" />
                        )}
                        <span>{item.name}</span>
                      </div>
                      {item.description && (
                        <div className="text-xs text-white mt-1 leading-relaxed font-normal">
                          {item.description}
                        </div>
                      )}
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
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white/10 backdrop-blur-md z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
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
            <div key={menu} className="border-b border-white/10 last:border-0">
              <button
                onClick={() =>
                  setExpandedMenu(expandedMenu === menu ? null : menu)
                }
                className="w-full flex items-center justify-between py-3 px-2 text-left text-white font-normal hover:bg-white/10 transition-colors rounded-lg"
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
                        <div className="text-xs font-normal text-white/70 mb-2 uppercase tracking-wide">
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
                              className="flex items-center gap-2 py-1 text-xs text-white/80 hover:text-white hover:translate-x-1 transition-all font-normal"
                            >
                              {Icon && (
                                <Icon className="w-3 h-3 text-white/60" />
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

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20 bg-white/5 backdrop-blur-md">
          <Button className="w-full ">Let's! Talk</Button>
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
        className={`w-full fixed top-0 z-50 border-b border-white/10 transition-all duration-300 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-lg shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-10 rounded-bl-3xl rounded-tr-3xl md:h-16 w-auto object-contain md:rounded-bl-4xl md:rounded-tr-4xl"
              />

              <div className="hidden lg:flex items-center space-x-1">
                {Object.entries(menuData).map(([menu, data]) => (
                  <div
                    key={menu}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(menu)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-normal transition-colors duration-200 ${
                        activeDropdown === menu
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {menu}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
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
              <Button className=" hidden! md:flex!">Let's Talk</Button>

              <button
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6 text-white"
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
