export default function Resume() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">My Resume</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Frontend Developer at Tech Company</h3>
              <p className="text-gray-600">2021 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Developed responsive web applications using React and TypeScript</li>
                <li>Collaborated with designers to implement UI/UX improvements</li>
                <li>Optimized application performance and accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Web Developer Intern at Startup</h3>
              <p className="text-gray-600">2020 - 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Assisted in building and maintaining company website</li>
                <li>Implemented new features based on user feedback</li>
                <li>Conducted website performance audits</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-medium">Bachelor&apos;s in Computer Science</h3>
            <p className="text-gray-600">University Name, 2016 - 2020</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Frontend</h3>
              <ul className="space-y-1">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React, Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Backend</h3>
              <ul className="space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Tools</h3>
              <ul className="space-y-1">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="/resume.pdf" 
            download 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    )
  }