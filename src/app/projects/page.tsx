'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const projects = [
  {
    title: '.NET + Python Secure API Services',
    description: 'Designed and delivered secure backend APIs with authentication, rate limiting, and structured logging for production workloads.',
    tags: ['.NET', 'Python', 'Authentication', 'Rate Limiting'],
    github: '#',
    demo: '#',
    category: 'backend',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'GitLab CI/CD Pipeline Standardization',
    description: 'Built standardized build, test, and release pipelines with linting, security scans, and rollback-friendly deployment strategies.',
    tags: ['GitLab CI/CD', 'Pipeline Linting', 'Security Scans', 'Release Automation'],
    github: '#',
    demo: '#',
    category: 'cloud',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Docker + AKS + Helm Deployments',
    description: 'Containerized services with Docker and deployed to AKS using Helm charts and environment-specific values across release environments.',
    tags: ['Docker', 'AKS', 'Helm', 'Kubernetes'],
    github: '#',
    demo: '#',
    category: 'cloud',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Azure Functions Automation Workflows',
    description: 'Developed event-driven Azure Functions for asynchronous processing and automation of backend operations.',
    tags: ['Azure Functions', 'Serverless', 'Automation', 'Cloud'],
    github: '#',
    demo: '#',
    category: 'cloud',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'SQL Server and MongoDB Performance Tuning',
    description: 'Improved schema and query performance using indexing, query optimization, and deployment-safe change patterns.',
    tags: ['SQL Server', 'MongoDB', 'Indexing', 'Query Tuning'],
    github: '#',
    demo: '#',
    category: 'backend',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'DACPAC Database Deployment Workflows',
    description: 'Automated database schema deployments with DACPAC and integrated promotion workflows into CI/CD pipelines.',
    tags: ['DACPAC', 'Database DevOps', 'SQL Server', 'CI/CD'],
    github: '#',
    demo: '#',
    category: 'cloud',
    gradient: 'from-emerald-500 to-lime-500',
  },
  {
    title: 'ASP.NET MVC/Web API Full-Stack Delivery',
    description: 'Built web applications with ASP.NET MVC/Web API, Entity Framework, and secure frontend integrations across CRUD-heavy modules.',
    tags: ['ASP.NET MVC', 'Web API', 'Entity Framework', 'JavaScript'],
    github: '#',
    demo: '#',
    category: 'web',
    gradient: 'from-sky-500 to-blue-600',
  },
];

const categories = ['all', 'backend', 'cloud', 'web', 'ai'];

const categoryLabels: Record<string, string> = {
  all: 'All Projects',
  backend: 'Backend Systems',
  cloud: 'Cloud & Data',
  web: 'Web Development',
  ai: 'AI / ML',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Project Portfolio"
            subtitle="A showcase of my professional and personal projects"
          />

          {/* Category Filter */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Gradient header */}
                  <div className={`h-32 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}>
                    <span className="text-white/20 text-6xl font-bold">{project.title.charAt(0)}</span>
                    {/* Overlay with links on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
