import { motion } from "framer-motion";

const features = [
  {
    title: "Design",
    body: "Human-centered systems that translate brand and vision into clarity across every touchpoint.",
  },
  {
    title: "Technology",
    body: "Composable platforms, APIs, and data flows that scale experiences with elegance.",
  },
  {
    title: "Innovation",
    body: "R&D and venture design to incubate what’s next — from concept to market impact.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white text-[#0B1223]">
      <div className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 * idx }}
              className="bg-white border border-[#E7ECF6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1 w-12 bg-[#245CFF] rounded-full mb-4" />
              <h4 className="text-lg font-semibold">{f.title}</h4>
              <p className="text-[#0B1223]/70 mt-2 text-sm leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
