import React from "react";
import Button from "../ui/Button";

const statsData = [
  {
    icon: "/icons/apartmement.png",
    value: "6K+",
    label: "Buildings Connected",
  },
  {
    icon: "/icons/location.png",
    value: "42M",
    label: "Total Floor Area (ft²)",
  },
  {
    icon: "/icons/carbon.png",
    value: "276B",
    label: "No. of Data Points",
  },
];

const featuresData = [
  {
    icon: "/icons/investment.png",
    title: "A single score for digital readiness",
    description:
      "Get an on-demand, digital audit of your building network, systems, devices, and firmware with the infinite bleu Dx³ discovery tool.",
  },
  {
    icon: "/icons/ai-robot.png",
    title: "Advanced AI engine for autonomous operations",
    description:
      "Apply advanced analytics to your IoT framework for demand-based control to automate your building operations.",
  },
  {
    icon: "/icons/analysis.png",
    title: "High-level view of your portfolio",
    description:
      "Harmonize your building data into a singular data model for a summary of your asset portfolio on a single workspace.",
  },
];

const clientLogos = [
  "/icons/dell.png",
  "/icons/amd.png",
  "/icons/atandt.png",
  "/icons/java.png",
  "/icons/github.png",
  "/icons/ibm.png",
  "/icons/intel.png",
  "/icons/windows.png",
];

const IntroSection: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-[1440px] mx-auto">
      {/* Trusted Clients Section */}
      <div className="bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-8 sm:mb-12 text-base sm:text-lg font-medium text-gray-600">
            Trusted by clients and partners worldwide
          </h3>
          <div className="mb-12 sm:mb-16 md:mb-20 grid grid-cols-4 md:flex items-center justify-between gap-4 ">
            {clientLogos.map((logo, index) => (
              <div className="px-6 py-4 rounded-bl-3xl rounded-tr-3xl bg-blue-300 hover:scale-105 transition-all duration-300">
                {" "}
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="h-8 md:h-14 object-contain grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact Section */}
      <div className="bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Global{" "}
                <span className="text-blue-500">environmental impact</span>{" "}
                through the{" "}
                <span className="text-blue-500">digital transformation</span> of
                real estate
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                The digital transformation of real estate is helping reduce
                environmental impact by using smart technologies to improve
                energy efficiency and resource use. This shift lowers energy
                consumption, waste, and carbon footprints in buildings.
                Ultimately, it supports global efforts to combat climate change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row justify-around gap-6 sm:gap-4">
          {statsData.map((stat, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-blue-300 rounded-full">
                <img
                  src={stat.icon}
                  alt=""
                  className="h-10 w-10 sm:h-12 sm:w-12"
                />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-sm sm:text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid - Updated with Capabilities header */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Complete Building Operations
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From smart sensors to global enterprise reporting, we provide the
            full stack for modern facility management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group rounded-bl-2xl bg-blue-100 rounded-tr-2xl sm:rounded-bl-3xl sm:rounded-tr-3xl p-6 sm:p-8 shadow-sm hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-300 rounded-full inline-block group-hover:scale-110 transition-transform">
                <img
                  src={feature.icon}
                  alt=""
                  className="h-12 w-12 sm:h-16 sm:w-16"
                />
              </div>
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-gray-600">
                {feature.description}
              </p>
              <Button className="text-black!">Learn more</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Data Section */}
      <section className="bg-slate-900 -mx-4 sm:-mx-6 md:-mx-8 py-16 sm:py-20 md:py-24 text-white overflow-hidden relative rounded-bl-4xl rounded-tr-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                Real-time data at your fingertips.
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Switch Enterprise integrates with hundreds of BMS, utility and
                IoT systems to give you a single source of truth for your entire
                portfolio.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-blue-500">20%</div>
                  <div className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-bold">
                    Avg. Energy Savings
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-bold">
                    Integrations
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 mt-12 lg:mt-0">
              <div className="bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <img src="/icons/analysis.png" alt="" className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Global Dashboard</h4>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-slate-700 rounded animate-pulse delay-75"></div>
                  <div className="h-4 w-4/6 bg-slate-700 rounded animate-pulse delay-150"></div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <Button showArrow className="">Explore Dashboard </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
