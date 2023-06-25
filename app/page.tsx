"use client";

import { motion } from "framer-motion";

function fadeWords(text: string, delay: number = 0) {
  // fade
  const chars = text.split("");
  return chars.map((char, index) => {
    return (
      <motion.span
        key={char + "-" + index}
        animate={{
          opacity: [0, 1],
          filter: ["blur(10px)", "blur(0px)"],
          transition: {
            duration: Math.random() * 1 + 1,
            delay: Math.random() * delay + delay,
            ease: "linear",
          },
        }}
        transition={{
          visibility: {
            duration: 0,
          },
        }}
      >
        {char}
      </motion.span>
    );
  });
}

export default function Home() {
  return (
    <section className="h-full">
      <div className="h-full">
        <div className="prose lg:prose-xl prose-sm prose-slate flex flex-col justify-center dark:prose-invert">
          <div className="mb-20">
            <h2 className="font-medium md:text-4xl text-2xl">
              {fadeWords("Hello,", 0.5)}
            </h2>
            <h3 className="font-medium md:text-3xl text-xl space-y-2">
              <span className="block">{fadeWords("I'm Ray", 1)}</span>
              <span className="block">
                {fadeWords("Software developer", 1)}
              </span>
              <span className="block">
                {fadeWords("Amateur digital art", 1)}
              </span>
            </h3>
          </div>

          <div>
            <p className="text-base">
              <motion.span
                animate={{
                  opacity: [0, 1],
                  filter: ["blur(10px)", "blur(0px)"],
                  transition: {
                    duration: Math.random() * 3 + 1,
                    delay: Math.random() * 3 + 1,
                    ease: "linear",
                  },
                }}
              >
                👨🏻‍💻{"  "}
              </motion.span>
              {fadeWords("I'm currently working in driverless industry", 2)}
            </p>
            <p className="text-base">
              <motion.span
                animate={{
                  opacity: [0, 1],
                  filter: ["blur(10px)", "blur(0px)"],
                  transition: {
                    duration: Math.random() * 3 + 1,
                    delay: Math.random() * 3 + 1,
                    ease: "linear",
                  },
                }}
              >
                📖{"  "}
              </motion.span>
              {fadeWords("I'm currently learning React", 2)}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
