"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  hover: {
    color: "#93c5fd",
    scale: 1.05,
    originX: 0,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" }
  },
  open: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
};


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  return (
    <nav>
      <motion.ul
        className="hidden md:flex space-x-4 sm:space-x-6 items-center"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href={link.href} className="text-sm lg:text-base hover:text-blue-300 transition-colors">
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-label="Open main menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={28} /> 
        </motion.button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <motion.div
              key="mobile-menu-panel"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-40 bg-gray-800 shadow-xl p-6 flex flex-col"
            >
              <div className="flex justify-end mb-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-label="Close main menu"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={30} />
                </motion.button>
              </div>

              <motion.ul
                className="flex flex-col items-start space-y-5 flex-grow"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={mobileLinkVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Link href={link.href} className="text-xl font-medium text-white hover:text-blue-300 transition-colors py-3 block w-full hover:bg-gray-700 rounded-md px-3">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
               <div className="mt-auto pt-6 border-t border-gray-700 text-center">
                  <p className="text-xs text-gray-500">Pedro Lanzinha © {new Date().getFullYear()}</p>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation;