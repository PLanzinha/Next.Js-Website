"use client";

import SocialIcons from './SocialIcons'
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
};

const copyrightVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-8 sm:py-10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-5 sm:space-y-6">
          <SocialIcons /> 
          <motion.p
            className="text-xs sm:text-sm text-gray-400 text-center"
            variants={copyrightVariants}
          >
            © {new Date().getFullYear()} Designed by Pedro Lanzinha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer