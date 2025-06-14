"use client";

import Link from 'next/link';
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
      className="bg-gray-800 text-white sticky top-0 z-50 shadow-md"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center"> 
        <motion.div
          whileHover={{ scale: 1.03, color: "#60a5fa" }} 
          transition={{ type: "spring", stiffness: 400, damping: 15 }} 
        >
          <Link href="/" className="flex items-center group text-2xl font-bold transition-colors hover:text-blue-400"> 
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-110"> 
             {/* <Image
                src="/P_3.png"
                alt="Pedro Lanzinha Logo" 
                fill 
                sizes="(max-width: 640px) 36px, 40px" 
                className="object-contain rounded-sm" 
                priority 
              /> */}
            </div>
            <span className="whitespace-nowrap">Pedro Lanzinha</span> 
          </Link>
        </motion.div>
        <Navigation />
      </div>
    </motion.header>
  )
}

export default Header;