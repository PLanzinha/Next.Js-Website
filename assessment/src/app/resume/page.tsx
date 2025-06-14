"use client";

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
};

const sectionBlockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 17,
      duration: 0.6,
      staggerChildren: 0.15
    },
  },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.15 } },
};

const listStaggerVariants = {
  visible: { transition: { staggerChildren: 0.07 } },
  hidden: {},
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const downloadButtonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.2 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(59,130,246,0.4)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
};


export default function Resume() {
  const workExperience = [
    {
      title: "Quality Assurance Tester",
      company: "DAQA",
      period: "Remote (Contract) | 10/2022 – 5/2025",
      description: "At DAQA, my tasks focused on test planning, execution, as well as reporting any bugs, issues, or defects, so as to identify any potential problems early through a Shift Left Testing approach, I was able to deliver important reports on problems for the projects I worked on. In addition to that, I contributed in the following ways:",
      points: [
        "Participated in comprehensive testing of various projects, applying different QA testing techniques to verify the projects functionality, performance, as well as its security, all following QA best practices mostly in a black box testing environment.",
        "Executed test cases and scenarios based on project requirements, documenting and reporting any defects or issues discovered."
      ]
    },
    {
      title: "Analyst and Software Developer - Consultant for EDP",
      company: "Tekever",
      period: "Lisbon, Portugal | 08/2019 – 08/2022",
      description: "Following the completion of my internship, I was hired full-time at Tekever as an Analyst and Software Developer, moving to another project, where I contributed to the following key initiatives:",
      points: [
        "Played an important role as an Analyst and Software Developer in a new project for EDP (Portugal's leading energy company), having gained experience on a daily basis, with Oracle SQL, C#, and in-house software to develop and test both a website and a mobile application, managing everything through Jira.",
        "Adhered to project requirements by realizing tests over several environments ensuring developments were almost always issue free and adhering to deadlines.",
        "Utilized problem solving skills to optimize performance when needed.",
        "Used Jira and Confluence for project management to improve and track tasks, issues, and progress throughout the full development lifecycle.",
        "Used several techniques to ensure that functionality, performance, and security were as per project requirements, as well as managing to optimize several queries that helped thousands of call center and field agent users."
      ]
    },
    {
      title: "Software Development Intern – Consultant for CUF Hospital",
      company: "Tekever (Internship)",
      period: "Lisbon, Portugal | 05/2019 – 08/2019",
      description: "Joined Tekever as an intern on a team developing a web-based solution for CUF Hospitals. During my internship, I contributed in the following ways:",
      points: [
        "Improved patient data access efficiency, by remodeling CUF Hospital's website user interface.",
        "Contributed to the development of a Web Application using PHP and MySQL for managing call center workers, aiming to increase productivity.",
        "Participated in meetings with client-side managers to gather requirements, discuss features, and provide progress updates."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor in Modern Computer Science",
      institution: "Opit - Open Institute of Technology",
      period: "Remote | 09/2024 – Expected 06/2026"
    },
    {
      degree: "Web Design & Development",
      institution: "World Academy",
      period: "Lisbon, Portugal | 2017 - 2018"
    }
  ];

  const skills = [
    { category: "Testing & QA", items: ["Manual Testing", "Black Box Testing", "Functional Testing", "Regression Testing", "Usability Testing", "Postman", "TestRail", "TestNG"] },
    { category: "Automation", items: ["Selenium", "Playwright", "Cypress"] },
    { category: "Programming", items: ["Python", "C#", "PHP", "JavaScript", "TypeScript", "React", "React.js", "Java"] },
    { category: "Databases", items: ["Oracle SQL", "PostgreSQL", "MySQL"] },
    { category: "Methodologies", items: ["Agile (Scrum)", "Sprint Planning", "Daily Scrum", "Shift-Left Testing", "Kanban", "CI/CD Principles"] },
    { category: "Reporting", items: ["Excel", "Power BI", "Tableau", "Snowflake", "Knime", "Visio", "Lucidchart"] },
    { category: "Tools", items: ["Jira", "Confluence", "Git", "Apache Airflow", "dbt", "SharePoint", "Docker", "Jenkins", "Trello"], span: "md:col-span-2 lg:col-span-1" }
  ];

  const certifications = [
    { name: "Data Engineer in Python", provider: "DataCamp" },
    { name: "Associate Data Engineer in SQL", provider: "DataCamp" },
    { name: "Data Warehousing Concepts", provider: "DataCamp" },
    { name: "KNIME Certification L1", provider: "KNIME Certification" },
    { name: "AWS Getting Started", provider: "Pluralsight" },
    { name: "Tableau Masterclass 2024", provider: "O'Reilly" },
    { name: "SNOWFLAKE An Introduction Course", provider: "O'Reilly" },
    { name: "The Complete Business Analysis Fundamentals", provider: "O'Reilly" },
    { name: "Microsoft Power BI Skills", provider: "O'Reilly" },
    { name: "Azure SQL Data Warehouse Synapse Analytics Service", provider: "O'Reilly" }
  ];
  return (
    <div className="py-8 md:py-12 lg:py-16 overflow-x-hidden">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl rounded-lg text-gray-800"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Summary */}
        <motion.div className="mb-12" variants={sectionBlockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 variants={sectionTitleVariants} className="text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">Summary</motion.h2>
          <motion.p variants={contentVariants} className="leading-relaxed">
            A passionate Quality Assurance Tester with over two and a half years of experience, that is
            complemented by over three years as an Analyst and Software Developer, who is knowledgeable in manual
            and automated testing, Python, and Agile methodologies, web and mobile development, and is always
            eager to learn more.
          </motion.p>
        </motion.div>

        {/* Work Experience */}
        <motion.div className="mb-12" variants={sectionBlockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={sectionTitleVariants} className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Work Experience</motion.h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div key={index} variants={contentVariants} className="mb-6">
                <motion.h3 variants={subHeadingVariants} className="text-xl font-medium text-blue-700">{job.title}</motion.h3>
                <motion.p variants={contentVariants} className="font-semibold">{job.company}</motion.p>
                <motion.p variants={contentVariants} className="text-sm text-gray-500 mb-2">{job.period}</motion.p>
                <motion.p variants={contentVariants} className="mt-2 leading-relaxed">
                  {job.description}
                </motion.p>
                <motion.ul
                  variants={listStaggerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="list-disc pl-6 mt-2 space-y-1 text-gray-700"
                >
                  {job.points.map((point, pIndex) => (
                    <motion.li key={pIndex} variants={listItemVariants}>{point}</motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="mb-12" variants={sectionBlockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 variants={sectionTitleVariants} className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Education</motion.h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={contentVariants}>
                <motion.h3 variants={subHeadingVariants} className="text-xl font-medium text-blue-700">{edu.degree}</motion.h3>
                <motion.p variants={contentVariants} className="font-semibold">{edu.institution}</motion.p>
                <motion.p variants={contentVariants} className="text-sm text-gray-500">{edu.period}</motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Skills */}
        <motion.div className="mb-12" variants={sectionBlockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <motion.h2 variants={sectionTitleVariants} className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Skills</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                className={skillGroup.span || ''}
                variants={contentVariants}
              >
                <motion.h3 variants={subHeadingVariants} className="text-lg font-semibold mb-2">{skillGroup.category}</motion.h3>
                <motion.ul
                  variants={listStaggerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="space-y-1 text-sm text-gray-600"
                >
                  {skillGroup.items.map((item, itemIndex) => (
                    <motion.li key={itemIndex} variants={listItemVariants}>{item}</motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="mb-12" variants={sectionBlockVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={sectionTitleVariants} className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Courses & Certifications</motion.h2>
          <motion.div
            variants={listStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm"
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={listItemVariants}>
                <span className="font-semibold">{cert.name}</span> - {cert.provider}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={downloadButtonVariants}
        >
          <motion.a
            href="/pdf/PedroLanzinhaSousaRacoesResume-June.pdf"
            download
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out text-lg font-medium"
            variants={downloadButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Download Resume as PDF
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}