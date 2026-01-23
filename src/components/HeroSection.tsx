import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";

const slides = [
  {
    image: "/home6.jpg",
    headline: "Designing Tomorrow's",
    headlineLine2: "Experience, Today",
    description:
      "Crafting the future of personalized experiences the world needs NEXT.",
    primaryCta: "Discover More",
  },
  {
    image: "/home5.jpg",
    headline: " We Design",
    headlineLine2: "Experiences That Define the Future.",
    description:
      "Transform ideas into reality with our venture design approach and strategic partnerships.",
    primaryCta: "Explore Solutions",
  },
  {
    image: "/home4.jpg",
    headline: "Empowering Ideas ",
    headlineLine2: "Through Design Systems",
    description:
      "Building integrated solutions that scale with your vision and accelerate growth.",
    primaryCta: "Learn More",
  },
];

// Function to randomly color words blue
const colorizeText = (text: string) => {
  const words = text.split(" ");
  const numBlueWords = Math.min(
    Math.floor(Math.random() * 2) + 1,
    words.length
  );
  const blueIndices = new Set();

  while (blueIndices.size < numBlueWords) {
    blueIndices.add(Math.floor(Math.random() * words.length));
  }

  return words.map(
    (word, idx): React.ReactNode => (
      <span key={idx} className={blueIndices.has(idx) ? "text-blue-500" : ""}>
        {word}
        {idx < words.length - 1 ? " " : ""}
      </span>
    )
  );
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                {colorizeText(currentSlide.headline)}
                <br />
                {colorizeText(currentSlide.headlineLine2)}
              </h1>

              <p className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl">
                {currentSlide.description}
              </p>

              <Button showArrow className="border-neutral-600">
                {currentSlide.primaryCta}
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="group relative cursor-pointer touch-manipulation"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 w-12 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-white"
                  : "bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
