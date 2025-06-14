"use client";

import SocialIcons from './SocialIcons'
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <SocialIcons />
          <motion.p
            className="text-xs sm:text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Designed by Pedro Lanzinha. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer