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
          <div className="mb-12 sm:mb-16 md:mb-20 grid grid-cols-4 sm:grid-cols-4 md:flex md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-6 sm:h-7 md:h-8 object-contain grayscale opacity-60"
              />
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="rounded-bl-2xl bg-blue-100 rounded-tr-2xl sm:rounded-bl-3xl sm:rounded-tr-3xl p-6 sm:p-8 shadow-sm"
          >
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-300 rounded-full inline-block">
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
  );
};

export default IntroSection;
