"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12 } },
  hover: {
    scale: 1.2,
    color: "#60a5fa",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.9 }
};

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/PLanzinha", label: "GitHub", icon: <Github size={24} /> },
    { href: "https://www.linkedin.com/in/pedro-sousa-racoes", label: "LinkedIn", icon: <Linkedin size={24} /> },
    { href: "mailto:pedrolanzinha1995@gmail.com", label: "Email", icon: <Mail size={24} /> },
  ];

  return (
    <motion.div
      className="flex space-x-5 sm:space-x-6"
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
            className="text-white hover:text-gray-300 transition-colors"
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SocialIcons;