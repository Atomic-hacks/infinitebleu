import React from "react";

const footerData = {
  Platform: [
    "Portfolio Benchmarking",
    "Switch Rx: A Digital Building Prescription",
    "Switch OpX: Operational Excellence",
    "Switch Dx³ Discovery Tool",
    "Integrations",
  ],
  Industry: [
    "Commercial Real Estate",
    "Retail",
    "Healthcare",
    "Education",
    "Hospitality",
    "Government",
    "Financial Services",
  ],
  "Use Cases": [
    "Sustainable Buildings",
    "Healthy Buildings",
    "Digital Buildings",
  ],
  Resources: [
    "Blog",
    "Webinars",
    "Customer Success Stories",
    "Public Library",
    "Roadmap",
    "Platform Release Notes",
  ],
  Company: ["About Us", "Impact", "Careers", "Newsroom", "Contact Us"],
  Support: [
    "Customer Support",
    "Terms & Conditions",
    "Privacy Policy",
    "Knowledge Base",
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-blue-300 px-4 sm:px-6 md:px-8 pb-0 pt-12 sm:pt-16 rounded-bl-[200px] sm:rounded-bl-[350px] md:rounded-bl-[500px] rounded-tr-[200px] sm:rounded-tr-[350px] md:rounded-tr-[500px]">
      <button className="absolute right-4 sm:right-6 md:right-8 top-6 sm:top-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-lime-400 text-slate-800 transition-colors hover:bg-lime-300">
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-24">
          <div className="flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Switch Automation"
              className="h-16 sm:h-20 w-auto rounded-bl-3xl rounded-tr-3xl sm:rounded-bl-4xl sm:rounded-tr-4xl"
            />
          </div>

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12 w-full">
            {Object.entries(footerData).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold text-neutral-800">
                  {title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-neutral-900 transition-colors hover:text-neutral-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-6 sm:pb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/icons/intel.png"
              alt="Intel Market Ready"
              className="h-10 sm:h-12"
            />
            <img
              src="/icons/dell.png"
              alt="Intel Partner"
              className="h-10 sm:h-12"
            />
          </div>

          <p className="mt-3 sm:mt-4 text-xs text-gray-500">
            Intel and the Intel logo are trademarks of the Intel Corporation in
            the U.S. and/or other countries.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] rounded-tl-full bg-blue-500"></div>
    </footer>
  );
};

export default Footer;
