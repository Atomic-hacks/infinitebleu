/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Button from "../ui/Button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Zap, Users, Thermometer, Cloud } from "lucide-react";

// Mock data for charts
const MOCK_CHART_DATA = [
  { time: "00:00", energy: 320, occupancy: 45 },
  { time: "04:00", energy: 280, occupancy: 20 },
  { time: "08:00", energy: 450, occupancy: 380 },
  { time: "12:00", energy: 520, occupancy: 680 },
  { time: "16:00", energy: 480, occupancy: 520 },
  { time: "20:00", energy: 380, occupancy: 180 },
  { time: "24:00", energy: 310, occupancy: 60 },
];

interface SectionCard {
  title: string;
  heading: string;
  description: string;
  features: string[];
  media: {
    type: "image" | "video" | "chart";
    chartType?: "energy" | "esg" | "metrics";
    src?: string;
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
      type: "chart",
      chartType: "metrics",
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
      type: "chart",
      chartType: "energy",
    },
    buttonText: "Learn More",
    fill: "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100",
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
      type: "chart",
      chartType: "esg",
    },
    buttonText: "Request Demo",
    fill: "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100",
  },
];

const MetricCard: React.FC<{
  icon: any;
  label: string;
  value: string;
  color: string;
  delay: number;
}> = ({ icon: Icon, label, value, color, delay }) => (
  <div
    className="group bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className="w-6 h-6" strokeWidth={2.5} />
    </div>
    <p className="text-gray-600 text-sm font-bold uppercase tracking-wide">
      {label}
    </p>
    <h3 className="text-3xl font-black text-gray-900 mt-2">{value}</h3>
  </div>
);

const EnergyChart = () => (
  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm h-full hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-center mb-6 sm:mb-8">
      <h4 className="text-xl sm:text-2xl font-black text-gray-900">
        Energy vs Occupancy
      </h4>
      <div className="flex space-x-4">
        <span className="flex items-center text-sm font-bold text-gray-600">
          <span className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2 shadow-sm"></span>
          Energy
        </span>
        <span className="flex items-center text-sm font-bold text-gray-600">
          <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-2 shadow-sm"></span>
          Occupancy
        </span>
      </div>
    </div>
    <div className="h-64 sm:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={MOCK_CHART_DATA}>
          <defs>
            <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
            strokeWidth={1.5}
          />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              fontWeight: "bold",
            }}
          />
          <Area
            type="monotone"
            dataKey="energy"
            stroke="#3b82f6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorEnergy)"
          />
          <Area
            type="monotone"
            dataKey="occupancy"
            stroke="#10b981"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorOccupancy)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const ESGChart = () => (
  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm h-full hover:shadow-lg transition-all duration-300">
    <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8">
      ESG Performance
    </h4>
    <div className="space-y-6">
      {[
        {
          label: "Carbon Emissions",
          progress: 75,
          color: "from-green-400 to-green-600",
        },
        {
          label: "Water Usage",
          progress: 42,
          color: "from-blue-400 to-blue-600",
        },
        {
          label: "Waste Diversion",
          progress: 60,
          color: "from-orange-400 to-orange-600",
        },
        {
          label: "Renewable Energy",
          progress: 15,
          color: "from-yellow-400 to-yellow-600",
        },
      ].map((item, idx) => (
        <div key={item.label} className="group">
          <div className="flex justify-between text-sm font-black mb-2">
            <span className="text-gray-900 uppercase tracking-wide">
              {item.label}
            </span>
            <span className="text-gray-900 text-lg">{item.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner overflow-hidden">
            <div
              className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-500 shadow-sm group-hover:shadow-md`}
              style={{
                width: `${item.progress}%`,
                animationDelay: `${idx * 100}ms`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 shadow-sm">
      <p className="text-sm sm:text-base text-blue-900 font-bold">
        💡 Your portfolio is 12% above average this month. Great work!
      </p>
    </div>
  </div>
);

const MetricsGrid = () => (
  <div className="grid grid-cols-2 gap-4 sm:gap-6 h-full">
    <MetricCard
      icon={Zap}
      label="Real-time Load"
      value="482.5 kW"
      color="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700"
      delay={0}
    />
    <MetricCard
      icon={Users}
      label="Occupancy"
      value="1,240"
      color="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700"
      delay={100}
    />
    <MetricCard
      icon={Thermometer}
      label="Temperature"
      value="22.4°C"
      color="bg-gradient-to-br from-red-100 to-red-200 text-red-700"
      delay={200}
    />
    <MetricCard
      icon={Cloud}
      label="IAQ Score"
      value="94/100"
      color="bg-gradient-to-br from-green-100 to-green-200 text-green-700"
      delay={300}
    />
  </div>
);

const SectionCards: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      {cardsData.map((card, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`rounded-bl-3xl rounded-tr-3xl sm:rounded-bl-4xl sm:rounded-tr-4xl py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 shadow-md hover:shadow-xl transition-all duration-300 ${
              index !== 0 ? "mt-16 sm:mt-20 md:mt-24" : ""
            } ${card.fill || "bg-gradient-to-br from-slate-50 to-slate-100"}`}
          >
            <div
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 sm:gap-12 md:gap-16`}
            >
              <div className="flex-1 w-full">
                <div className="mb-3 text-xs sm:text-sm font-black text-blue-600 uppercase tracking-widest">
                  {card.title}
                </div>
                <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                  {card.heading}
                </h2>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-700 font-medium">
                  {card.description}
                </p>
                <ul className="mb-6 sm:mb-8 md:mb-10 space-y-3 sm:space-y-4">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm sm:text-base font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button showArrow className="text-black">
                  {card.buttonText}
                </Button>
              </div>

              <div className="flex-1 w-full h-auto">
                {card.media.type === "chart" &&
                  card.media.chartType === "energy" && <EnergyChart />}
                {card.media.type === "chart" &&
                  card.media.chartType === "esg" && <ESGChart />}
                {card.media.type === "chart" &&
                  card.media.chartType === "metrics" && <MetricsGrid />}
                {card.media.type === "image" && (
                  <img
                    src={card.media.src}
                    alt={card.heading}
                    className="h-full w-full object-cover rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                  />
                )}
                {card.media.type === "video" && (
                  <video
                    src={card.media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
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
