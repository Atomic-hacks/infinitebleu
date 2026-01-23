import React from "react";
import Button from "../ui/Button";

interface SuccessStory {
  image: string;
  tag: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    icon: "/icons/investment.png",
    title: "Smart Sensors",
    description:
      "Deploy IoT sensors across your buildings to collect real-time data on energy usage, occupancy, and environmental conditions.",
  },
  {
    icon: "/icons/ai-robot.png",
    title: "AI Analytics",
    description:
      "Leverage machine learning algorithms to identify patterns, predict maintenance needs, and optimize building performance.",
  },
  {
    icon: "/icons/analysis.png",
    title: "Enterprise Reporting",
    description:
      "Access comprehensive dashboards and reports that provide insights across your entire portfolio in real-time.",
  },
  {
    icon: "/icons/apartmement.png",
    title: "Building Automation",
    description:
      "Automate HVAC, lighting, and other systems based on occupancy patterns and environmental conditions for maximum efficiency.",
  },
];

const successStories: SuccessStory[] = [
  {
    image: "/blog.jpg",
    tag: "SUCCESS STORY",
    title:
      "Fifth Third approaches 25% average monthly energy savings using portfolio benchmarking",
    description:
      "Fifth Third Bank's leadership and building management teams report saving as much as 25-26% monthly by reducing energy consumption across 500 buildings.",
  },
  {
    image: "/blog2.jpg",
    tag: "SUCCESS STORY",
    title:
      "K-12 Career Exploration Campus—Indoor Air Quality Improvement Through Smart Building Solutions",
    description:
      "To maintain optimal indoor air quality (IAQ) and meet global health and wellness standards, the district adopted the RESET Air Standard across several campuses, incorporating real-time IAQ monitoring technologies with building operating practices.",
  },
  {
    image: "/blog3.jpg",
    tag: "SUCCESS STORY",
    title:
      "infinite bleu Dx³ combines with Microsoft Azure to provide key capabilities as part of Oxford's Smart Building strategy",
    description:
      "Oxford deployed infinite bleu Dx³ across 17 buildings connected to the infinite bleu Platform to gain a continuous audit of the devices and systems connected to its building networks.",
  },
];

const SuccessStoriesSection: React.FC = () => {
  return (
    <>
      {/* Features Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 rounded-tr-[200px] sm:rounded-tr-[400px] md:rounded-tr-[600px] rounded-bl-[200px] sm:rounded-bl-[400px] md:rounded-bl-[600px] my-20 sm:my-30 md:my-40">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Complete Building Operations
            </h3>
            <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
              From smart sensors to global enterprise reporting, we provide the
              full stack for modern facility management.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white shadow-sm hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100 p-6 sm:p-8"
              >
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  <img
                    src={feature.icon}
                    alt=""
                    className="h-12 w-12 sm:h-14 sm:w-14"
                  />
                </div>
                <h4 className="mb-3 text-lg sm:text-xl font-bold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 rounded-tr-[200px] sm:rounded-tr-[400px] md:rounded-tr-[600px] rounded-bl-[200px] sm:rounded-bl-[400px] md:rounded-bl-[600px] my-20 sm:my-30 md:my-40">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              available device data
            </h2>
            <p className="mx-auto mb-6 sm:mb-8 max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700 px-4">
              Using connected data, infinite bleu has helped property owners and
              building managers save energy, reduce operating costs, optimize
              efficiency, and meet their sustainability goals.
            </p>
            <Button className="text-black" showArrow>
              Explore Success Stories
            </Button>
          </div>

          {/* Success Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                  {index === 1 && (
                    <div className="absolute inset-x-0 bottom-0 rounded-t-xl sm:rounded-t-2xl bg-gray-900/90 px-4 sm:px-6 py-3 sm:py-4">
                      <p className="text-base sm:text-lg font-semibold leading-snug text-white">
                        K-12 Career Exploration Campus - Improving Indoor Air
                        Quality
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <div className="mb-2 sm:mb-3 text-xs font-bold tracking-wider text-gray-600">
                    {story.tag}
                  </div>
                  <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold leading-tight text-gray-900">
                    {story.title}
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-gray-700">
                    {story.description}
                  </p>
                  <Button className="text-black!" showArrow>
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSection;
