import React from "react";
import Button from "../ui/Button";

const integrationicons = [
  "/icons/apple.png",
  "/icons/carbon.png",
  "/icons/dell.png",
  "/icons/google.png",
  "/icons/ibm.png",
  "/icons/intel.png",
  "/icons/java.png",
  "/icons/twitter.png",
  "/icons/twitch.png",
  "/icons/carbon.png",
  "/icons/amd.png",
  "/icons/atandt.png",
  "/icons/ebay.png",
  "/icons/github.png",
  "/icons/google.png",
  "/icons/pinterest-logo.png",
  "/icons/dell.png",
  "/icons/windows.png",
  "/icons/whatsapp.png",
  "/icons/mcdonalds.png",
  "/icons/location.png",
  "/icons/java.png",
  "/icons/apple.png",
  "/icons/twitter.png",
  "/icons/java.png",
  "/icons/apple.png",
];

const CallToAction: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Data Integration Section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Data Integration
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700 px-4">
              We have already built an extensive library of drivers, APIs, and
              upload methods to make data ingestion as smooth as possible.
            </p>
            <Button className="text-black!">
              See our Full List of Integrations
            </Button>
          </div>

          <div className="mb-12 sm:mb-16 md:mb-20 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-13 gap-3 sm:gap-4">
            {integrationicons.map((logo, index) => (
              <div
                key={index}
                className="flex h-20 sm:h-24 items-center justify-center rounded-tr-3xl rounded-bl-3xl sm:rounded-tr-4xl sm:rounded-bl-4xl bg-blue-100 p-3 sm:p-4"
              >
                <img
                  src={logo}
                  alt=""
                  className="max-h-10 sm:max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            See how we've elevated the building operations
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 md:p-12 my-6 sm:my-8">
            <div className="flex-1">
              <div className="mb-6 sm:mb-8 text-5xl sm:text-6xl leading-none text-gray-300">
                "
              </div>
              <p className="mb-8 sm:mb-12 text-lg sm:text-xl leading-relaxed italic text-gray-900">
                infinite bleu improved the data competency of our entire
                property management team. With the infinite bleu Platform, we
                can spot trends in historical HVAC data to understand and
                optimize underperforming sites, leading to 17-25% monthly energy
                savings.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/business.jpg"
                  alt="Robert Woodall"
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">
                    Robert Woodall
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Vice President, Property Technical Manager | Enterprise
                    Workplace Services
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="flex items-center justify-center">
                <img
                  src="/business3.jpg"
                  alt="Fifth Third Bank"
                  className="h-48 sm:h-56 md:h-64 w-full lg:w-80 xl:w-96 object-cover rounded-bl-2xl rounded-tr-2xl sm:rounded-bl-3xl sm:rounded-tr-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 px-6 sm:px-10 md:px-16 py-8 sm:py-10 md:py-12">
            <div className="text-center sm:text-left">
              <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Connect Buildings in your Future
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Stay informed of the latest infinite bleu product updates and
                insights
              </p>
            </div>
            <Button className="text-black!">Sign Up for the Newsletter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
