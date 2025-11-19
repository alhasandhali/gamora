import { motion, useScroll } from "motion/react";

const AnimatedBox = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        backgroundImage: "linear-gradient(to bottom right, #4f46e5, #a855f7)",
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        width: "100%",
        zIndex: 1000,
      }}
    />
  );
};

export default AnimatedBox;
