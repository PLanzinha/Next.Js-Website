"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const pageContainerVariants = {
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
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactItemVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 10, delay: 0.1 }
  }
};


export default function Contact() {
  const contactDetails = [
    {
      icon: <Mail size={22} className="mr-3 text-blue-600 dark:text-blue-400" />,
      label: "Email",
      value: "pedrolanzinha1995@gmail.com",
      href: "mailto:pedrolanzinha1995@gmail.com",
      ariaLabel: "Send an email to Pedro Lanzinha"
    },
    {
      icon: <Phone size={22} className="mr-3 text-green-600 dark:text-green-400" />,
      label: "Phone",
      value: "+351 927151997",
      href: "tel:+351927151997",
      ariaLabel: "Call Pedro Lanzinha"
    },
    {
      icon: <MapPin size={22} className="mr-3 text-purple-600 dark:text-purple-400" />,
      label: "Location",
      value: "Lisbon, Portugal",
      isLink: false,
      ariaLabel: "Location: Lisbon, Portugal"
    },
  ];
  return (
    <motion.div
      className="px-4 py-12 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center sm:text-left"
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        variants={titleVariants}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="max-w-md bg-white/80 dark:bg-gray-800/100 p-6 sm:p-8 rounded-xl shadow-2xl dark:shadow-blue-500/10"
        variants={textBlockVariants}
      >
        <motion.p
          className="mb-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
          variants={textBlockVariants}
        >
          Do you have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </motion.p>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center sm:flex-row sm:items-start"
              variants={contactItemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={iconVariants} className="mb-2 sm:mb-0">
                {item.icon}
              </motion.div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">{item.label}</h3>
                {item.isLink === false ? (
                  <p className="text-gray-600 dark:text-gray-400 text-lg" aria-label={item.ariaLabel}>
                    {item.value}
                  </p>
                ) : (
                  <a
                    href={item.href}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 hover:underline transition-colors duration-200 text-lg"
                    aria-label={item.ariaLabel}
                  >
                    {item.value}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}