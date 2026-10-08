'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from 'lucide-react'
import profileData from '@/profile.json'
import { useState, useEffect } from 'react'

const experienceTexts = [
  { number: '1.5+', label: 'Professional Experience' },
  { number: '4+', label: 'Years of Experience in Development' },
]

export default function Hero() {
  const { personal } = profileData
  const [experienceText, setExperienceText] = useState(0)
  const [showCvDropdown, setShowCvDropdown] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setExperienceText((prev) => (prev + 1) % experienceTexts.length)
    }, 3000) // Switch every 3 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showCvDropdown && !target.closest('.cv-dropdown-container')) {
        setShowCvDropdown(false)
      }
    }

    if (showCvDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCvDropdown])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 font-semibold text-lg"
            >
              {personal.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium"
            >
              {personal.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 text-gray-600 dark:text-gray-400"
            >
              <MapPin size={20} />
              <span>{personal.location}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              {profileData.about.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <div className="relative cv-dropdown-container">
                <button
                  onClick={() => setShowCvDropdown(!showCvDropdown)}
                  className="px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                  <ChevronDown size={16} className={`transition-transform ${showCvDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCvDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-10 min-w-[200px]">
                    <a
                      href={personal.cv.pdf}
                      download
                      onClick={() => setShowCvDropdown(false)}
                      className="block px-4 py-3 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      Download CV (PDF)
                    </a>
                    <a
                      href={personal.cv.docx}
                      download
                      onClick={() => setShowCvDropdown(false)}
                      className="block px-4 py-3 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
                    >
                      Download CV (DOCX)
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={experienceText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-6xl font-bold mb-4">
                        {experienceTexts[experienceText].number}
                      </div>
                      <div className="text-xl">
                        {experienceTexts[experienceText].label}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

