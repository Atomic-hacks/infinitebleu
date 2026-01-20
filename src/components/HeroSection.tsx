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
// Function to randomly color words blue
const colorizeText = (text: string) => {
  const words = text.split(" ");
  const numBlueWords = Math.min(
    Math.floor(Math.random() * 2) + 1,
    words.length
  );
  const blueIndices = new Set<number>();

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
    <section
      aria-label="InfinityBleu hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={currentSlide.image}
            alt="Background visual"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 to-black/30" />

      {/* Content */}
      <div className="absolute z-10 max-w-2xl left-16 bottom-1/3 md:left-48 md:bottom-48 flex items-center ">
        <div className="max-w-xl lg:max-w-2xl text-left text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-bold leading-tight sm:leading-snug tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {colorizeText(currentSlide.headline)} <br />
                {colorizeText(currentSlide.headlineLine2)}
              </h1>

              <p className="mt-3 sm:mt-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-prose">
                {currentSlide.description}
              </p>

              <div className="mt-4 sm:mt-6">
                <Button showArrow>{currentSlide.primaryCta}</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative cursor-pointer touch-manipulation"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className="h-0.5 w-8 sm:w-10 md:w-12 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: idx === activeIndex ? "100%" : "0%",
                  }}
                  transition={{
                    duration: idx === activeIndex ? 6 : 0.3,
                    ease: idx === activeIndex ? "linear" : [0.65, 0, 0.35, 1],
                  }}
                />
              </div>
              <div className="absolute inset-0 -m-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full border border-white/30 rounded-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
