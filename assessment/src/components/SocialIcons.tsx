"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.7 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 180, damping: 10 }
  },
  hover: {
    scale: 1.25,
    color: "#60a5fa",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { scale: 0.85 }
};

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/PLanzinha", label: "GitHub", icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { href: "https://www.linkedin.com/in/pedro-sousa-racoes", label: "LinkedIn", icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { href: "mailto:pedrolanzinha1995@gmail.com", label: "Email", icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> },
  ];

  return (
    <motion.div
      className="flex items-center space-x-4 xs:space-x-5 sm:space-x-6"
      variants={socialContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social) => (
        <motion.div
          key={social.label}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href={social.href}
            target={social.label !== "Email" ? "_blank" : undefined}
            rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 p-1"
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SocialIcons;