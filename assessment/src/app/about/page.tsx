"use client";

import React from 'react';
import CertificateCarousel, { certificateData } from '../../components/CertificateCarousel';
import { motion, Variants} from 'framer-motion';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const titleAnimationVariants: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: i * 0.15,
        },
    }),
};

const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function About() {
    const whoAmIParagraphs = [
        "As an experienced Analyst and Software Developer, I have over 3 years of hands-on experience with SQL, and C#, as well as having 2 years of experience as a QA Tester, my skillset includes Data Curation, Power Bi, Python, SQL, Knime, Data Analysis, Docker and Machine Learning, with several projects I made both to learn as well as to display my knowledge of these skills.",
        "In my past roles, I had a close collaboration with Product Owners, Stakeholders and Project Managers, utilizing agile methodologies such as Scrum, to deliver solutions in a timely manner, with the usage of refinements, planning sessions, daily stand-ups, and retrospectives, ensuring comprehensibility and communication among all members so as to contribute to project success.",
        "I'm adept at teamwork, working closely with colleagues to analyse data and to translate business needs into technical solutions.",
        "With expertise in modern web technologies, I aim to bring ideas to life through clean, and efficient code."
    ];

    return (
        <div className="px-4 py-8 md:px-8 lg:px-16">
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-12 text-center text-white dark:text-white"
                variants={titleAnimationVariants}
                initial="initial"
                animate="animate"
            > About Me
            </motion.h1>
            <motion.div
                className="max-w-3xl mx-auto mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2
                    className="text-3xl font-semibold mb-6 text-center"
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                >
                </motion.h2>
                {whoAmIParagraphs.map((text, index) => (
                    <motion.p
                        key={index}
                        className="mb-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        variants={paragraphVariants}

                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>

            <motion.div
                className="mt-16 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                custom={1}
            >
                <h2 className="text-3xl font-semibold mb-10 text-center">
                    My Certificates
                </h2>
                <CertificateCarousel certificates={certificateData} />
            </motion.div>
        </div>
    );
}