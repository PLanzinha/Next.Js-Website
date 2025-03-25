interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    imageUrl?: string
    liveUrl?: string
    codeUrl?: string
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store with product listings, cart functionality, and checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location search.',
      technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ]
  
  export default function Portfolio() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500">Project Image</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }  