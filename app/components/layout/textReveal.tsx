'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Main App Component
export default function TextReveal() {
  const textToAnimate = "I’m a Full Stack Developer who loves building things that work well and look great. Whether it’s the design users interact with or the logic running behind the scenes, I enjoy creating smooth, meaningful digital experiences from start to finish.";
  const words = textToAnimate.split(" ");

  // Variants for the container to orchestrate the animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word to create a smoother smoke effect
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
   <>
    <div id="About" className='mb-10 max-sm:text-center max-lg:text-center px-4'>
        <p className="mb-2 text-blue-700 text-lg">My Development</p>
        <h1 className="text-4xl dark:text-white font-bold">About</h1>
    </div>
    <div className="flex items-center justify-center font-sans p-4">
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-2xl font-bold text-center  max-w-5xl leading-relaxed"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ marginRight: "12px", marginTop: "10px" }} // Adjust spacing for paragraph
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
   </>
  );
}
