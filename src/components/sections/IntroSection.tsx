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

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Trusted Clients Section */}
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-12 text-lg font-medium text-gray-600">
            Trusted by clients and partners worldwide
          </h3>
          <div className="mb-20 flex items-center justify-between gap-8">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-8 object-contain grayscale opacity-60"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact Section */}
      <div className="bg-white px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Global{" "}
                <span className="text-blue-500">environmental impact</span>{" "}
                through the{" "}
                <span className="text-blue-500">digital transformation</span> of
                real estate
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-gray-700">
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
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200 px-16 py-12">
        <div className="flex justify-around">
          {statsData.map((stat, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 p-4 bg-blue-300 rounded-full">
                <img src={stat.icon} alt="" className="h-12 w-12" />
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="rounded-bl-3xl bg-blue-100 rounded-tr-3xl p-8 shadow-sm"
          >
            <div className="mb-6 p-4 bg-blue-300 rounded-full">
              <img src={feature.icon} alt="" className="h-16 w-16" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              {feature.title}
            </h3>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              {feature.description}
            </p>
            <Button className="text-black!">Learn more</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
