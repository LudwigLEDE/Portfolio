import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const WaterDropHero = () => {
  return (
    <section className="text-slate-100 overflow-hidden bg-slate-900 px-8 py-24 md:px-12 md:py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
              Welcome to My Portfolio
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
              My name is Ludwig Engelhardt
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
              I am in the process of becoming a full stack developer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contentControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      contentControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-slate-900 z-10"
        initial={{ width: "100%" }}
        animate={slideControls}
        variants={{
          visible: { width: 0 },
          hidden: { width: "100%" },
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={contentControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default WaterDropHero;
