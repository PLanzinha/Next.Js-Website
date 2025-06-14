"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const Navigation = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <motion.ul
        className="flex space-x-4 sm:space-x-6"
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
            <Link href={link.href} className="text-sm sm:text-base hover:text-gray-300 transition-colors">
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default Navigation;