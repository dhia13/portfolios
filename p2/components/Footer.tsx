'use client'

import { Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react'
import profileData from '@/profile.json'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { footer, personal } = profileData

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footer.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target={resource.external ? '_blank' : undefined}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                    download={resource.download}
                    className="hover:text-primary-400 dark:hover:text-primary-500 transition-colors flex items-center gap-2"
                  >
                    {resource.text}
                    {resource.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            {footer.copyright} © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  )
}

