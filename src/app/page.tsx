'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronDown, FaReact, FaQuoteLeft, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiKubernetes, SiGitlab, SiMicrosoftazure, SiDocker, SiMongodb, SiOracle } from 'react-icons/si';
import TypeWriter from '@/components/TypeWriter';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

const skills = [
  { name: '.NET', icon: SiDotnet, color: 'text-purple-500' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-500' },
  { name: 'Azure', icon: SiMicrosoftazure, color: 'text-blue-500' },
  { name: 'GitLab CI/CD', icon: SiGitlab, color: 'text-orange-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
  { name: 'SQL Server', icon: FaDatabase, color: 'text-indigo-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Oracle', icon: SiOracle, color: 'text-red-600' },
];

const featuredProjects = [
  {
    title: 'GitLab CI/CD Standardization',
    description: 'Designed standardized build, test, security scan, and release pipelines with rollback-friendly deployment patterns.',
    tags: ['GitLab CI/CD', 'Security Scans', 'Release Engineering'],
    category: 'Backend',
  },
  {
    title: 'AKS + Helm Platform Deployments',
    description: 'Containerized services with Docker and deployed to AKS using Helm and environment-specific values to reduce configuration drift.',
    tags: ['AKS', 'Helm', 'Docker', 'Kubernetes'],
    category: 'Cloud',
  },
  {
    title: 'Database Deployment Automation',
    description: 'Implemented automated database deployment workflows, including DACPAC, and improved query performance through indexing and tuning.',
    tags: ['SQL Server', 'MongoDB', 'DACPAC', 'Performance'],
    category: 'Backend',
  },
];

const testimonials = [
  {
    quote: 'Nikhil is highly dependable and technically strong. He consistently takes ownership and delivers clean, scalable solutions.',
    name: 'Former Colleague',
    role: 'Senior Engineer',
  },
  {
    quote: 'Working with Nikhil has always been productive. He communicates clearly and executes complex tasks with strong engineering discipline.',
    name: 'Team Lead',
    role: 'Engineering Manager',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            >
              Hi, I&apos;m <span className="text-gradient">Nikhil Chowdary</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-mono"
            >
              <TypeWriter
                words={[
                  'Senior Software Engineer',
                  'Full Stack .NET Engineer',
                  'Cloud/DevOps Engineer',
                  'Data & ETL Engineer',
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Building cloud-native microservices, secure APIs, and ETL/data solutions across
              finance, banking, and healthcare domains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <FaChevronDown className="text-gray-400 dark:text-gray-500 text-2xl" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section id="about-preview" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading title="About Me" subtitle="A glimpse into who I am" />
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I&apos;m a Software Engineer with 5+ years of experience building cloud-native
                  microservices, full-stack web applications, and data pipelines with Python and
                  .NET.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  I focus on secure APIs, GitLab CI/CD automation, AKS and Helm deployments, and
                  production observability with Dynatrace.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
                >
                  Learn more about me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Nikhil Chowdary"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-600/20 rounded-2xl -z-10" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter target={5} suffix="+" label="Years Experience" />
              <AnimatedCounter target={20} suffix="+" label="Projects Delivered" />
              <AnimatedCounter target={20} suffix="+" label="Technologies" />
              <AnimatedCounter target={4} suffix="" label="Companies" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Technical Skills"
              subtitle="Core technologies I work with daily"
              centered
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <skill.icon className={`text-4xl mx-auto mb-3 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/skills"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
              >
                View all skills
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Featured Projects"
              subtitle="Some of my recent work and contributions"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
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
            </div>
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
              >
                View all projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="What People Say"
              subtitle="Feedback from colleagues and collaborators"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 relative"
                >
                  <FaQuoteLeft className="text-blue-600/20 text-4xl absolute top-6 left-6" />
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10 pt-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities, product ideas,
              and collaborative engineering projects. Let&apos;s connect!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                Get in Touch
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                Download Resume
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
