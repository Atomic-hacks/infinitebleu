import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-linear-to-b from-[#EAF1FF] to-[#F8FAFF] text-[#0B1223]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold"
        >
          Let’s Build What’s Next.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mt-4 text-[#0B1223]/80 max-w-2xl mx-auto"
        >
          Partner with InfinityBleu to shape meaningful digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          className="mt-8"
        >
          <Button>Get in Touch</Button>
        </motion.div>
      </div>
    </section>
  );
}
