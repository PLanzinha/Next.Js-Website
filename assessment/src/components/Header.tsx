"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import Navigation from './Navigation';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
  },
};

const Header = () => {
  return (
    <motion.header
      className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link
            href="/"
            className="flex items-center group text-xl font-bold transition-colors hover:text-blue-300"
          >
            <div className="relative w-8 h-8 mr-2 transition-transform duration-300 group-hover:scale-110 show-under-400">
              <Image
                src="/images/P_3.png"
                alt="PL Icon"
                fill
                sizes="32px"
                className="object-contain rounded-sm"
                priority
              />
            </div>
            <span className="hide-under-400 whitespace-nowrap">Pedro Lanzinha</span>
          </Link>
        </motion.div>
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;