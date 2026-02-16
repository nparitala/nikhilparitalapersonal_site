'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPython, FaDocker, FaGitAlt, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiDotnet, SiApachekafka, SiTypescript, SiKubernetes, SiHelm, SiGitlab, SiGo, SiRabbitmq, SiMicrosoftazure, SiTerraform, SiDynatrace } from 'react-icons/si';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import PageTransition from '@/components/PageTransition';

const categories = ['All', 'Backend', 'Frontend', 'Data', 'DevOps'] as const;

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  barColor: string;
  category: string;
}

const allSkills: Skill[] = [
  // Backend
  { name: 'C#', level: 90, icon: FaCode, color: 'text-indigo-500', barColor: 'bg-indigo-500', category: 'Backend' },
  { name: '.NET', level: 88, icon: SiDotnet, color: 'text-purple-500', barColor: 'bg-purple-500', category: 'Backend' },
  { name: 'Golang', level: 82, icon: SiGo, color: 'text-cyan-500', barColor: 'bg-cyan-500', category: 'Backend' },
  { name: 'Azure Functions', level: 80, icon: SiMicrosoftazure, color: 'text-blue-500', barColor: 'bg-blue-500', category: 'Backend' },
  { name: 'REST APIs', level: 90, icon: FaDatabase, color: 'text-blue-600', barColor: 'bg-blue-600', category: 'Backend' },
  { name: 'Python', level: 80, icon: FaPython, color: 'text-yellow-500', barColor: 'bg-yellow-500', category: 'Backend' },
  { name: 'Node.js', level: 75, icon: FaNodeJs, color: 'text-green-500', barColor: 'bg-green-500', category: 'Backend' },
  // Frontend
  { name: 'React', level: 85, icon: FaReact, color: 'text-cyan-500', barColor: 'bg-cyan-500', category: 'Frontend' },
  { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-500', barColor: 'bg-blue-500', category: 'Frontend' },
  { name: 'HTML5', level: 90, icon: FaHtml5, color: 'text-orange-500', barColor: 'bg-orange-500', category: 'Frontend' },
  { name: 'CSS3', level: 85, icon: FaCss3Alt, color: 'text-blue-400', barColor: 'bg-blue-400', category: 'Frontend' },
  // Data
  { name: 'SQL', level: 90, icon: FaDatabase, color: 'text-indigo-500', barColor: 'bg-indigo-500', category: 'Data' },
  { name: 'Apache Kafka', level: 80, icon: SiApachekafka, color: 'text-gray-700 dark:text-gray-300', barColor: 'bg-gray-700', category: 'Data' },
  { name: 'RabbitMQ', level: 78, icon: SiRabbitmq, color: 'text-orange-600', barColor: 'bg-orange-600', category: 'Data' },
  // DevOps
  { name: 'Git', level: 90, icon: FaGitAlt, color: 'text-orange-600', barColor: 'bg-orange-600', category: 'DevOps' },
  { name: 'Docker', level: 80, icon: FaDocker, color: 'text-blue-500', barColor: 'bg-blue-500', category: 'DevOps' },
  { name: 'AWS', level: 75, icon: FaAws, color: 'text-yellow-500', barColor: 'bg-yellow-500', category: 'DevOps' },
  { name: 'Azure', level: 75, icon: SiMicrosoftazure, color: 'text-blue-500', barColor: 'bg-blue-500', category: 'DevOps' },
  { name: 'Terraform', level: 80, icon: SiTerraform, color: 'text-purple-600', barColor: 'bg-purple-600', category: 'DevOps' },
  { name: 'Helm', level: 75, icon: SiHelm, color: 'text-blue-700', barColor: 'bg-blue-700', category: 'DevOps' },
  { name: 'Kubernetes', level: 70, icon: SiKubernetes, color: 'text-blue-600', barColor: 'bg-blue-600', category: 'DevOps' },
  { name: 'GitLab CI/CD', level: 82, icon: SiGitlab, color: 'text-orange-500', barColor: 'bg-orange-500', category: 'DevOps' },
  { name: 'Dynatrace', level: 78, icon: SiDynatrace, color: 'text-green-500', barColor: 'bg-green-500', category: 'DevOps' },
  { name: 'DQL', level: 72, icon: FaDatabase, color: 'text-cyan-600', barColor: 'bg-cyan-600', category: 'DevOps' },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technical Skills"
            subtitle="Technologies and tools I use to build reliable software systems"
          />

          {/* Category Tabs */}
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
                {category}
              </button>
            ))}
          </div>

          {/* Skills Icon Grid */}
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                >
                  <skill.icon className={`text-4xl mx-auto mb-3 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 block">{skill.name}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block">{skill.level}%</span>
                  {/* Mini progress indicator */}
                  <div className="mt-3 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${skill.barColor}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Detailed Progress Bars by Category */}
          {['Backend', 'Frontend', 'Data', 'DevOps'].map((category) => {
            const categorySkills = allSkills.filter((s) => s.category === category);
            if (activeCategory !== 'All' && activeCategory !== category) return null;

            return (
              <AnimatedSection key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`text-lg ${skill.color}`} />
                          <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${skill.barColor}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
