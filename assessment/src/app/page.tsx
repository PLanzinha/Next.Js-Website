"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const wavingHandVariants = {
  initial: {
    rotate: 0,
  },
  wave: {
    rotate: [0, 14, -8, 14, -4, 10, 0, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: "easeInOut",
    }
  },
  hover: {
    rotate: [0, 18, -10, 18, -6, 12, 0],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    // textShadow: ["0 0 0px #FFFFFF", "0 0 10px #FFFFFF", "0 0 0px #FFFFFF", "0 0 0px #FFFFFF", "0 0 0px #FFFFFF"],
    transition: {
      duration: 0.7,
      ease: "easeOut",
      /* textShadow: {
         duration: 2.5,
         repeat: Infinity,
         repeatType: "mirror" as const,
         ease: "easeInOut",
       }, */
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1
    },
  },
};

const buttonsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const buttonItemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 12px rgba(59,130,246,0.4)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95
  }
};
export default function Home() {
  return (
    <motion.div
      className="text-center flex flex-col items-center justify-center px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
        variants={titleVariants}
      >
        Hey there{' '}
        <motion.span
          style={{ display: 'inline-block', originX: "70%", originY: "70%" }}
          variants={wavingHandVariants}
          initial="initial"
          animate="wave"
          whileHover="hover"
          className="inline-block"
        >
          👋🏻
        </motion.span>
      </motion.h1>
      <motion.div
        className="mb-8"
        variants={imageVariants}
      >
        <Image
          src="/images/pedro.jpg"
          alt="Pedro Lanzinha"
          width={280}
          height={280}
          className="rounded-full object-cover mx-auto shadow-xl border-4 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
          priority
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10"
      > <strong>
          I am Pedro Lanzinha. An engineer who loves programming, testing, traveling, writing and is a fellow human.
          This is my personal website, my portfolio, where I show what I can do, and what I do best.
        </strong>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        variants={buttonsContainerVariants}
      >
        <motion.div variants={buttonItemVariants} whileHover="hover" whileTap="tap">
          <Link
            href="/portfolio"
            className="
              block
              w-full sm:w-auto
              bg-blue-600 text-white
              px-8 py-3.5
              rounded-lg
              text-lg font-medium
              hover:bg-blue-700
              transition-colors duration-200
              shadow-md hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
            ">
            View My Work
          </Link>
        </motion.div>
        <motion.div variants={buttonItemVariants} whileHover="hover" whileTap="tap">
          <Link
            href="/contact"
            className="
              block
              w-full sm:w-auto
              bg-gray-600 text-white
              px-8 py-3.5
              rounded-lg
              text-lg font-medium
              hover:bg-gray-700
              transition-colors duration-200
              shadow-md hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75
            ">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}