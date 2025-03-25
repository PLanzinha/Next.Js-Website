export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    imageUrl?: string
    liveUrl?: string
    codeUrl?: string
  }
  
  export interface Experience {
    title: string
    company: string
    period: string
    responsibilities: string[]
  }
  
  export interface Education {
    degree: string
    institution: string
    period: string
  }
  
  export interface SkillCategory {
    name: string
    skills: string[]
  }  