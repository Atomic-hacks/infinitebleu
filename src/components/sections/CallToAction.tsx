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
      <div className="px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-5xl font-bold text-gray-900">
              Data Integration
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              We have already built an extensive library of drivers, APIs, and
              upload methods to make data ingestion as smooth as possible.
            </p>
            <Button className="">See our Full List of Integrations</Button>
          </div>

          <div className="mb-20 grid grid-cols-13 gap-4">
            {integrationicons.map((logo, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-tr-4xl rounded-bl-4xl bg-blue-100 p-4"
              >
                <img
                  src={logo}
                  alt=""
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-bold text-gray-900">
            See how we've elevated the building operations
          </h2>
          <div className="flex items-start gap-16 rounded-2xl border border-gray-200 bg-white p-12 my-8">
            <div className="flex-1">
              <div className="mb-8 text-6xl leading-none text-gray-300">"</div>
              <p className="mb-12 text-xl leading-relaxed italic text-gray-900">
                infinite bleu improved the data competency of our entire
                property management team. With the infinite bleu Platform, we
                can spot trends in historical HVAC data to understand and
                optimize underperforming sites, leading to 17-25% monthly energy
                savings.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/business.jpg"
                  alt="Robert Woodall"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    Robert Woodall
                  </div>
                  <div className="text-sm text-gray-600">
                    Vice President, Property Technical Manager | Enterprise
                    Workplace Services
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex  items-center justify-center ">
                <img
                  src="/business3.jpg"
                  alt="Fifth Third Bank"
                  className="h-64 w-96 object-cover rounded-bl-3xl rounded-tr-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 px-16 py-12">
            <div>
              <h2 className="mb-2 text-4xl font-bold text-gray-900">
                Connect Buildings in your Future
              </h2>
              <p className="text-base text-gray-700">
                Stay informed of the latest infinite bleu product updates and
                insights
              </p>
            </div>
            <Button>Sign Up for the Newsletter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
