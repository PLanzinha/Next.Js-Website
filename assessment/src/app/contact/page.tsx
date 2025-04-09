import React from 'react';

export default function Contact() {
    return (
      <div className="px-4 py-8 md:px-8 lg:px-16 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="max-w-lg w-full mx-auto mt-8">
          <p className="mb-6 text-center md:text-left">
            Do you have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <a
                href="mailto:pedrolanzinha1995@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                pedrolanzinha1995@gmail.com
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <a
                 href="tel:+351927151997"
                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                +351 927151997
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tallinn, Estonia
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}