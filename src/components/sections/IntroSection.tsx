import React from "react";

const stats = [
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd8567f74f0f552fc5627b_switch-buildings.svg",
    value: "6K+",
    label: "Buildings Connected",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd856712d8988dedb0e2a9_switch-floorare.svg",
    value: "42M",
    label: (
      <>
        Total Floor Area (ft<sup>2</sup>)
      </>
    ),
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd8567bd3f60fbbee31aa6_switch-datapoints.svg",
    value: "276B",
    label: "No. of Data Points",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bd856701fea039134767a1_switch-optimization.svg",
    value: "2.5x",
    label: "Optimization Opportunities",
  },
];

const features = [
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f37c08148c1_img-home-why-1.svg",
    title: "A single score for digital readiness",
    text: "Get an on-demand digital audit of your building network, systems, devices, and firmware with the Switch Dx³ discovery tool.",
    link: "/platform/switch-dx3",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f4c298148c2_img-home-why-2.svg",
    title: "Advanced AI engine for autonomous operations",
    text: "Apply advanced analytics to your IoT framework for demand-based control to automate building operations.",
    link: "/platform/switch-rx-a-digital-building-prescription",
  },
  {
    icon: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/628ef5003d1b8f21388148c9_img-home-why-3.svg",
    title: "High-level view of your portfolio",
    text: "Harmonize building data into a singular data model for a unified portfolio workspace.",
    link: "/platform/switch-opx",
  },
];

const IntroSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-2 space-y-20">
        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <h1 className="  text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Global
            <span className="bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              environmental impact
            </span>
            through the
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              digital transformation
            </span>
            of real estate
          </h1>

          <p className=" text-gray-600 text-lg">
            The digital transformation of real estate helps reduce environmental
            impact by improving energy efficiency and resource usage through
            smart technologies—lowering waste, emissions, and carbon footprints.
          </p>
        </div>

        {/* Stats */}
        <div className="grid mt-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <img src={item.icon} alt="" className="w-15 h-15" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {item.value}
                </h2>
                <p className="text-xl text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border bg-gray-100 rounded-2xl p-8 hover:border-blue-800 transition"
            >
              <img src={feature.icon} alt="" className="w-18 h-18 mb-6" />
              <h3 className="text-xl text-black font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-8">{feature.text}</p>
              <a
                href={feature.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-blue-800 px-6 py-3 rounded-br-2xl text-blue-800 font-medium transition-all hover:gap-3 hover:bg-blue-50"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
