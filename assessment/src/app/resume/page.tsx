import React from 'react';

export default function Resume() {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-8 text-center">My Resume</h1>
      {/* --- Experience column --- */}
      <div className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Work Experience</h2>
        <div className="space-y-6">
          {/* Job 1 DAQA */}
          <div>
            <h3 className="text-xl font-medium">Quality Assurance (QA) Tester at DAQA</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remote (Contract) | 10/2022 – 10/2024</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Took part in doing comprehensive testing of various applications, while applying different testing methods and techniques to ensure functionality, performance, and security.</li>
              <li>Executed test cases and scenarios based on project requirements, to document any issues to the program.</li>
              <li>Collaborated with colleagues to document and report bugs and defects according to QA training and testing requirements.</li>
            </ul>
          </div>

          {/* Job 2 Tekever*/}
          <div>
            <h3 className="text-xl font-medium">Analyst and Software Developer - Consultant for EDP at Tekever</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lisbon, Portugal | 08/2019 – 08/2022</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Played an important role as an Analyst and Software Developer in a new project for EDP (Portugal's leading energy company), utilizing C#, SQL, and in-house software to develop and test a Website as well as a Mobile application.</li>
              <li>Adhered to project requirements by realizing tests over several environments ensuring developments were almost always issue free and adhering to deadlines.</li>
              <li>Utilized problem solving skills to optimize performance when needed.</li>
              <li>Used Jira and Confluence for project management to improve track tasks, issues, and progress throughout the full development lifecycle.</li>
              <li>Employed techniques to ensure that functionality, performance, and security were as required, managing to optimize several queries that helped users.</li>
            </ul>
          </div>

          {/* Job 3 Tekever 2*/}
          <div>
            <h3 className="text-xl font-medium">Intern Consultant for CUF Hospital at Tekever (Internship)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lisbon, Portugal | 05/2019 – 08/2019</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Managed to improve patient data access efficiency, by revamping CUF Hospital's website user interface design.</li>
              <li>Contributed to the development of a Web Application using PHP and MySQL for managing call center workers, aiming to increase productivity.</li>
              <li>Participated in meetings with client-side managers to gather requirements, discuss features, and provide progress updates.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Education Section --- */}
      <div className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Bachelor in Modern Computer Science</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Opit Open Institute of Technology | Remote | 01/2024 - 01/2026</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Web Design & Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">World Academy | Lisbon, Portugal | 2017 - 2018</p>
          </div>
        </div>
      </div>

      {/* --- Skills column --- */}
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Data & Languages</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>Python</li>
              <li>SQL (Oracle, PostgreSQL, MySQL)</li>
              <li>C#</li>
              <li>PHP</li>
              <li>ETL</li>
              <li>Data Curation</li>
            </ul>
          </div>
          {/* Column 2: Platforms & Tools */}
          <div>
            <h3 className="text-lg font-medium mb-2">Platforms & Tools</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>Power BI</li>
              <li>Tableau</li>
              <li>Knime</li>
              <li>Snowflake</li>
              <li>dbt</li>
              <li>Airflow</li>
              <li>Excel</li>
              <li>Wordpress</li>
              <li>Docker</li>
            </ul>
          </div>
          {/* Column 3: Concepts & Methodologies */}
          <div>
            <h3 className="text-lg font-medium mb-2">Concepts & Methodologies</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>Data Analysis</li>
              <li>Visualizations</li>
              <li>Data Cleaning</li>
              <li>Web Scraping</li>
              <li>Testing / QA</li>
              <li>Agile Methodologies</li>
              <li>Team Work</li>
              <li>Communication</li>
              <li>Presentation</li>
              <li>Puzzle Solving</li>
            </ul>
          </div>
        </div>
      </div>

       {/* --- Certification Section (Added) --- */}
       <div className="mb-12 max-w-4xl mx-auto">
         <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Certifications</h2>
         <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div><span className="font-medium">Exploratory Data Analysis with Python</span> - Pluralsight</div>
            <div><span className="font-medium">AWS Getting Started</span> - Pluralsight</div>
            <div><span className="font-medium">Data Warehousing Concepts</span> - DataCamp</div>
            <div><span className="font-medium">Introduction to SQL</span> - DataCamp</div>
            <div><span className="font-medium">Intermediate SQL</span> - DataCamp</div>
            <div><span className="font-medium">The Complete Business Analysis Fundamentals</span> - O'Reilly</div>
            <div><span className="font-medium">Tableau Masterclass 2024</span> - O'Reilly</div>
            <div><span className="font-medium">Microsoft Power BI Skills</span> - O'Reilly</div>
            <div><span className="font-medium">KNIME Certification L1</span> - KNIME Certification</div>
            <div><span className="font-medium">Azure SQL Data Warehouse Synapse Analytics Service</span> - O'Reilly</div>
            <div><span className="font-medium">SNOWFLAKE - An Introduction Course</span> - O'Reilly</div>
         </div>
       </div>


      {/* --- Download Button --- */}
      <div className="text-center mt-8">
        <a
          href="/PedroLanzinhaCV_November.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}