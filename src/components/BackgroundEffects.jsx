import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          fixed
          top-[-120px]
          left-[-120px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          fixed
          bottom-[-120px]
          right-[-120px]
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[120px]
          rounded-full
          -z-10
        "
      />
    </>
  );
};

export default BackgroundEffects;