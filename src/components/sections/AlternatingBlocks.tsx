import React from "react";
import Button from "../ui/Button";

interface SectionCard {
  title: string;
  heading: string;
  description: string;
  features: string[];
  media: {
    type: "image" | "video";
    src: string;
  };
  buttonText: string;
  fill?: string;
}

const cardsData: SectionCard[] = [
  {
    title: "Facilities Manager",
    heading: "Investigate",
    description:
      "Gain operational visibility with an interactive map of active alerts for quick issue detection. Dive into Advanced Alerts Analysis to pinpoint root causes, track workflows, and resolve issues efficiently, minimizing downtime and enhancing performance.",
    features: [
      "Comprehensive Operational Visibility.",
      "Advanced Alerts Analysis.",
      "Streamlined issue resolution.",
    ],
    media: {
      type: "image",
      src: "/business.jpg",
    },
    buttonText: "Contact Sales",
  },
  {
    title: "Energy Manager",
    heading: "Optimize",
    description:
      "Leverage AI-powered insights to identify energy-saving opportunities across your portfolio. Monitor real-time consumption, benchmark performance, and implement data-driven strategies to reduce costs and carbon footprint.",
    features: [
      "Real-time energy monitoring.",
      "AI-powered recommendations.",
      "Portfolio-wide benchmarking.",
    ],
    media: {
      type: "video",
      src: "/business.mp4",
    },
    buttonText: "Learn More",
    fill: "bg-blue-200",
  },
  {
    title: "Portfolio Manager",
    heading: "Analyze",
    description:
      "Get a comprehensive view of your entire building portfolio with unified dashboards and analytics. Track KPIs, compare performance across assets, and make informed decisions with centralized data management.",
    features: [
      "Unified portfolio dashboard.",
      "Cross-asset analytics.",
      "Performance tracking.",
    ],
    media: {
      type: "image",
      src: "business2.jpg",
    },
    buttonText: "Request Demo",
  },
];

const SectionCards: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 max-w-[1680px] mx-auto">
      {cardsData.map((card, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`flex mx-auto mb-16 w-full h-[600px] px-8 last:mb-0 rounded-bl-3xl rounded-tr-3xl py-8 ${
              index !== 0 ? "mt-16" : ""
            } ${card.fill}`}
          >
            <div
              className={`flex items-center gap-12 h-full ${
                isReversed ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="mb-2 text-sm font-semibold text-cyan-600">
                  {card.title}
                </div>
                <h2 className="mb-6 text-5xl font-bold text-gray-900">
                  {card.heading}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-gray-700">
                  {card.description}
                </p>
                <ul className="mb-10 space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-base font-semibold text-gray-900"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="text-black!">{card.buttonText}</Button>
              </div>

              <div className="flex-1 h-full">
                {card.media.type === "image" ? (
                  <img
                    src={card.media.src}
                    alt={card.heading}
                    className="h-full w-full object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <video
                    src={card.media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionCards;
