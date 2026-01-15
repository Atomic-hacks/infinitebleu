import React from "react";
import TrustedPage from "./sections/TrustedPage";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-16 flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
          Powering the Transition to Digital FM.
          <span className="block text-blue-700 mt-2">
            Save money. Support your team. Improve your KPIs.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
          Switch Automation empowers teams digitizing and decarbonizing the
          world’s largest building portfolios. Our platform delivers tools to
          optimize operations, validate repairs, maximize ROI, enhance tenant
          comfort, and streamline reporting.
        </p>

        {/* Video */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67dbcd3da1ea83e165cd823e_Switch-Dx3.png"
          >
            <source
              src="https://designsystem.switchautomation.com/images/Muted_videos/Dx3-Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Trusted Logos / Section */}
        <div className="w-full pt-10">
          <TrustedPage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
