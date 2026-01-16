import React from "react";
import Button from "../ui/Button";

interface SuccessStory {
  image: string;
  tag: string;
  title: string;
  description: string;
}

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
      "infinite bleu Dx³ combines with Microsoft Azure to provide key capabilities as part of Oxford&appos;s Smart Building strategy",
    description:
      "Oxford deployed infinite bleu Dx³ across 17 buildings connected to the infinite bleu Platform to gain a continuous audit of the devices and systems connected to its building networks.",
  },
];

const SuccessStoriesSection: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-blue-100 to-blue-200 px-8 py-16 rounded-tr-[600px] rounded-bl-[600px] my-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gray-900">
            available device data
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-gray-700">
            Using connected data, infinite bleu has helped property owners and
            building managers save energy, reduce operating costs, optimize
            efficiency, and meet their sustainability goals.
          </p>
          <Button>Explore Success Stories</Button>
        </div>

        {/* Success Story Cards */}
        <div className="grid grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-64">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
                {index === 1 && (
                  <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-gray-900/90 px-6 py-4">
                    <p className="text-lg font-semibold leading-snug text-white">
                      K-12 Career Exploration Campus - Improving Indoor Air
                      Quality
                    </p>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="mb-3 text-xs font-bold tracking-wider text-gray-600">
                  {story.tag}
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900">
                  {story.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  {story.description}
                </p>
                <Button>Learn more</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
