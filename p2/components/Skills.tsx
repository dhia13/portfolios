'use client'

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Server } from 'lucide-react'
import profileData from '@/profile.json'

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Array<{ name: string; percentage: number }>
}

export default function Skills() {
  const { skills } = profileData

  const categories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: <Code size={28} />,
      skills: skills.frontend,
    },
    {
      name: 'Backend',
      icon: <Server size={28} />,
      skills: skills.backend,
    },
    {
      name: 'Databases',
      icon: <Database size={28} />,
      skills: skills.databases,
    },
    {
      name: 'Mobile & Desktop',
      icon: <Smartphone size={28} />,
      skills: skills.mobileDesktop,
    },
  ]

  const SkillBar = ({
    name,
    percentage,
    delay = 0,
  }: {
    name: string
    percentage: number
    delay?: number
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-900 dark:text-gray-100">{name}</span>
          <span className="text-primary-600 dark:text-primary-400 font-bold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
          />
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DevOps Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary-100 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
              <Server size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">DevOps & Tools</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.devops.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

