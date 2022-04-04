/**
 * @file AnimatedDiv.js
 * @author Devin Arena
 * @description Handles animation logic for its children.
 * @since 4/3/2022
 **/

import { motion } from "framer-motion";

const AnimatedDiv = ({ initial, animate, time, delay, children }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: time, delay }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedDiv };
