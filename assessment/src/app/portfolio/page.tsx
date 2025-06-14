"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages_url: string;
  fork: boolean;
  pushed_at: string;
  owner?: {
    avatar_url?: string;
  };
}
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  lastUpdated: string;
}
const GITHUB_USERNAME = "PLanzinha";
const LOAD_ONLY_ONE_PROJECT_FOR_TESTING = false;
const transformRepoToProject = async (repo: GitHubRepo): Promise<Project> => {
  const techSet = new Set<string>(repo.topics || []);
  if (repo.language) {
    techSet.add(repo.language);
  }
  try {
    const langRes = await fetch(repo.languages_url);
    if (langRes.ok) {
      const languagesData = await langRes.json();
      const detectedLanguages = Object.keys(languagesData);
      detectedLanguages.forEach((lang) => techSet.add(lang));
    } else {
      console.warn(
        `Failed to fetch languages for ${repo.name}: ${langRes.status}`
      );
    }
  } catch (error) {
    console.warn(`Error fetching languages for ${repo.name}:`, error);
  }
  let finalTechnologies = Array.from(techSet)
    .filter((tech) => tech && tech.trim() !== "")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  if (finalTechnologies.length === 0) {
    finalTechnologies = ["N/A"];
  }
  const formattedTitle = repo.name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  let projectImageUrl = `https://opengraph.githubassets.com/1/${repo.full_name}`;
  const coverImageTopic = repo.topics.find((topic) =>
    topic.startsWith("cover-image:")
  );
  if (coverImageTopic) {
    const urlPart = coverImageTopic.substring("cover-image:".length);
    if (urlPart.startsWith("http://") || urlPart.startsWith("https://")) {
      projectImageUrl = urlPart;
    }
  }
  return {
    id: repo.id,
    title: formattedTitle,
    description:
      repo.description || "No description provided for this project.",
    technologies: finalTechnologies,
    liveUrl:
      repo.homepage && repo.homepage.trim() !== "" ? repo.homepage : undefined,
    codeUrl: repo.html_url,
    imageUrl: projectImageUrl,
    lastUpdated: repo.pushed_at,
  };
};
const pageElementVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const portfolioGridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};
export default function Portfolio() {
  const [allFetchedProjects, setAllFetchedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  useEffect(() => {
    const fetchProjectsAndLanguages = async () => {
      setError(null);
      try {
        let apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=100`;
        if (LOAD_ONLY_ONE_PROJECT_FOR_TESTING) {
          apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=1`;
          console.log("--- TESTING MODE: Loading only 1 project ---");
        }
        const res = await fetch(apiUrl);
        if (!res.ok) {
          const errorData = await res
            .json()
            .catch(() => ({ message: "Unknown API error" }));
          throw new Error(
            `GitHub API request failed: ${res.status} - ${
              errorData.message || "Could not fetch projects"
            }`
          );
        }
        const repos: GitHubRepo[] = await res.json();
        const reposArray = Array.isArray(repos) ? repos : [repos];
        const filteredRepos = reposArray.filter((repo) => !repo.fork);
        const projectPromises = filteredRepos.map((repo) =>
          transformRepoToProject(repo)
        );
        const resolvedProjects = await Promise.all(projectPromises);
        const sortedProjects = resolvedProjects.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        setAllFetchedProjects(sortedProjects);
      } catch (err) {
        console.error("Error fetching projects and languages:", err);
        setError(
          err instanceof Error
            ? err.message
            : "An unknown error occurred while processing projects."
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjectsAndLanguages();
  }, []);
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    allFetchedProjects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (tech && tech !== "N/A") techSet.add(tech);
      });
    });
    return Array.from(techSet).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  }, [allFetchedProjects]);
  const handleTechToggle = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTechnologies([]);
  };
  const filteredProjects = useMemo(() => {
    if (allFetchedProjects.length === 0 && isLoading) return [];

    return allFetchedProjects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearchTerm =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );
      const matchesTechnologies =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.every((tech) =>
          project.technologies
            .map((t) => t.toLowerCase())
            .includes(tech.toLowerCase())
        );
      return matchesSearchTerm && matchesTechnologies;
    });
  }, [searchTerm, selectedTechnologies, allFetchedProjects, isLoading]);
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center min-h-screen flex flex-col justify-center items-center">
        <div role="status" className="flex flex-col items-center">
          <svg
            className="w-10 h-10 animate-spin text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>

          <span className="sr-only">Loading...</span>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Loading projects from GitHub...
          </p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div
          className="bg-red-100 dark:bg-red-800/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline ml-2"> {error}</span>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Please try refreshing the page or check the console for more
            details.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-gray-800 dark:text-gray-100"
        variants={pageElementVariants}
        initial="hidden"
        animate="visible"
      >
        My Portfolio Projects
      </motion.h1>
      <motion.div
        className="mb-10 sm:mb-12 max-w-2xl mx-auto p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/60 rounded-xl shadow-lg"
        variants={pageElementVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.1,
        }}
      >
        <div className="grid grid-cols-1 gap-4 items-end">
          <div>
            <input
              type="text"
              id="search-projects"
              placeholder="e.g., Python, Discord Bot, AI..."
              className="
              w-full
              px-4 py-3
              border border-gray-300 dark:border-gray-600
              rounded-full shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              transition-shadow
            "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {(searchTerm || selectedTechnologies.length > 0) && (
            <div className="text-center mt-2">
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium py-2"
              >
                Clear All Filters
              </button>
            </div>
          )}{" "}
        </div>
        {allTechnologies.length > 0 && (
          <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2.5 text-center">
              Filter by Technology (
              {selectedTechnologies.length > 0
                ? `${selectedTechnologies.length} selected`
                : "All"}
              ):
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {" "}
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechToggle(tech)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ease-in-out ${
                    selectedTechnologies.includes(tech)
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md ring-2 ring-blue-400 dark:ring-blue-500 ring-offset-1 dark:ring-offset-gray-800"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-sm"
                  }`}
                >
                  {" "}
                  {tech}{" "}
                </button>
              ))}{" "}
            </div>
          </div>
        )}{" "}
      </motion.div>
      {!isLoading && filteredProjects.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={portfolioGridVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {" "}
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col group"
                variants={projectCardVariants}
                exit="exit"
                layout
              >
                <a
                  href={project.liveUrl || project.codeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[16/9] overflow-hidden relative bg-gray-200 dark:bg-gray-700"
                >
                  <img
                    src={project.imageUrl}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/400x225/e0e0e0/757575?text=Preview+Not+Available";
                      target.alt = `${project.title} - Preview not available`;
                    }}
                  />
                </a>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {" "}
                    {project.title}{" "}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 min-h-[60px] flex-grow line-clamp-3">
                    {" "}
                    {project.description}{" "}
                  </p>
                  {project.technologies &&
                    project.technologies.length > 0 &&
                    project.technologies[0] !== "N/A" && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {" "}
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 text-[11px] rounded-full ${
                              selectedTechnologies
                                .map((s) => s.toLowerCase())
                                .includes(tech.toLowerCase())
                                ? "bg-blue-100 dark:bg-blue-700/60 text-blue-700 dark:text-blue-200 ring-1 ring-blue-400 dark:ring-blue-500"
                                : "bg-gray-100 dark:bg-gray-700/70 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {" "}
                            {tech}{" "}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 text-[11px] rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-500 dark:text-gray-400">
                            +{project.technologies.length - 4}
                            more
                          </span>
                        )}{" "}
                      </div>
                    )}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    {" "}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors text-xs sm:text-sm font-medium shadow-sm hover:shadow-md"
                        title="View Live Demo"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                      flex-1
                      text-center
                      py-2 px-3
                      rounded-md
                      border border-gray-300 dark:border-gray-600
                      text-gray-700 dark:text-gray-300
                      hover:bg-gray-100 dark:hover:bg-gray-700/70
                      transition-colors
                      text-xs sm:text-sm
                      font-medium
                      shadow-sm hover:shadow-md${
                        !project.liveUrl ? "w-full" : ""
                      }`}
                        title="View on GitHub"
                      >
                        View on GitHub
                      </a>
                    )}{" "}
                  </div>
                </div>
              </motion.div>
            ))}{" "}
          </AnimatePresence>
        </motion.div>
      )}
      {!isLoading && !error && filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <svg
            className="mx-auto mb-6 h-24 w-24 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10h.01M15 10h.01m-6 6.172a4 4 0 015.656 0M12 6v.01"
            />
          </svg>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No projects match the current filters.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Try adjusting your filters.
          </p>
        </motion.div>
      )}{" "}
    </div>
  );
}
