'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import profileData from '@/profile.json'

export default function About() {
  const { about } = profileData

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {about.summary}
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Briefcase className="text-primary-600" size={32} />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Professional Experience</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {about.professionalExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-primary-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.role}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      exp.status === 'Live'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-semibold">Duration:</span> {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

