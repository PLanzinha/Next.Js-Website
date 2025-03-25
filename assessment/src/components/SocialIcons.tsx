import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <Link 
        href="https://github.com/PLanzinha" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-300 transition"
      >
        <Github size={24} />
      </Link>
      <Link 
        href="https://www.linkedin.com/in/pedro-sousa-racoes" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-gray-300 transition"
      >
        <Linkedin size={24} />
      </Link>
      <Link 
        href="mailto:pedrolanzinha1995@example.com" 
        aria-label="Email"
        className="hover:text-gray-300 transition"
      >
        <Mail size={24} />
      </Link>
    </div>
  )
}

export default SocialIcons;