import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Basic Python Exercises',
    description: 'A collection of basic Python exercises to practice Python knowledge.',
    technologies: ['Python'],
    codeUrl: 'https://github.com/PLanzinha/Basic-Python-Exercises'
  },
  {
    id: 2,
    title: 'Python Calculator with GUI',
    description: 'A calculator application made in Python using Tkinter for the graphical user interface.',
    technologies: ['Python', 'Tkinter'],
    codeUrl: 'https://github.com/PLanzinha/Python-Calculator-with-GUI'
  },
  {
    id: 3,
    title: 'Python YouTube Downloader With GUI',
    description: 'A YouTube downloader application made in Python with a GUI using Tkinter.',
    technologies: ['Python', 'Tkinter'],
    codeUrl: 'https://github.com/PLanzinha/Python-Youtube-Downloader-With-GUI'
  },
  {
    id: 4,
    title: 'Python Television Sound Remote Control',
    description: 'A remote control made with Python to control and restrict sound levels.',
    technologies: ['Python'],
    codeUrl: 'https://github.com/PLanzinha/Python-Television-Sound-Remote-Control'
  },
  {
    id: 5,
    title: 'Python Discord Music Bot',
    description: 'A music bot for Discord made with Python.',
    technologies: ['Python', 'Discord API'],
    codeUrl: 'https://github.com/PLanzinha/Python-Discord-Music-Bot'
  },
  {
    id: 6,
    title: 'Python Discord Weather Bot',
    description: 'A weather bot for Discord made with Python.',
    technologies: ['Python', 'Discord API'],
    codeUrl: 'https://github.com/PLanzinha/Python-Discord-Weather-Bot'
  },
  {
    id: 7,
    title: 'Python Web Scraper',
    description: 'A web scraping tool built with Python to extract data from websites.',
    technologies: ['Python', 'BeautifulSoup'],
    codeUrl: 'https://github.com/PLanzinha/Python-Web-Scraper'
  },
  {
    id: 8,
    title: 'Python Data Analysis',
    description: 'A project demonstrating data analysis techniques using Python libraries.',
    technologies: ['Python', 'Pandas', 'NumPy'],
    codeUrl: 'https://github.com/PLanzinha/Python-Data-Analysis'
  },
  {
    id: 9,
    title: 'Python Flask Blog',
    description: 'A simple blog application built with Flask, featuring user authentication and CRUD functionality.',
    technologies: ['Python', 'Flask', 'SQLite'],
    codeUrl: 'https://github.com/PLanzinha/Python-Flask-Blog'
  },
  {
    id: 10,
    title: 'Python Chat Application',
    description: 'A real-time chat application implemented using Python and sockets.',
    technologies: ['Python', 'Sockets'],
    codeUrl: 'https://github.com/PLanzinha/Python-Chat-Application'
  },
  {
    id: 11,
    title: 'Python Image Processing',
    description: 'A collection of image processing scripts using Python and OpenCV.',
    technologies: ['Python', 'OpenCV'],
    codeUrl: 'https://github.com/PLanzinha/Python-Image-Processing'
  },
  {
    id: 12,
    title: 'Python Machine Learning Models',
    description: 'Implementation of various machine learning models using Python and scikit-learn.',
    technologies: ['Python', 'scikit-learn'],
    codeUrl: 'https://github.com/PLanzinha/Python-Machine-Learning-Models'
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
        Some of my Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-6 bg-white dark:bg-gray-800 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-50">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[80px] flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors text-sm"
                  >
                    Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                  >
                    Source Code
                  </a>
                )}
                {!project.liveUrl && !project.codeUrl && (
                  <span className="flex-1 text-center py-2 px-4 text-gray-400 dark:text-gray-500 text-sm italic">
                    No links available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
