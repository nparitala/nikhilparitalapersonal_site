'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaCertificate, FaCode, FaDatabase, FaRobot, FaBookOpen, FaHeartbeat, FaLanguage } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const experiences = [
  {
    period: '2024 - Present',
    role: 'Senior Software Engineer | Platform Engineer',
    company: 'TCW',
    location: 'United States',
    description: 'Building scalable platform services, cloud-native systems, and full-stack capabilities with strong focus on reliability, performance, and clean architecture.',
  },
  {
    period: '2022 - 2023',
    role: 'Backend / Full Stack Engineer',
    company: 'Engineering Team',
    location: 'United States',
    description: 'Developed end-to-end features across backend and frontend layers, improved deployment workflows, and optimized data-intensive services.',
  },
  {
    period: '2019 - 2021',
    role: 'Software Engineer (Early Career)',
    company: 'Application Development',
    location: 'India',
    description: 'Contributed to core product modules, implemented REST integrations, and built a strong foundation in software design and delivery.',
  },
];

const education = [
  {
    degree: "Master's Degree in Data Science",
    institution: 'Lewis University, Chicago',
    period: 'Completed',
    courses: ['Machine Learning', 'Statistical Modeling', 'Data Engineering', 'Data Visualization'],
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'Jawaharlal Nehru Technological University',
    period: 'Completed',
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Computer Networks'],
  },
];

const interests = [
  { name: 'Backend Systems', icon: FaHeartbeat, color: 'text-red-500' },
  { name: 'System Design', icon: FaDatabase, color: 'text-blue-500' },
  { name: 'AI & ML', icon: FaRobot, color: 'text-purple-500' },
  { name: 'Cloud & DevOps', icon: FaCode, color: 'text-green-500' },
  { name: 'Continuous Learning', icon: FaBookOpen, color: 'text-yellow-500' },
  { name: 'Languages', icon: FaLanguage, color: 'text-cyan-500' },
];

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Professional Certificate',
  },
  {
    title: 'PCEP - Certified Entry-Level Python Programmer',
    issuer: 'Python Institute',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Personal Introduction */}
          <AnimatedSection>
            <section className="mb-20">
              <SectionHeading title="About Me" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Hello! I&apos;m Nikhil Paritala, a Software Engineer focused on building practical,
                    scalable products. I specialize in backend and platform engineering with .NET,
                    data-centric service development, and clean API design.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    I enjoy solving complex engineering problems across architecture, implementation,
                    and deployment. My work emphasizes maintainability, performance, and shipping
                    software that creates measurable impact.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FaDownload className="text-sm" />
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Nikhil Paritala"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-600/20 rounded-2xl -z-10" />
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Professional Journey - Timeline */}
          <AnimatedSection>
            <section className="mb-20">
              <SectionHeading title="Professional Journey" subtitle="My path in software engineering" />
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform md:-translate-x-1/2" />

                <div className="space-y-12">
                  {experiences.map((experience, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } items-start md:items-center`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 ring-4 ring-white dark:ring-gray-900" />

                      {/* Content card */}
                      <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{experience.period}</span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{experience.role}</h3>
                          <p className="text-gray-500 dark:text-gray-400 mb-2">{experience.company} &middot; {experience.location}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{experience.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection>
            <section className="mb-20">
              <SectionHeading title="Education" subtitle="Academic background and coursework" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <FaGraduationCap className="text-2xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">{edu.period}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.courses.map((course) => (
                            <span key={course} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <section className="mb-20">
              <SectionHeading title="Certifications" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg inline-flex items-start gap-4"
                  >
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FaCertificate className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-gray-900 dark:text-white">{cert.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Interests */}
          <AnimatedSection>
            <section>
              <SectionHeading title="Interests & Passions" subtitle="What drives me beyond the code" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <interest.icon className={`text-3xl mx-auto mb-3 ${interest.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  Beyond coding, I&apos;m passionate about engineering craftsmanship, collaborative problem
                  solving, and continuous learning. I regularly explore distributed systems, AI/ML use cases,
                  and cloud-native architecture patterns. I speak English, Telugu, and Hindi, which helps me
                  collaborate effectively across diverse teams.
                </p>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
