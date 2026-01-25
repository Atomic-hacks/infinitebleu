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
    fill: "bg-blue-50",
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
    fill: "bg-slate-50",
  },
];

const MetricCard: React.FC<{
  icon: any;
  label: string;
  value: string;
  color: string;
}> = ({ icon: Icon, label, value, color }) => (
  <div
    className={`bg-white p-4 sm:p-5 rounded-lg border border-gray-200 ${color}`}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 bg-opacity-10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <p className="text-gray-600 text-xs font-medium uppercase tracking-wide">
      {label}
    </p>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
      {value}
    </h3>
  </div>
);

const EnergyChart = () => (
  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 h-full">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
        Energy vs Occupancy
      </h4>
      <div className="flex space-x-4">
        <span className="flex items-center text-xs sm:text-sm font-medium text-gray-600">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          Energy
        </span>
        <span className="flex items-center text-xs sm:text-sm font-medium text-gray-600">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Occupancy
        </span>
      </div>
    </div>
    <div className="h-48 sm:h-64 md:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={MOCK_CHART_DATA}>
          <defs>
            <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="energy"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEnergy)"
          />
          <Area
            type="monotone"
            dataKey="occupancy"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorOccupancy)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const ESGChart = () => (
  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 h-full">
    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
      ESG Performance
    </h4>
    <div className="space-y-4 sm:space-y-6">
      {[
        { label: "Carbon Emissions", progress: 75, color: "bg-green-500" },
        { label: "Water Usage", progress: 42, color: "bg-blue-500" },
        { label: "Waste Diversion", progress: 60, color: "bg-orange-500" },
        { label: "Renewable Energy", progress: 15, color: "bg-yellow-500" },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-xs sm:text-sm font-medium mb-2">
            <span className="text-gray-700 uppercase">{item.label}</span>
            <span className="text-gray-900">{item.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${item.color} h-2 rounded-full`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-blue-50 rounded-lg border border-blue-200">
      <p className="text-xs sm:text-sm md:text-base text-blue-900 font-medium">
        💡 Your portfolio is 12% above average this month. Great work!
      </p>
    </div>
  </div>
);

const MetricsGrid = () => (
  <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
    <MetricCard
      icon={Zap}
      label="Real-time Load"
      value="482.5 kW"
      color="text-orange-600"
    />
    <MetricCard
      icon={Users}
      label="Occupancy"
      value="1,240"
      color="text-blue-600"
    />
    <MetricCard
      icon={Thermometer}
      label="Temperature"
      value="22.4°C"
      color="text-red-600"
    />
    <MetricCard
      icon={Cloud}
      label="IAQ Score"
      value="94/100"
      color="text-green-600"
    />
  </div>
);

const SectionCards: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {cardsData.map((card, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`rounded-lg py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 border border-gray-200 ${
              index !== 0 ? "mt-12 sm:mt-16 md:mt-20" : ""
            } ${card.fill || "bg-white"}`}
          >
            <div
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-6 sm:gap-10 md:gap-12`}
            >
              <div className="flex-1 w-full">
                <div className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-blue-500 uppercase tracking-wide">
                  {card.title}
                </div>
                <h2 className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {card.heading}
                </h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                  {card.description}
                </p>
                <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm sm:text-base font-medium text-gray-800"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button showArrow className="text-black!">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionCards;
